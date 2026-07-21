(function () {
  const TOTAL = QUIZ_DATA.length;

  // state[qid] = {
  //   type, submitted: bool,
  //   selected: (single) number | (multiple) Set<number> | (match) {} leftIdx->rightText | (grid) Set<"r-c">
  //   correctFlag: bool  (overall correct/incorrect once submitted)
  // }
  const state = {};
  QUIZ_DATA.forEach(q => {
    state[q.id] = {
      type: q.type,
      submitted: false,
      selected: q.type === "multiple" ? new Set()
               : q.type === "match" ? {}
               : q.type === "grid" ? new Set()
               : null,
      correctFlag: null
    };
  });

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

  function buildGrid() {
    qGrid.innerHTML = "";
    QUIZ_DATA.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.textContent = idx + 1;
      btn.addEventListener("click", () => { currentIndex = idx; render(); });
      qGrid.appendChild(btn);
    });
    refreshGrid();
  }

  function refreshGrid() {
    const btns = qGrid.querySelectorAll("button");
    QUIZ_DATA.forEach((q, idx) => {
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
    if (q.type === "single") return st.selected !== null && st.selected !== undefined;
    if (q.type === "multiple") return st.selected.size > 0;
    if (q.type === "match") return Object.keys(st.selected).length > 0;
    if (q.type === "grid") return st.selected.size > 0;
    return false;
  }

  function isFullyAnswered(q) {
    const st = state[q.id];
    if (q.type === "single") return isAnswered(q);
    if (q.type === "multiple") return st.selected.size > 0;
    if (q.type === "match") return Object.keys(st.selected).length === q.pairs.length &&
      q.pairs.every((p, i) => st.selected[i]);
    if (q.type === "grid") return st.selected.size > 0;
    return false;
  }

  function updateSummary() {
    let answered = 0, submitted = 0;
    QUIZ_DATA.forEach(q => {
      if (isAnswered(q)) answered++;
      if (state[q.id].submitted) submitted++;
    });
    scoreSummary.textContent = `Answered: ${answered} / ${TOTAL}  |  Submitted: ${submitted} / ${TOTAL}`;
    progressBar.style.width = `${(submitted / TOTAL) * 100}%`;
  }

  function render() {
    const q = QUIZ_DATA[currentIndex];
    const st = state[q.id];
    questionCard.classList.toggle("locked", st.submitted);

    let html = `<div class="q-meta">Question ${currentIndex + 1} of ${TOTAL}
      <span class="q-type-badge">${typeLabel(q.type)}</span></div>
      <div class="q-text">${q.question}</div>`;

    if (q.type === "single") html += renderSingle(q, st);
    else if (q.type === "multiple") html += renderMultiple(q, st);
    else if (q.type === "match") html += renderMatch(q, st);
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
    return { single: "Single Choice", multiple: "Multiple Choice", match: "Matching", grid: "Multi-Select Grid" }[t];
  }

  function renderSingle(q, st) {
    return `<div class="options">` + q.options.map((opt, i) => {
      let cls = "option";
      let icon = "";
      if (st.selected === i) cls += " selected";
      if (st.submitted) {
        if (i === q.correct) { cls += " reveal-correct"; icon = `<span class="opt-icon ok">✓</span>`; }
        else if (st.selected === i) { cls += " reveal-incorrect"; icon = `<span class="opt-icon bad">✕</span>`; }
      }
      return `<label class="${cls}" data-idx="${i}">
        <input type="radio" name="single-opt" ${st.selected === i ? "checked" : ""} ${st.submitted ? "disabled" : ""}>
        <span class="opt-text">${opt}</span>${icon}
      </label>`;
    }).join("") + `</div>`;
  }

  function renderMultiple(q, st) {
    return `<div class="options">` + q.options.map((opt, i) => {
      let cls = "option";
      let icon = "";
      const isSel = st.selected.has(i);
      if (isSel) cls += " selected";
      if (st.submitted) {
        const shouldBe = q.correct.includes(i);
        if (shouldBe) { cls += " reveal-correct"; icon = `<span class="opt-icon ok">✓</span>`; }
        else if (isSel) { cls += " reveal-incorrect"; icon = `<span class="opt-icon bad">✕</span>`; }
      }
      return `<label class="${cls}" data-idx="${i}">
        <input type="checkbox" ${isSel ? "checked" : ""} ${st.submitted ? "disabled" : ""}>
        <span class="opt-text">${opt}</span>${icon}
      </label>`;
    }).join("") + `</div>`;
  }

  function renderMatch(q, st) {
    const placedValues = Object.values(st.selected);
    const bankItems = q.options.filter(o => !placedValues.includes(o));

    const rowsHtml = q.pairs.map((p, i) => {
      const val = st.selected[i] || "";
      let rowCls = "match-row";
      let feedback = "";
      if (st.submitted) {
        const ok = val === p.right;
        rowCls += ok ? " reveal-correct" : " reveal-incorrect";
        feedback = ok ? `<span class="match-feedback ok">✓</span>` : `<span class="match-feedback bad">✕</span>`;
      }
      const hint = (st.submitted && val !== p.right) ? `<div class="correct-hint">Correct: ${p.right}</div>` : "";
      const dropCls = "match-drop" + (val ? " filled" : "") + (st.submitted ? " locked" : "");
      const dropContent = val
        ? `<span class="drop-value">${val}</span>${!st.submitted ? `<span class="drop-clear" data-clear-idx="${i}" title="Remove">✕</span>` : ""}`
        : `<span class="drop-placeholder">Drop answer here</span>`;
      return `<div class="${rowCls}">
        <div class="match-left">${p.left}${hint}</div>
        <div class="${dropCls}" data-idx="${i}">${dropContent}</div>
        ${feedback}
      </div>`;
    }).join("");

    const bankHtml = bankItems.length
      ? `<div class="match-bank-label">Drag an answer onto its match:</div>
         <div class="match-bank">
           ${bankItems.map(o => `<div class="match-chip" draggable="true" data-value="${escapeAttr(o)}">${o}</div>`).join("")}
         </div>`
      : "";

    return `<div class="match-container">
      <div class="match-rows">${rowsHtml}</div>
      ${!st.submitted ? bankHtml : ""}
    </div>`;
  }

  function renderGrid(q, st) {
    let html = `<table class="grid-table"><thead><tr><th></th>` +
      q.cols.map(c => `<th>${c}</th>`).join("") + `</tr></thead><tbody>`;
    q.rows.forEach((r, ri) => {
      html += `<tr><td>${r}</td>`;
      q.cols.forEach((c, ci) => {
        const key = `${ri}-${ci}`;
        const checked = st.selected.has(key);
        const isCorrectCell = q.correct.some(([rr, cc]) => rr === ri && cc === ci);
        let cellCls = "grid-cell";
        if (st.submitted) {
          if (isCorrectCell && checked) cellCls += " cell-correct";
          else if (isCorrectCell && !checked) cellCls += " cell-missed";
          else if (!isCorrectCell && checked) cellCls += " cell-incorrect";
        }
        // The whole cell is clickable; the checkbox itself ignores direct
        // clicks (pointer-events: none) so the click is never handled twice.
        html += `<td class="${cellCls}" data-key="${key}"><input type="checkbox" data-key="${key}" style="pointer-events:none" ${checked ? "checked" : ""} ${st.submitted ? "disabled" : ""}></td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    return html;
  }

  function escapeAttr(s) {
    return s.replace(/"/g, "&quot;");
  }

  function attachHandlers(q, st) {
    if (st.submitted) return;

    if (q.type === "single") {
      questionCard.querySelectorAll(".option").forEach(el => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          st.selected = parseInt(el.dataset.idx, 10);
          render();
        });
      });
    } else if (q.type === "multiple") {
      questionCard.querySelectorAll(".option").forEach(el => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const idx = parseInt(el.dataset.idx, 10);
          if (st.selected.has(idx)) st.selected.delete(idx);
          else st.selected.add(idx);
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

      // Draggable bank chips
      questionCard.querySelectorAll(".match-chip").forEach(chip => {
        chip.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", chip.dataset.value);
          e.dataTransfer.effectAllowed = "move";
          chip.classList.add("dragging");
        });
        chip.addEventListener("dragend", () => chip.classList.remove("dragging"));

        // Click-to-arm fallback (mobile / no native DnD)
        chip.addEventListener("click", () => {
          const isArmed = chip.classList.contains("armed");
          questionCard.querySelectorAll(".match-chip.armed").forEach(c => c.classList.remove("armed"));
          if (isArmed) {
            armedChipValue = null;
          } else {
            armedChipValue = chip.dataset.value;
            chip.classList.add("armed");
          }
        });
      });

      // Drop zones
      questionCard.querySelectorAll(".match-drop").forEach(zone => {
        const idx = parseInt(zone.dataset.idx, 10);

        zone.addEventListener("dragover", (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
          zone.classList.add("drag-over");
        });
        zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
        zone.addEventListener("drop", (e) => {
          e.preventDefault();
          zone.classList.remove("drag-over");
          const value = e.dataTransfer.getData("text/plain");
          if (value) placeValue(idx, value);
        });

        // Click behavior: place armed chip, or clear an already-filled slot
        zone.addEventListener("click", (e) => {
          if (e.target.closest(".drop-clear")) return; // handled separately below
          if (armedChipValue) {
            placeValue(idx, armedChipValue);
          } else if (zone.classList.contains("filled")) {
            clearSlot(idx);
          }
        });
      });

      // Explicit clear (x) buttons
      questionCard.querySelectorAll(".drop-clear").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          clearSlot(parseInt(btn.dataset.clearIdx, 10));
        });
      });
    } else if (q.type === "grid") {
      questionCard.querySelectorAll('td.grid-cell[data-key]').forEach(cell => {
        cell.addEventListener("click", () => {
          const key = cell.dataset.key;
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
    if (q.type === "grid") {
      const selSet = st.selected;
      const corSet = new Set(q.correct.map(([r, c]) => `${r}-${c}`));
      if (selSet.size !== corSet.size) return false;
      for (const k of selSet) if (!corSet.has(k)) return false;
      return true;
    }
    return false;
  }

  submitBtn.addEventListener("click", () => {
    const q = QUIZ_DATA[currentIndex];
    const st = state[q.id];
    if (st.submitted || !isFullyAnswered(q)) return;
    st.submitted = true;
    st.correctFlag = gradeQuestion(q, st);
    render();
  });

  clearBtn.addEventListener("click", () => {
    const q = QUIZ_DATA[currentIndex];
    const st = state[q.id];
    if (st.submitted) return;
    if (q.type === "multiple") st.selected = new Set();
    else if (q.type === "match") st.selected = {};
    else if (q.type === "grid") st.selected = new Set();
    else st.selected = null;
    render();
  });

  prevBtn.addEventListener("click", () => { if (currentIndex > 0) { currentIndex--; render(); } });
  nextBtn.addEventListener("click", () => { if (currentIndex < TOTAL - 1) { currentIndex++; render(); } });

  jumpToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

  finishBtn.addEventListener("click", () => {
    let submittedCount = 0, correctCount = 0;
    QUIZ_DATA.forEach(q => {
      const st = state[q.id];
      if (st.submitted) { submittedCount++; if (st.correctFlag) correctCount++; }
    });
    const unsubmitted = TOTAL - submittedCount;
    const pct = submittedCount > 0 ? Math.round((correctCount / submittedCount) * 100) : 0;

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
    const firstUnsubmitted = QUIZ_DATA.findIndex(q => !state[q.id].submitted);
    currentIndex = firstUnsubmitted !== -1 ? firstUnsubmitted : 0;
    render();
  });

  restartBtn.addEventListener("click", () => {
    QUIZ_DATA.forEach(q => {
      state[q.id].submitted = false;
      state[q.id].correctFlag = null;
      state[q.id].selected = q.type === "multiple" ? new Set()
                            : q.type === "match" ? {}
                            : q.type === "grid" ? new Set()
                            : null;
    });
    currentIndex = 0;
    resultsOverlay.classList.remove("show");
    render();
  });

  // close sidebar on mobile after choosing a question
  qGrid.addEventListener("click", () => {
    if (window.innerWidth <= 860) sidebar.classList.remove("open");
  });

  buildGrid();
  render();
})();
