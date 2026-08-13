(function () {
  // --- Shuffle: randomize question order AND option/answer order every load ---
  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildShuffledQuizData(data) {
    return shuffleArray(data).map((original) => {
      const q = JSON.parse(JSON.stringify(original));
      if (q.type === "single") {
        const order = shuffleArray(q.options.map((_, i) => i));
        q.options = order.map((i) => q.options[i]);
        q.correct = order.indexOf(original.correct);
      } else if (q.type === "multiple") {
        const order = shuffleArray(q.options.map((_, i) => i));
        q.options = order.map((i) => q.options[i]);
        q.correct = original.correct.map((oldIdx) => order.indexOf(oldIdx));
      } else if (q.type === "match" || q.type === "matchmulti") {
        q.options = shuffleArray(q.options); // bank order
        q.pairs = shuffleArray(q.pairs); // row order
      } else if (q.type === "grid") {
        const rowOrder = shuffleArray(q.rows.map((_, i) => i));
        const colOrder = shuffleArray(q.cols.map((_, i) => i));
        q.rows = rowOrder.map((i) => q.rows[i]);
        q.cols = colOrder.map((i) => q.cols[i]);
        q.correct = original.correct.map(([r, c]) => [
          rowOrder.indexOf(r),
          colOrder.indexOf(c),
        ]);
      }
      return q;
    });
  }

  const SHUFFLED_QUIZ_DATA = buildShuffledQuizData(QUIZ_DATA);
  const ORIGINAL_QUIZ_DATA = QUIZ_DATA.map((q) => JSON.parse(JSON.stringify(q)));

  // --- Topic tagging: classify every question as CSDM or CMDB ---
  const CSDM_PATTERN = /csdm|common service data model/i;

  function getTopic(q) {
    const chunks = [q.question];
    if (Array.isArray(q.options)) chunks.push(...q.options);
    if (Array.isArray(q.pairs)) {
      q.pairs.forEach((p) => {
        chunks.push(p.left);
        if (Array.isArray(p.right)) chunks.push(...p.right);
        else chunks.push(p.right);
      });
    }
    if (Array.isArray(q.rows)) chunks.push(...q.rows);
    if (Array.isArray(q.cols)) chunks.push(...q.cols);
    return CSDM_PATTERN.test(chunks.filter(Boolean).join(" ")) ? "CSDM" : "CMDB";
  }

  [SHUFFLED_QUIZ_DATA, ORIGINAL_QUIZ_DATA].forEach((arr) =>
    arr.forEach((q) => {
      q.topic = getTopic(q);
    }),
  );

  // --- Shuffle toggle: choose which base ordering to use ---
  let SHUFFLE_ENABLED = true;
  function getBaseData() {
    return SHUFFLE_ENABLED ? SHUFFLED_QUIZ_DATA : ORIGINAL_QUIZ_DATA;
  }

  // --- Filtering: All / CMDB / CSDM ---
  let ACTIVE_FILTER = "all";
  let ACTIVE_DATA = getBaseData();
  let TOTAL = ACTIVE_DATA.length;

  // state[qid] = {
  //   type, submitted: bool,
  //   selected: (single) number | (multiple) Set<number> | (match) {} leftIdx->rightText
  //             | (matchmulti) {} leftIdx->array of selected strings | (grid) Set<"r-c">
  //   correctFlag: bool  (overall correct/incorrect once submitted)
  // }
  function buildFreshState() {
    const s = {};
    SHUFFLED_QUIZ_DATA.forEach((q) => {
      s[q.id] = {
        type: q.type,
        submitted: false,
        selected:
          q.type === "multiple"
            ? new Set()
            : q.type === "match"
              ? {}
              : q.type === "matchmulti"
                ? (() => {
                    const obj = {};
                    q.pairs.forEach((p, i) => {
                      obj[i] = new Array(p.right.length).fill("");
                    });
                    return obj;
                  })()
                : q.type === "grid"
                  ? new Set()
                  : null,
        correctFlag: null,
      };
    });
    return s;
  }

  function hasAnyProgress() {
    return Object.values(state).some((st) => {
      if (st.submitted) return true;
      if (st.type === "multiple") return st.selected.size > 0;
      if (st.type === "match") return Object.keys(st.selected).length > 0;
      if (st.type === "matchmulti")
        return Object.values(st.selected).some((arr) => arr.some(Boolean));
      if (st.type === "grid") return st.selected.size > 0;
      return st.selected !== null && st.selected !== undefined;
    });
  }

  let state = buildFreshState();

  let currentIndex = 0;
  let armedChipValue = null; // for click-to-place fallback (mobile / no drag support)

  const qGrid = document.getElementById("qGrid");
  const questionCard = document.getElementById("questionCard");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const clearBtn = document.getElementById("clearBtn");
  const finishBtn = document.getElementById("finishBtn");
  const progressBar = document.getElementById("progressBar");
  const scoreSummary = document.getElementById("scoreSummary");
  const sidebar = document.getElementById("sidebar");
  const jumpToggle = document.getElementById("jumpToggle");
  const resultsOverlay = document.getElementById("resultsOverlay");
  const resultsBody = document.getElementById("resultsBody");
  const reviewBtn = document.getElementById("reviewBtn");
  const restartBtn = document.getElementById("restartBtn");
  const exportBtn = document.getElementById("exportBtn");

  // --- Filter bar (injected into the sidebar, above the question grid) ---
  function countByTopic(topic) {
    return topic === "all"
      ? SHUFFLED_QUIZ_DATA.length
      : SHUFFLED_QUIZ_DATA.filter((q) => q.topic === topic.toUpperCase())
          .length;
  }

  function buildFilterBar() {
    const bar = document.createElement("div");
    bar.className = "filter-bar";
    bar.innerHTML = `
      <div class="filter-bar-label">Filter questions</div>
      <div class="filter-bar-buttons">
        <button type="button" class="filter-btn" data-filter="all">All <span class="filter-count">${countByTopic("all")}</span></button>
        <button type="button" class="filter-btn" data-filter="cmdb">CMDB <span class="filter-count">${countByTopic("cmdb")}</span></button>
        <button type="button" class="filter-btn" data-filter="csdm">CSDM <span class="filter-count">${countByTopic("csdm")}</span></button>
      </div>
      <label class="shuffle-toggle-row">
        <input type="checkbox" id="shuffleToggle" ${SHUFFLE_ENABLED ? "checked" : ""}>
        <span>Shuffle questions &amp; answers</span>
      </label>
    `;
    sidebar.insertBefore(bar, qGrid);
    bar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });
    bar
      .querySelector("#shuffleToggle")
      .addEventListener("change", onShuffleToggleChange);
    injectFilterStyles();
    updateFilterBarUI();
  }

  function updateFilterBarUI() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === ACTIVE_FILTER);
    });
    const toggle = document.getElementById("shuffleToggle");
    if (toggle) toggle.checked = SHUFFLE_ENABLED;
  }

  function applyActiveData() {
    const base = getBaseData();
    ACTIVE_DATA =
      ACTIVE_FILTER === "all"
        ? base
        : base.filter((q) => q.topic === ACTIVE_FILTER.toUpperCase());
    TOTAL = ACTIVE_DATA.length;
    currentIndex = 0;
    updateFilterBarUI();
    buildGrid();
    render();
  }

  function setFilter(filter) {
    if (filter === ACTIVE_FILTER) return;
    ACTIVE_FILTER = filter;
    applyActiveData();
  }

  function onShuffleToggleChange(e) {
    const wantsEnabled = e.target.checked;
    if (hasAnyProgress()) {
      const proceed = window.confirm(
        "Switching shuffle mode will reset all your current answers and progress. Continue?",
      );
      if (!proceed) {
        e.target.checked = SHUFFLE_ENABLED; // revert the click
        return;
      }
    }
    SHUFFLE_ENABLED = wantsEnabled;
    state = buildFreshState();
    applyActiveData();
  }

  function injectFilterStyles() {
    if (document.getElementById("filter-bar-styles")) return;
    const style = document.createElement("style");
    style.id = "filter-bar-styles";
    style.textContent = `
      .filter-bar { padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 8px; }
      .filter-bar-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.6; margin-bottom: 6px; }
      .filter-bar-buttons { display: flex; gap: 6px; flex-wrap: wrap; }
      .filter-btn { flex: 1 1 auto; padding: 6px 8px; font-size: 12.5px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);
        background: rgba(255,255,255,0.04); color: inherit; cursor: pointer; white-space: nowrap; }
      .filter-btn:hover { background: rgba(255,255,255,0.09); }
      .filter-btn.active { background: #3b82f6; border-color: #3b82f6; color: #fff; }
      .filter-count { opacity: 0.75; font-size: 11px; margin-left: 2px; }
      .filter-btn.active .filter-count { opacity: 0.9; }
      .shuffle-toggle-row { display: flex; align-items: center; gap: 6px; margin-top: 10px; font-size: 12.5px;
        cursor: pointer; user-select: none; opacity: 0.9; }
      .shuffle-toggle-row input[type="checkbox"] { width: 14px; height: 14px; cursor: pointer; accent-color: #3b82f6; }
    `;
    document.head.appendChild(style);
  }

  function buildGrid() {
    qGrid.innerHTML = "";
    ACTIVE_DATA.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.textContent = q.id;
      btn.addEventListener("click", () => {
        currentIndex = idx;
        render();
      });
      qGrid.appendChild(btn);
    });
    refreshGrid();
  }

  function refreshGrid() {
    const btns = qGrid.querySelectorAll("button");
    ACTIVE_DATA.forEach((q, idx) => {
      const st = state[q.id];
      const btn = btns[idx];
      btn.className = "";
      if (idx === currentIndex) btn.classList.add("current");
      if (st.submitted) {
        btn.classList.add(st.correctFlag ? "correct" : "incorrect");
      } else if (isAnswered(q)) {
        btn.classList.add("answered");
      }
    });
  }

  function isAnswered(q) {
    const st = state[q.id];
    if (q.type === "single")
      return st.selected !== null && st.selected !== undefined;
    if (q.type === "multiple") return st.selected.size > 0;
    if (q.type === "match") return Object.keys(st.selected).length > 0;
    if (q.type === "matchmulti")
      return Object.values(st.selected).some((arr) => arr.some((v) => v));
    if (q.type === "grid") return st.selected.size > 0;
    return false;
  }

  function isFullyAnswered(q) {
    const st = state[q.id];
    if (q.type === "single") return isAnswered(q);
    if (q.type === "multiple") return st.selected.size > 0;
    if (q.type === "match")
      return (
        Object.keys(st.selected).length === q.pairs.length &&
        q.pairs.every((p, i) => st.selected[i])
      );
    if (q.type === "matchmulti")
      return q.pairs.every((p, i) => st.selected[i].every((v) => v));
    if (q.type === "grid") return st.selected.size > 0;
    return false;
  }

  function updateSummary() {
    let answered = 0,
      submitted = 0;
    ACTIVE_DATA.forEach((q) => {
      if (isAnswered(q)) answered++;
      if (state[q.id].submitted) submitted++;
    });
    scoreSummary.textContent = `Answered: ${answered} / ${TOTAL}  |  Submitted: ${submitted} / ${TOTAL}`;
    progressBar.style.width = `${(submitted / TOTAL) * 100}%`;
  }

  function render() {
    const q = ACTIVE_DATA[currentIndex];
    const st = state[q.id];
    questionCard.classList.toggle("locked", st.submitted);

    let html = `<div class="q-meta">Question ${q.id} <span style="opacity:0.6">(${currentIndex + 1} of ${TOTAL} in this quiz)</span>
      <span class="q-type-badge">${typeLabel(q.type)}</span></div>
      <div class="q-text">${q.question}</div>`;

    if (q.type === "single") html += renderSingle(q, st);
    else if (q.type === "multiple") html += renderMultiple(q, st);
    else if (q.type === "match") html += renderMatch(q, st);
    else if (q.type === "matchmulti") html += renderMatchMulti(q, st);
    else if (q.type === "grid") html += renderGrid(q, st);

    if (st.submitted) {
      html += `<div class="feedback-banner ${st.correctFlag ? "correct" : "incorrect"}">
        ${st.correctFlag ? "✅ Correct!" : "❌ Not quite — review the highlighted answer(s) above."}
      </div>`;
    }

    questionCard.innerHTML = html;
    attachHandlers(q, st);

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === TOTAL - 1;
    submitBtn.disabled = st.submitted || !isFullyAnswered(q);
    submitBtn.textContent = st.submitted ? "Submitted" : "Submit Answer";
    clearBtn.disabled = st.submitted;

    refreshGrid();
    updateSummary();
  }

  function typeLabel(t) {
    return {
      single: "Single Choice",
      multiple: "Multiple Choice",
      match: "Matching",
      matchmulti: "Matching (multi)",
      grid: "Multi-Select Grid",
    }[t];
  }

  function renderSingle(q, st) {
    return (
      `<div class="options">` +
      q.options
        .map((opt, i) => {
          let cls = "option";
          let icon = "";
          if (st.selected === i) cls += " selected";
          if (st.submitted) {
            if (i === q.correct) {
              cls += " reveal-correct";
              icon = `<span class="opt-icon ok">✓</span>`;
            } else if (st.selected === i) {
              cls += " reveal-incorrect";
              icon = `<span class="opt-icon bad">✕</span>`;
            }
          }
          return `<label class="${cls}" data-idx="${i}">
        <input type="radio" name="single-opt" data-idx="${i}" ${st.selected === i ? "checked" : ""} ${st.submitted ? "disabled" : ""}>
        <span class="opt-text">${opt}</span>${icon}
      </label>`;
        })
        .join("") +
      `</div>`
    );
  }

  function renderMultiple(q, st) {
    return (
      `<div class="options">` +
      q.options
        .map((opt, i) => {
          let cls = "option";
          let icon = "";
          const isSel = st.selected.has(i);
          if (isSel) cls += " selected";
          if (st.submitted) {
            const shouldBe = q.correct.includes(i);
            if (shouldBe) {
              cls += " reveal-correct";
              icon = `<span class="opt-icon ok">✓</span>`;
            } else if (isSel) {
              cls += " reveal-incorrect";
              icon = `<span class="opt-icon bad">✕</span>`;
            }
          }
          return `<label class="${cls}" data-idx="${i}">
        <input type="checkbox" data-idx="${i}" ${isSel ? "checked" : ""} ${st.submitted ? "disabled" : ""}>
        <span class="opt-text">${opt}</span>${icon}
      </label>`;
        })
        .join("") +
      `</div>`
    );
  }

  function renderMatch(q, st) {
    const placedValues = Object.values(st.selected);
    const bankItems = q.options.filter((o) => !placedValues.includes(o));

    const rowsHtml = q.pairs
      .map((p, i) => {
        const val = st.selected[i] || "";
        let rowCls = "match-row";
        let feedback = "";
        if (st.submitted) {
          const ok = val === p.right;
          rowCls += ok ? " reveal-correct" : " reveal-incorrect";
          feedback = ok
            ? `<span class="match-feedback ok">✓</span>`
            : `<span class="match-feedback bad">✕</span>`;
        }
        const hint =
          st.submitted && val !== p.right
            ? `<div class="correct-hint">Correct: ${p.right}</div>`
            : "";
        const dropCls =
          "match-drop" +
          (val ? " filled" : "") +
          (st.submitted ? " locked" : "");
        const dropContent = val
          ? `<span class="drop-value">${val}</span>${!st.submitted ? `<span class="drop-clear" data-clear-idx="${i}" title="Remove">✕</span>` : ""}`
          : `<span class="drop-placeholder">Drop answer here</span>`;
        return `<div class="${rowCls}">
        <div class="match-left">${p.left}${hint}</div>
        <div class="${dropCls}" data-idx="${i}">${dropContent}</div>
        ${feedback}
      </div>`;
      })
      .join("");

    const bankHtml = bankItems.length
      ? `<div class="match-bank-label">Drag an answer onto its match:</div>
         <div class="match-bank">
           ${bankItems.map((o) => `<div class="match-chip" draggable="true" data-value="${escapeAttr(o)}">${o}</div>`).join("")}
         </div>`
      : "";

    return `<div class="match-container">
      <div class="match-rows">${rowsHtml}</div>
      ${!st.submitted ? bankHtml : ""}
    </div>`;
  }

  function renderMatchMulti(q, st) {
    const placedValues = Object.values(st.selected).flat().filter(Boolean);
    const bankItems = q.options.filter((o) => !placedValues.includes(o));

    const rowsHtml = q.pairs
      .map((p, i) => {
        const vals = st.selected[i];
        let rowCls = "match-row matchmulti-row";
        let feedback = "";
        let ok = false;
        if (st.submitted) {
          const selSet = new Set(vals.filter(Boolean));
          const corSet = new Set(p.right);
          ok =
            selSet.size === corSet.size &&
            [...selSet].every((v) => corSet.has(v));
          rowCls += ok ? " reveal-correct" : " reveal-incorrect";
          feedback = ok
            ? `<span class="match-feedback ok">✓</span>`
            : `<span class="match-feedback bad">✕</span>`;
        }
        const dropsHtml = vals
          .map((val, slotIdx) => {
            const dropCls =
              "match-drop matchmulti-drop" +
              (val ? " filled" : "") +
              (st.submitted ? " locked" : "");
            const dropContent = val
              ? `<span class="drop-value">${val}</span>${!st.submitted ? `<span class="drop-clear" data-clear-row="${i}" data-clear-slot="${slotIdx}" title="Remove">✕</span>` : ""}`
              : `<span class="drop-placeholder">Drop here</span>`;
            return `<div class="${dropCls}" data-row="${i}" data-slot="${slotIdx}">${dropContent}</div>`;
          })
          .join("");
        const hint =
          st.submitted && !ok
            ? `<div class="correct-hint">Correct: ${p.right.join(", ")}</div>`
            : "";
        return `<div class="${rowCls}">
        <div class="match-left">${p.left}${hint}</div>
        <div class="matchmulti-selects">${dropsHtml}</div>
        ${feedback}
      </div>`;
      })
      .join("");

    const bankHtml = bankItems.length
      ? `<div class="match-bank-label">Drag an answer onto its match:</div>
         <div class="match-bank">
           ${bankItems.map((o) => `<div class="match-chip" draggable="true" data-value="${escapeAttr(o)}">${o}</div>`).join("")}
         </div>`
      : "";

    return `<div class="match-container">
      <div class="match-rows">${rowsHtml}</div>
      ${!st.submitted ? bankHtml : ""}
    </div>`;
  }

  function renderGrid(q, st) {
    let html =
      `<table class="grid-table"><thead><tr><th></th>` +
      q.cols.map((c) => `<th>${c}</th>`).join("") +
      `</tr></thead><tbody>`;
    q.rows.forEach((r, ri) => {
      html += `<tr><td>${r}</td>`;
      q.cols.forEach((c, ci) => {
        const key = `${ri}-${ci}`;
        const checked = st.selected.has(key);
        const isCorrectCell = q.correct.some(
          ([rr, cc]) => rr === ri && cc === ci,
        );
        let cellCls = "";
        if (st.submitted) {
          if (isCorrectCell && checked) cellCls = "cell-correct";
          else if (isCorrectCell && !checked) cellCls = "cell-missed";
          else if (!isCorrectCell && checked) cellCls = "cell-incorrect";
        }
        html += `<td class="${cellCls}"><input type="checkbox" data-key="${key}" ${checked ? "checked" : ""} ${st.submitted ? "disabled" : ""}></td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    return html;
  }

  function escapeAttr(s) {
    return s.replace(/"/g, "&quot;");
  }

  function attachChipHandlers() {
    questionCard.querySelectorAll(".match-chip").forEach((chip) => {
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", chip.dataset.value);
        e.dataTransfer.effectAllowed = "move";
        chip.classList.add("dragging");
      });
      chip.addEventListener("dragend", () => chip.classList.remove("dragging"));

      // Click-to-arm fallback (mobile / no native DnD)
      chip.addEventListener("click", () => {
        const isArmed = chip.classList.contains("armed");
        questionCard
          .querySelectorAll(".match-chip.armed")
          .forEach((c) => c.classList.remove("armed"));
        if (isArmed) {
          armedChipValue = null;
        } else {
          armedChipValue = chip.dataset.value;
          chip.classList.add("armed");
        }
      });
    });
  }

  function attachDropZoneHandlers(zone, { onPlace, onClear }) {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      zone.classList.add("drag-over");
    });
    zone.addEventListener("dragleave", () =>
      zone.classList.remove("drag-over"),
    );
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const value = e.dataTransfer.getData("text/plain");
      if (value) onPlace(value);
    });

    zone.addEventListener("click", (e) => {
      if (e.target.closest(".drop-clear")) return; // handled by its own listener
      if (armedChipValue) {
        onPlace(armedChipValue);
      } else if (zone.classList.contains("filled")) {
        onClear();
      }
    });
  }

  function attachHandlers(q, st) {
    if (st.submitted) return;

    if (q.type === "single") {
      questionCard
        .querySelectorAll('input[name="single-opt"]')
        .forEach((inp) => {
          inp.addEventListener("change", () => {
            st.selected = parseInt(inp.dataset.idx, 10);
            render();
          });
        });
    } else if (q.type === "multiple") {
      questionCard
        .querySelectorAll('.option input[type="checkbox"]')
        .forEach((inp) => {
          inp.addEventListener("change", () => {
            const idx = parseInt(inp.dataset.idx, 10);
            if (inp.checked) st.selected.add(idx);
            else st.selected.delete(idx);
            render();
          });
        });
    } else if (q.type === "match") {
      armedChipValue = null;

      const placeValue = (idx, value) => {
        st.selected[idx] = value;
        armedChipValue = null;
        render();
      };
      const clearSlot = (idx) => {
        delete st.selected[idx];
        armedChipValue = null;
        render();
      };

      attachChipHandlers();

      questionCard.querySelectorAll(".match-drop").forEach((zone) => {
        const idx = parseInt(zone.dataset.idx, 10);
        attachDropZoneHandlers(zone, {
          onPlace: (value) => placeValue(idx, value),
          onClear: () => clearSlot(idx),
        });
      });

      questionCard
        .querySelectorAll(".drop-clear[data-clear-idx]")
        .forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            clearSlot(parseInt(btn.dataset.clearIdx, 10));
          });
        });
    } else if (q.type === "matchmulti") {
      armedChipValue = null;

      const placeValue = (row, slot, value) => {
        st.selected[row][slot] = value;
        armedChipValue = null;
        render();
      };
      const clearSlot = (row, slot) => {
        st.selected[row][slot] = "";
        armedChipValue = null;
        render();
      };

      attachChipHandlers();

      questionCard.querySelectorAll(".matchmulti-drop").forEach((zone) => {
        const row = parseInt(zone.dataset.row, 10);
        const slot = parseInt(zone.dataset.slot, 10);
        attachDropZoneHandlers(zone, {
          onPlace: (value) => placeValue(row, slot, value),
          onClear: () => clearSlot(row, slot),
        });
      });

      questionCard
        .querySelectorAll(".drop-clear[data-clear-row]")
        .forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            clearSlot(
              parseInt(btn.dataset.clearRow, 10),
              parseInt(btn.dataset.clearSlot, 10),
            );
          });
        });
    } else if (q.type === "grid") {
      questionCard
        .querySelectorAll('input[type="checkbox"][data-key]')
        .forEach((cb) => {
          cb.addEventListener("change", () => {
            const key = cb.dataset.key;
            if (st.selected.has(key)) st.selected.delete(key);
            else st.selected.add(key);
            render();
          });
        });
    }
  }

  function gradeQuestion(q, st) {
    if (q.type === "single") return st.selected === q.correct;
    if (q.type === "multiple") {
      const sel = [...st.selected].sort().join(",");
      const cor = [...q.correct].sort().join(",");
      return sel === cor;
    }
    if (q.type === "match") {
      return q.pairs.every((p, i) => st.selected[i] === p.right);
    }
    if (q.type === "matchmulti") {
      return q.pairs.every((p, i) => {
        const selSet = new Set(st.selected[i].filter(Boolean));
        const corSet = new Set(p.right);
        return (
          selSet.size === corSet.size && [...selSet].every((v) => corSet.has(v))
        );
      });
    }
    if (q.type === "grid") {
      const selSet = st.selected;
      const corSet = new Set(q.correct.map(([r, c]) => `${r}-${c}`));
      if (selSet.size !== corSet.size) return false;
      for (const k of selSet) if (!corSet.has(k)) return false;
      return true;
    }
    return false;
  }

  // --- Export to Excel ---

  function userAnswerText(q, st) {
    if (!isAnswered(q)) return "(skipped)";
    if (q.type === "single") return q.options[st.selected];
    if (q.type === "multiple")
      return [...st.selected].map((i) => q.options[i]).join("; ");
    if (q.type === "match")
      return q.pairs
        .map((p, i) => `${p.left} -> ${st.selected[i] || "(blank)"}`)
        .join(" | ");
    if (q.type === "matchmulti")
      return q.pairs
        .map(
          (p, i) =>
            `${p.left} -> ${st.selected[i].filter(Boolean).join(", ") || "(blank)"}`,
        )
        .join(" | ");
    if (q.type === "grid")
      return [...st.selected]
        .map((k) => {
          const [r, c] = k.split("-").map(Number);
          return `${q.rows[r]} / ${q.cols[c]}`;
        })
        .join("; ");
    return "";
  }

  function correctAnswerText(q) {
    if (q.type === "single") return q.options[q.correct];
    if (q.type === "multiple")
      return q.correct.map((i) => q.options[i]).join("; ");
    if (q.type === "match")
      return q.pairs.map((p) => `${p.left} -> ${p.right}`).join(" | ");
    if (q.type === "matchmulti")
      return q.pairs
        .map((p) => `${p.left} -> ${p.right.join(", ")}`)
        .join(" | ");
    if (q.type === "grid")
      return q.correct
        .map(([r, c]) => `${q.rows[r]} / ${q.cols[c]}`)
        .join("; ");
    return "";
  }

  function buildExportRows() {
    return ACTIVE_DATA.map((q) => {
      const st = state[q.id];
      let status;
      if (!st.submitted) status = "Skipped";
      else status = st.correctFlag ? "Correct" : "Incorrect";
      return {
        "Q#": q.id,
        Type: typeLabel(q.type),
        Question: q.question,
        "Your Answer": st.submitted ? userAnswerText(q, st) : "(skipped)",
        "Correct Answer": correctAnswerText(q),
        Status: status,
      };
    });
  }

  function exportToExcel() {
    if (typeof XLSX === "undefined") {
      alert(
        "Excel export library failed to load. Please check your internet connection and try again.",
      );
      return;
    }
    const rows = buildExportRows();
    const correctRows = rows.filter((r) => r.Status === "Correct");
    const incorrectRows = rows.filter((r) => r.Status === "Incorrect");
    const skippedRows = rows.filter((r) => r.Status === "Skipped");

    const wb = XLSX.utils.book_new();

    const addSheet = (name, data) => {
      const ws = XLSX.utils.json_to_sheet(data.length ? data : [{ "Q#": "" }]);
      ws["!cols"] = [
        { wch: 6 },
        { wch: 16 },
        { wch: 60 },
        { wch: 40 },
        { wch: 40 },
        { wch: 12 },
      ];
      XLSX.utils.book_append_sheet(wb, ws, name);
    };

    addSheet("All Questions", rows);
    addSheet("Correct", correctRows);
    addSheet("Incorrect", incorrectRows);
    addSheet("Skipped", skippedRows);

    const summary = [
      { Metric: "Total Questions", Value: TOTAL },
      { Metric: "Correct", Value: correctRows.length },
      { Metric: "Incorrect", Value: incorrectRows.length },
      { Metric: "Skipped", Value: skippedRows.length },
      {
        Metric: "Accuracy (of attempted)",
        Value:
          correctRows.length + incorrectRows.length > 0
            ? `${Math.round(
                (correctRows.length /
                  (correctRows.length + incorrectRows.length)) *
                  100,
              )}%`
            : "N/A",
      },
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    summaryWs["!cols"] = [{ wch: 24 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");

    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
    XLSX.writeFile(wb, `quiz-results-${stamp}.xlsx`);
  }

  if (exportBtn) exportBtn.addEventListener("click", exportToExcel);

  submitBtn.addEventListener("click", () => {
    const q = ACTIVE_DATA[currentIndex];
    const st = state[q.id];
    if (st.submitted || !isFullyAnswered(q)) return;
    st.submitted = true;
    st.correctFlag = gradeQuestion(q, st);
    render();
  });

  clearBtn.addEventListener("click", () => {
    const q = ACTIVE_DATA[currentIndex];
    const st = state[q.id];
    if (st.submitted) return;
    if (q.type === "multiple") st.selected = new Set();
    else if (q.type === "match") st.selected = {};
    else if (q.type === "matchmulti") {
      const obj = {};
      q.pairs.forEach((p, i) => {
        obj[i] = new Array(p.right.length).fill("");
      });
      st.selected = obj;
    } else if (q.type === "grid") st.selected = new Set();
    else st.selected = null;
    render();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      render();
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentIndex < TOTAL - 1) {
      currentIndex++;
      render();
    }
  });

  jumpToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

  finishBtn.addEventListener("click", () => {
    let submittedCount = 0,
      correctCount = 0;
    ACTIVE_DATA.forEach((q) => {
      const st = state[q.id];
      if (st.submitted) {
        submittedCount++;
        if (st.correctFlag) correctCount++;
      }
    });
    const unsubmitted = TOTAL - submittedCount;
    const pct =
      submittedCount > 0
        ? Math.round((correctCount / submittedCount) * 100)
        : 0;

    resultsBody.innerHTML = `
      <div class="result-score">${correctCount} / ${submittedCount || 0}</div>
      <div class="result-stat"><span>Questions submitted</span><span>${submittedCount} / ${TOTAL}</span></div>
      <div class="result-stat"><span>Correct answers</span><span>${correctCount}</span></div>
      <div class="result-stat"><span>Incorrect answers</span><span>${submittedCount - correctCount}</span></div>
      <div class="result-stat"><span>Not yet submitted</span><span>${unsubmitted}</span></div>
      <div class="result-stat"><span>Accuracy (of submitted)</span><span>${pct}%</span></div>
    `;
    resultsOverlay.classList.add("show");
  });

  reviewBtn.addEventListener("click", () => {
    resultsOverlay.classList.remove("show");
    // jump to first unsubmitted question, if any, else stay
    const firstUnsubmitted = ACTIVE_DATA.findIndex((q) => !state[q.id].submitted);
    currentIndex = firstUnsubmitted !== -1 ? firstUnsubmitted : 0;
    render();
  });

  restartBtn.addEventListener("click", () => {
    ACTIVE_DATA.forEach((q) => {
      state[q.id].submitted = false;
      state[q.id].correctFlag = null;
      if (q.type === "multiple") state[q.id].selected = new Set();
      else if (q.type === "match") state[q.id].selected = {};
      else if (q.type === "matchmulti") {
        const obj = {};
        q.pairs.forEach((p, i) => {
          obj[i] = new Array(p.right.length).fill("");
        });
        state[q.id].selected = obj;
      } else if (q.type === "grid") state[q.id].selected = new Set();
      else state[q.id].selected = null;
    });
    currentIndex = 0;
    resultsOverlay.classList.remove("show");
    render();
  });

  // close sidebar on mobile after choosing a question
  qGrid.addEventListener("click", () => {
    if (window.innerWidth <= 860) sidebar.classList.remove("open");
  });

  buildFilterBar();
  buildGrid();
  render();
})();
