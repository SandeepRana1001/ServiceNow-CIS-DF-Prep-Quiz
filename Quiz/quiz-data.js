// Quiz data
// Types:
//  single   -> one correct option (radio)
//  multiple -> multiple correct options (checkboxes)
//  match    -> match each "left" item to the correct value from "options" (dropdown)
//  grid     -> checkbox matrix, rows x cols, correct = array of [rowIdx, colIdx]
//
// Note: Question 46 was missing from the source material and has been excluded.
// Options have been shuffled/randomized while preserving correct answer mapping.

const QUIZ_DATA = [
  {
    id: 1,
    type: "single",
    question:
      "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
    options: [
      "Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)",
      "Business Service Offering, Business Service",
      "Business Capability, Information Object, Business Application",
    ],
    correct: 1,
  },
  {
    id: 2,
    type: "match",
    question:
      "Drag and drop the application service type to the best description.",
    options: [
      "Tag-Based",
      "Service Mapping (Connection Suggestion)",
      "Service Mapping (Top-down)",
      "Dynamic CI Group",
    ],
    pairs: [
      {
        left: "Best fit to map cloud-native, container-based, machine environments",
        right: "Tag-Based",
      },
      {
        left: "Recommended for mission-critical applications requiring a precise approach using patterns",
        right: "Service Mapping (Top-down)",
      },
    ],
  },
  {
    id: 3,
    type: "single",
    question:
      "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    options: ["Compliance", "Completeness", "Correctness"],
    correct: 2,
  },
  {
    id: 4,
    type: "single",
    question:
      "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. After installing the plugin, what workspace will have the new Service Graph Connector Central tab available?",
    options: [
      "CMDB Workspace",
      "Service Graph Connector Workspace",
      "Discovery Admin Workspace",
    ],
    correct: 0,
  },
  {
    id: 5,
    type: "single",
    question:
      "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    options: ["Certification", "Delete", "Retire", "Archive"],
    correct: 3,
  },
  {
    id: 6,
    type: "single",
    question:
      "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    options: [
      "The de-duplication dashboard on the CMDB workspace",
      "The de-duplication task module",
      "My Tasks in the Application Navigator",
    ],
    correct: 0,
  },
  {
    id: 7,
    type: "single",
    question:
      "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    options: [
      "Design and Planning (Design)",
      "Service Delivery",
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
    ],
    correct: 3,
  },
  {
    id: 8,
    type: "single",
    question:
      "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    options: ["Map", "Tool box", "Content controls", "Contextual side panel"],
    correct: 3,
  },
  {
    id: 9,
    type: "multiple",
    question: "Which are CMDB Data Manager end of life policy types?",
    options: ["Disposed", "Retire", "Archive", "Lost", "Decommission"],
    correct: [1, 2],
  },
  {
    id: 10,
    type: "multiple",
    question:
      "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application?",
    options: [
      "Provides playbooks to assist in the remediation of potential risks",
      "Has a framework to create custom metrics for the CMDB",
      "Checks that important data is valid and properly configured",
      "Uses automation to remediate potential risks",
    ],
    correct: [0, 3],
  },
  {
    id: 11,
    type: "single",
    question:
      "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    options: [
      "In any lifecycle state",
      "Inventory - Available",
      "End of Life - Retired",
      "Missing - Stolen",
    ],
    correct: 2,
  },
  {
    id: 12,
    type: "multiple",
    question:
      "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights are gained from CMDB 360 queries?",
    options: [
      "Unique CIs created from different data sources",
      "Orphan CIs created from different data sources",
      "Different attribute values from different data sources",
      "Duplicate configuration items from different data sources",
      "Gaps in attribute data from different data sources",
    ],
    correct: [2, 4],
  },
  {
    id: 13,
    type: "single",
    question:
      "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    options: [
      "Total status tile under the My Work tab",
      "Important actions tile under the Home tab",
      "CMDB feature adoption tile under the insights tab",
    ],
    correct: 1,
  },
  {
    id: 14,
    type: "single",
    question:
      "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    options: [
      "Use a scheduled data import to update the attributes from an external source",
      "Use the CMDB Reconciliation Engine to update the attributes",
      "Create a new CI class specifically for non discoverable attributes",
    ],
    correct: 0,
  },
  {
    id: 15,
    type: "single",
    question:
      "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information?",
    options: [
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)",
      "Build and Integration (Build)",
      "Foundation",
      "Service Delivery (Manage Technical Services)",
    ],
    correct: 4,
  },
  {
    id: 16,
    type: "match",
    question:
      "A CMDB Administrator seeks to understand the available tools for preventing, addressing, and remediating duplicate CIs. Drag and drop each feature with the corresponding outcome.",
    options: [
      "De-Duplication Templates",
      "Certification Task",
      "CMDB Health Dashboard",
      "Duplicate CI Remediator",
      "De-Duplication Tasks",
    ],
    pairs: [
      {
        left: "Provides a wizard to resolve de-duplication tasks individually",
        right: "Duplicate CI Remediator",
      },
      {
        left: "Can be assigned to groups for resolving duplicate CIs",
        right: "De-Duplication Tasks",
      },
      {
        left: "Offers a solution to resolve de-duplication tasks in bulk",
        right: "De-Duplication Templates",
      },
      {
        left: "Offers insight into duplicate CIs within the CMDB (Correctness Scorecard)",
        right: "CMDB Health Dashboard",
      },
    ],
  },
  {
    id: 17,
    type: "multiple",
    question:
      "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health?",
    options: [
      "Use the Remediation Playbooks linked beside each metric",
      "Focus on metric(s) with Critical and High priorities",
      "Adjust the metrics using exclusion rules to improve the scores",
      "Remove non-operational and retired CIs",
    ],
    correct: [0, 1],
  },
  {
    id: 18,
    type: "single",
    question:
      "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining CIs and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    options: [
      "SCCM Service Graph Connector",
      "Integration Hub ETL connection to SCCM using Robust Transform Engine (RTE)",
      "Import set using JDBC data source connection to SCCM using transform maps",
      "SCCM Usage Metering Spoke",
    ],
    correct: 0,
  },
  {
    id: 19,
    type: "multiple",
    question:
      "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes?",
    options: [
      "cmdb_query_builder",
      "sn_cmdb_admin",
      "sn_csdm_admin",
      "personalize_dictionary",
    ],
    correct: [1, 3],
  },
  {
    id: 20,
    type: "single",
    question:
      "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    options: ["Attestation", "Retire", "Certification", "Delete", "Archive"],
    correct: 0,
  },
  {
    id: 21,
    type: "single",
    question:
      "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule of lowest value for the Disk Space (GB) field, while the Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of most reported for the Disk Space (GB) field. Given the data sources that populate Windows Server data into the CMDB 360/Multisource CMDB, which value would be added to the CMDB for the Disk Space (GB) field of a Windows Server [cmdb_ci_win_server] record?",
    options: ["50", "75", "80"],
    correct: 1,
  },
  {
    id: 22,
    type: "multiple",
    question:
      "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
    options: [
      "Ensure that the business rule to update CI fields on change on the asset table is active",
      "Ensure one-to-one physical mapping between Asset and CI",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update Asset fields on change on the CI table is active",
    ],
    correct: [0, 3],
  },
  {
    id: 23,
    type: "single",
    question:
      "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the Assigned to field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    options: [
      "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the Assigned to value",
      "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "Configure a business rule on the computer table to use a script to populate the Assigned to field on the asset based on insert or update in the computer class Assigned to field",
    ],
    correct: 1,
  },
  {
    id: 24,
    type: "single",
    question:
      "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    options: [
      "Service classification in the Technical Service",
      "Affected CIs in the Incident record",
      "Assignment Group on the CI record",
      "Business Criticality in the Service Offering",
    ],
    correct: 3,
  },
  {
    id: 25,
    type: "single",
    question:
      "The Change Management team in an organization wants to implement a Change across multiple CIs at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
    options: ["Business Service", "Service Offering", "Configuration Item"],
    correct: 2,
  },
  {
    id: 26,
    type: "single",
    question:
      "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
    options: [
      "It describes the logical data to the Business Applications",
      "It describes data exchanged between an API interface and an Application.",
      "It describes data in general on a group of Configuration Items.",
    ],
    correct: 0,
  },
  {
    id: 27,
    type: "single",
    question:
      "Where can an administrator perform Natural Language Queries (NLQ)?",
    options: [
      "CMDB Workspace",
      "CI Class Manager",
      "CMDB Health Dashboard",
      "CMDB Data Manager",
    ],
    correct: 0,
  },
  {
    id: 28,
    type: "single",
    question:
      "An identification rule for a CI class has been defined. Two new CI records are imported into the hardware class of the CMDB. Which is correct based on the identification rule and the imported CI records?",
    options: [
      "CI1 and CI2 both will be inserted as new records",
      "CI1 will be updated with matching record and CI2 will be inserted as new record.",
    ],
    correct: 1,
  },
  {
    id: 29,
    type: "single",
    question:
      "A CMDB Administrator is working in the CI Class Manager on the Basic info tab. How can the class be set as a Principal Class?",
    options: [
      "Select 'Yes' from the Principal Class choice list",
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box",
    ],
    correct: 2,
  },
  {
    id: 30,
    type: "single",
    question:
      "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    options: [
      "CMDB Workspace",
      "CMDB Data Foundation Dashboard",
      "Service Mapping Data Foundation Dashboard",
      "CSDM Data Foundation Dashboard",
    ],
    correct: 3,
  },
  {
    id: 31,
    type: "multiple",
    question:
      "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate?",
    options: [
      "Business Application",
      "Service Offering",
      "Application Service",
      "Service Portfolio",
    ],
    correct: [1, 2],
  },
  {
    id: 32,
    type: "single",
    question:
      "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    options: [
      "Version",
      "Configuration File Path",
      "Port",
      "Configuration File Name",
      "Class",
    ],
    correct: 1,
  },
  {
    id: 33,
    type: "single",
    question:
      "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    options: [
      "CMDB Query Builder",
      "Saved queries window on the CMDB 360 tab",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the insights tab",
    ],
    correct: 1,
  },
  {
    id: 34,
    type: "single",
    question:
      "A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
    options: ["Pinned Classes", "CI Favorites", "Search CI Classes"],
    correct: 0,
  },
  {
    id: 35,
    type: "single",
    question:
      "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    options: [
      "Life Cycle Controls [life_cycle_control]",
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Mapping [life_cycle_mapping]",
    ],
    correct: 3,
  },
  {
    id: 36,
    type: "single",
    question:
      "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
    options: [
      "Set the system property to utilize the IRE within transform maps",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the coalesce on two mappings within the transform map",
      "Create comparison rules in the IRE",
    ],
    correct: 1,
  },
  {
    id: 37,
    type: "match",
    question:
      "The CMDB Health Dashboard is based on three Key Performance Indicators (KPIs): Correctness, Compliance, and Completeness. Each KPI includes several sub-metrics. Drag the sub-metrics to the KPI.",
    options: [
      "Stability",
      "Required",
      "Certify",
      "Suggested",
      "Orphan",
      "Audit",
    ],
    pairs: [
      { left: "Completeness", right: "Required" },
      { left: "Correctness", right: "Orphan" },
      { left: "Compliance", right: "Audit" },
    ],
  },
  {
    id: 38,
    type: "match",
    question:
      "A CMDB Administrator needs to set up CMDB 360/Multisource CMDB. Drag and drop the system property to the functionality.",
    options: [
      "glide.identification_engine.multisource.recompute.max.ci.limit",
      "glide.cmdb.logger.source.cmdb.multisource",
      "glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.identification_engine.multisource_enabled",
    ],
    pairs: [
      {
        left: "Maximum number of CIs that can be included in a CMDB 360 recompute operation",
        right: "glide.identification_engine.multisource.recompute.max.ci.limit",
      },
      {
        left: "Enables logging for CMDB 360",
        right: "glide.cmdb.logger.source.cmdb.multisource",
      },
      {
        left: "Enables CMDB 360",
        right: "glide.identification_engine.multisource_enabled",
      },
      {
        left: "Enables capturing CMDB 360 data for CIs from non-CMDB classes",
        right: "glide.identification_engine.multisource_cmdb_ci_enabled",
      },
    ],
  },
  {
    id: 39,
    type: "single",
    question:
      "A CMDB Administrator notices that CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    options: [
      "Dynamic CI group",
      "Technology Management Service (Technical Service)",
      "CI Class Manager",
      "Technology Management Service Offering (Technical Service Offering)",
    ],
    correct: 1,
  },
  {
    id: 40,
    type: "single",
    question:
      "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    options: [
      "CMDB Health Dashboard > Audit tab",
      "CMDB Health Dashboard > Duplicate CIs tab",
      "CMDB Workspace > Management tab",
      "CMDB Workspace > My Work tab",
    ],
    correct: 3,
  },
  {
    id: 41,
    type: "multiple",
    question:
      "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However each discovery source categorizes the same CIs differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve the issue?",
    options: [
      "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "Create a custom script to manually adjust incoming data before storing it in the CMDB",
      "Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification",
      "Allow each discovery source to define its own CI class, even if it results in inconsistencies",
    ],
    correct: [0, 2],
  },
  {
    id: 42,
    type: "single",
    question:
      "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. Which tool can be used?",
    options: ["Business Service Map", "Relationship Map", "Unified Map"],
    correct: 2,
  },
  {
    id: 43,
    type: "single",
    question:
      "A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    options: [
      "CI Class Manager",
      "Service Graph Connectors",
      "CMDB Data Foundation Playbook",
    ],
    correct: 2,
  },
  {
    id: 44,
    type: "multiple",
    question:
      "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator?",
    options: ["Observability", "Workflow Automation", "DevOps", "Cloud"],
    correct: [0, 3],
  },
  {
    id: 45,
    type: "single",
    question:
      "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: Class, Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    options: [
      "Independent",
      "Allow fallback to parent's rules",
      "Applies to",
      "Criterion attributes",
    ],
    correct: 1,
  },
  {
    id: 47,
    type: "match",
    question: "Drag and drop the product to the description.",
    options: [
      "Service Mapping",
      "Agent Client Collector (ACC)",
      "Service Graph Connectors",
      "ServiceNow Discovery",
    ],
    pairs: [
      {
        left: "Complete topology of the services and shows how they are supported by underlying infrastructure and applications",
        right: "Service Mapping",
      },
      {
        left: "Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information",
        right: "Agent Client Collector (ACC)",
      },
      {
        left: "Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information",
        right: "ServiceNow Discovery",
      },
      {
        left: "Facilitates integration between ServiceNow and external systems to import and synchronize data",
        right: "Service Graph Connectors",
      },
    ],
  },
  {
    id: 48,
    type: "single",
    question:
      "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    options: [
      "CMDB Data Manager",
      "CMDB CI Class Manager",
      "CMDB Health Dashboard",
      "CMDB Workspace",
    ],
    correct: 1,
  },
  {
    id: 49,
    type: "single",
    question:
      "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    options: [
      "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management",
      "Relying on automated discovery tools to maintain and update CMDB records",
      "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "Establishing clear governance and continuously monitoring CMDB health",
    ],
    correct: 3,
  },
  {
    id: 50,
    type: "single",
    question:
      "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
    options: [
      "Support group",
      "Change group",
      "Managed by group",
      "Approval group",
    ],
    correct: 2,
  },
  {
    id: 51,
    type: "single",
    question:
      "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
    options: ["Suggested Relationships", "Attributes", "Basic Info", "CIs"],
    correct: 2,
  },
  {
    id: 52,
    type: "multiple",
    question:
      "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query?",
    options: [
      "Use a Service Mapping Query to find all incidents related to the database",
      "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "Use a CMDB Query to include application services and their related infrastructure",
      "Add a non CMDB table to the query",
    ],
    correct: [2, 3],
  },
  {
    id: 53,
    type: "single",
    question:
      "A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
    options: [
      "Fields populated by a customization will have a special tag associated with them in the CMDB",
      "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record",
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC",
    ],
    correct: 2,
  },
  {
    id: 54,
    type: "multiple",
    question:
      "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service?",
    options: [
      "Discovery",
      "Service Mapping",
      "Data Manager",
      "IntegrationHub ETL",
      "Event Management",
    ],
    correct: [0, 1],
  },
  {
    id: 55,
    type: "single",
    question:
      "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. How can the Configuration Manager get a score for regionally relevant CIs?",
    options: [
      "On the CMDB health settings, activate the option, Group scores by region",
      "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "Create CMDB groups with type, health, by region",
    ],
    correct: 2,
  },
  {
    id: 56,
    type: "single",
    question:
      "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
    options: [
      "Data Refresh Rules",
      "Identification Rules",
      "Health Inclusion Rules",
      "Reconciliation Rules",
    ],
    correct: 2,
  },
  {
    id: 57,
    type: "match",
    question:
      "ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships. Drag and drop the design architecture to its management tool.",
    options: [
      "Import Sets",
      "Service Graph Connector",
      "ServiceNow Discovery",
      "Agent Client Collector",
    ],
    pairs: [
      {
        left: "Third-party integrations from other vendors",
        right: "Service Graph Connector",
      },
      {
        left: "Organization-built solution using transform maps",
        right: "Import Sets",
      },
      {
        left: "Automated agent-based solution running patterns",
        right: "Agent Client Collector",
      },
      {
        left: "Automated agentless solution running patterns",
        right: "ServiceNow Discovery",
      },
    ],
  },
  {
    id: 58,
    type: "single",
    question:
      "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    options: [
      "Delete, Attestation, Retire, and Certification",
      "Retire, Archive, Attestation, Certification, and Delete",
      "Attestation, Retire, and Certification",
      "Archive and Delete",
    ],
    correct: 1,
  },
  {
    id: 59,
    type: "single",
    question:
      "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    options: [
      "CMDB Data Manager",
      "CMDB 360/Multisource CMDB",
      "Reconciliation Rules",
      "CMDB Workspace",
    ],
    correct: 1,
  },
  {
    id: 60,
    type: "multiple",
    question: "How is the CMDB aligned to business processes?",
    options: [
      "Enables the CFO/CIO to track software licenses",
      "Extends service delivery management to all enterprise departments",
      "Provides a centralized view of configuration items and their relationships",
      "Enhances decision making and operational efficiency across the organization",
    ],
    correct: [2, 3],
  },
  {
    id: 61,
    type: "single",
    question:
      "A Configuration Manager needs to ingest third-party CIs into the CMDB. Which method minimizes the risk of technical debt?",
    options: [
      "Table API",
      "Service Graph Connector",
      "Vendor-provided integration",
      "Import Sets and Transform Maps",
    ],
    correct: 1,
  },
  {
    id: 62,
    type: "single",
    question: "What is the relationship between an application and a server?",
    options: [
      "Application > Uses/Used by > Server",
      "Application > Runs/Runs On > Server",
      "Application > Runs on/Runs > Server",
      "Application > Used by/Uses > Server",
    ],
    correct: 2,
  },
  {
    id: 63,
    type: "single",
    question:
      "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    options: [
      "Data Quality Scheduled Job",
      "CMDB Workspace",
      "Data Quality Business Rule",
      "CMDB Audit Business Rule",
    ],
    correct: 1,
  },
  {
    id: 64,
    type: "single",
    question:
      "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    options: ["Crawl", "Fly", "Foundation", "Walk", "Run"],
    correct: 3,
  },
  {
    id: 65,
    type: "single",
    question:
      "A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    options: [
      "Life cycle choice list",
      "Life cycle properties",
      "Life cycle mappings",
    ],
    correct: 2,
  },
  {
    id: 66,
    type: "multiple",
    question:
      "A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI?",
    options: [
      "Oldest Created",
      "Least Related Items",
      "Newest Created",
      "Most Related Items",
    ],
    correct: [0, 3],
  },
  {
    id: 67,
    type: "single",
    question:
      "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    options: [
      "It is active by default",
      "It is a free application on the ServiceNow Store.",
      "It is a paid application on the ServiceNow Store.",
      "It is a free application on the ServiceNow Innovation Lab",
    ],
    correct: 1,
  },

  {
    id: 68,
    type: "match",
    question:
      "A Platform Owner is building the governance team to support the CSDM.<br>Drag the domain to the roles that make up the governance team.",
    options: [
      "Foundation Domain",
      "Portfolio Domain",
      "Design Domain",
      "Technical Domain",
    ],
    pairs: [
      {
        left: "Service Owner(s), Platform Owner",
        right: "Portfolio Domain",
      },
      {
        left: "Technology Service Owner(s), Application Service Owner(s),Platform Owner",
        right: "Technical Domain",
      },
      {
        left: "Enterprise Architect(s), Platform Owner",
        right: "Design Domain",
      },
      {
        left: "Enterprise Architect(s), Data Steward(s), Process Owner(s),Platform Owner",
        right: "Foundation Domain",
      },
    ],
  },

  {
    id: 69,
    type: "match",
    question:
      "An Enterprise Architect needs to help the CMDB owner understand the benefits of CSDM. Drag the CSDM domains to the respective benefits.",
    options: [
      "Foundation",
      "Design and Planning",
      "Service Delivery",
      "Service Consumption",
    ],
    pairs: [
      {
        left: "Understand CIs related to business application and related capability, identify redundancies, monitor costs and make better investment around roadmap",
        right: "Design and Planning",
      },
      {
        left: "Understand business services and ownership, cost, scope of what is offered to the business/consumer and request access to the business service",
        right: "Service Consumption",
      },
      {
        left: "Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs",
        right: "Service Delivery",
      },
      {
        left: "Use the base system tables when implementing the CSDM to derive highest value from ServiceNow products and the Now Platform",
        right: "Foundation",
      },
    ],
  },
  {
    id: 70,
    type: "single",
    question:
      "A CMDB Administrator viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
    options: [
      "Keep both locations as either can be used as a valid alternate location",
      "Use the Duplicate CI Remediator to merge the duplicate location records",
      "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "Review both locations, update CIs with the correct location and delete the duplicate location",
    ],
    correct: 3,
  },
  {
    id: 71,
    type: "multiple",
    question:
      "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise?",
    options: [
      "Business Relationship Manager",
      "Application Service Owner",
      "Application Owner",
      "Enterprise Architect",
    ],
    correct: [2, 3],
  },
];
