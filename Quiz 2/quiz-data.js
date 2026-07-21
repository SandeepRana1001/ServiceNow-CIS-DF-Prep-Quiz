// Quiz data — CMDB & CSDM Complete Quiz (136 Questions)
// Types:
//  single   -> one correct option (radio)
//  multiple -> multiple correct options (checkboxes)
//  match    -> match each "left" item to the correct value from "options" (dropdown)

const QUIZ_DATA = [
  {
    id: 1,
    type: "single",
    question:
      "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?",
    options: [
      "CI Class Manager",
      "CMDB and CSDM Data Foundations Dashboard",
      "CMDB Health Dashboard",
      "CMDB Data Manager",
      "De-duplication Templates",
    ],
    correct: 3,
  },
  {
    id: 2,
    type: "multiple",
    question:
      "What types of policies can be created within CMDB Data Manager? (Choose 2)",
    options: ["De-duplication", "Archive", "Reconciliation", "Retire"],
    correct: [1, 3],
  },
  {
    id: 3,
    type: "multiple",
    question:
      "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. What actions can be initiated from the CMDB Workspace? (Choose 2)",
    options: [
      "Execute ServiceNow Discovery",
      "Create a CMDB Data Manager certification policy",
      "Remediate duplicate CI records",
      "Create a new CMDB class",
    ],
    correct: [0, 2],
  },
  {
    id: 4,
    type: "single",
    question:
      "A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
    options: [
      "The Data Source for the SCCM Service Graph Connector will be marked as Inactive",
      "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured",
      "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade",
    ],
    correct: 1,
  },
  {
    id: 5,
    type: "single",
    question:
      "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    options: [
      "Be marked as inactive",
      "Be marked as critical",
      "Be retired and in end of life",
      "Be fully operational and in use",
    ],
    correct: 2,
  },
  {
    id: 6,
    type: "single",
    question:
      "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
    options: ["Run", "Foundation", "Crawl", "Walk", "Fly"],
    correct: 1,
  },
  {
    id: 7,
    type: "single",
    question:
      "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    options: [
      "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value",
    ],
    correct: 1,
  },
  {
    id: 8,
    type: "single",
    question:
      "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    options: [
      "My Tasks in the Application Navigator",
      "The de-duplication task module",
      "The de-duplication dashboard on the CMDB workspace",
    ],
    correct: 2,
  },
  {
    id: 9,
    type: "single",
    question:
      "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the CMDB Administrator take?",
    options: [
      "Create a delete policy",
      "Create a scheduled job",
      "Create a business rule",
    ],
    correct: 0,
  },
  {
    id: 10,
    type: "single",
    question:
      "A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    options: [
      "Technical Service Offerings and Dynamic CI groups",
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "CI Class Manager and Health Preferences",
    ],
    correct: 3,
  },
  {
    id: 11,
    type: "single",
    question:
      "A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service. Which steps provide the desired outcome?",
    options: [
      "1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. 2. Define a filter for the application service name and the operational status of the configuration items. 3. Configure the relationship between the classes. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Add the Operational Status and Name fields as columns. 4. Run the query.",
    ],
    correct: 1,
  },
  {
    id: 12,
    type: "multiple",
    question:
      "What is the value of using the CMDB in security operations? (Choose 2)",
    options: [
      "Allows security team to assess and remediate an incident",
      "Enables audits and attestations across CIs",
      "Auto-resolves a vulnerability",
      "Identifies the IT infrastructure with a vulnerability",
    ],
    correct: [0, 3],
  },
  {
    id: 13,
    type: "single",
    question:
      "A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
    options: [
      "Health > Attributes",
      "Class Info > Basic Info",
      "Class Info > Attributes",
    ],
    correct: 1,
  },
  {
    id: 14,
    type: "single",
    question:
      "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    options: [
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules",
    ],
    correct: 0,
  },
  {
    id: 15,
    type: "single",
    question:
      "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. What is the default duration of this metric?",
    options: ["24 hours", "30 days", "7 days", "60 days"],
    correct: 1,
  },
  {
    id: 16,
    type: "match",
    question:
      "Drag and drop the CMDB Health Dashboard metric to the description.",
    options: [
      "Audit",
      "Duplicate",
      "Orphan",
      "Recommended",
      "Required",
      "Stale",
    ],
    pairs: [
      {
        left: "CMDB records that represent the same physical or logical asset multiple times",
        right: "Duplicate",
      },
      {
        left: "Fields necessary to create or update a CI record in the CMDB",
        right: "Required",
      },
      {
        left: "CMDB records that no longer maintain their logical or physical relationships with other CIs",
        right: "Orphan",
      },
      {
        left: "CMDB records that are no longer actively updated, but remain stored in the database",
        right: "Stale",
      },
      {
        left: "Fields that support the accuracy, completeness, and usability of CI records in the CMDB",
        right: "Recommended",
      },
      {
        left: "Actual values of specified fields are compared to the expected values defined in a template",
        right: "Audit",
      },
    ],
  },
  {
    id: 17,
    type: "multiple",
    question:
      "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process? (Choose 2)",
    options: [
      "Automatically schedules and deploys changes without human review or approval",
      "Provides insight into the potential impact of the change",
      "Ensures that no changes result in service downtime, regardless of planning or execution",
      "Enables auto population of the assignment group field to dynamically route changes",
    ],
    correct: [1, 3],
  },
  {
    id: 18,
    type: "match",
    question:
      "ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships. Drag and drop the design architecture to its management tool.",
    options: [
      "Agent Client Collector",
      "Import Sets",
      "Service Graph Connector",
      "ServiceNow Discovery",
    ],
    pairs: [
      {
        left: "Automated agent-based solution running patterns",
        right: "Agent Client Collector",
      },
      {
        left: "Organization-built solution using transform maps",
        right: "Import Sets",
      },
      {
        left: "Third-party integrations from other vendors",
        right: "Service Graph Connector",
      },
      {
        left: "Automated agentless solution running patterns",
        right: "ServiceNow Discovery",
      },
    ],
  },
  {
    id: 19,
    type: "single",
    question:
      "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. What Governance process play can prevent this from recurring?",
    options: [
      "Make the field Managed by mandatory on all CIs",
      "Make the field Owned by mandatory",
      "Set a default value on the Service Owner field so that is never empty",
    ],
    correct: 1,
  },
  {
    id: 20,
    type: "single",
    question:
      "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
    options: [
      "CI Class Manager",
      "CMDB Data Manager",
      "CI Identifiers",
      "CMDB Workspace",
    ],
    correct: 0,
  },
  {
    id: 21,
    type: "single",
    question:
      "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    options: [
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved queries window on the Insights tab",
    ],
    correct: 2,
  },
  {
    id: 22,
    type: "multiple",
    question:
      "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. Table: Server [cmdb_ci_server]. Filter: Operating System | contains | Server OR Operating System | contains | Linux. Which operating systems are affected by this policy? (Choose 2)",
    options: [
      "AIX",
      "Windows Server 2022 Datacenter",
      "Linux CentOS",
      "Windows 2019 Datacenter",
    ],
    correct: [1, 2],
  },
  {
    id: 23,
    type: "single",
    question:
      "A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an incident form. How does the Manager set Principal Classes?",
    options: [
      "By using the Principal Class check box on the CI Class Manager's 'Attributes' tab for a Class",
      "By using the Principal Class check box on the CMDB Workspace",
      "By using the Principal Class attribute on the CI",
      "By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class",
    ],
    correct: 3,
  },
  {
    id: 24,
    type: "multiple",
    question:
      "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map? (Choose 2)",
    options: [
      "Visibility to an application and the host it is installed on",
      "Number of levels displayed on a map can be modified",
      "Map nodes can be filtered based on user preferences",
      "Map can be zoomed in and out",
    ],
    correct: [1, 2],
  },
  {
    id: 25,
    type: "multiple",
    question:
      "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'? (Choose 2)",
    options: [
      "Managed By Group",
      "Support Group",
      "Assignment Group",
      "Owned by Group",
    ],
    correct: [0, 1],
  },
  {
    id: 26,
    type: "single",
    question:
      "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
    options: [
      "Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "Activate the CSDM Life Cycle field mappings",
      "Resolve any incomplete field mappings identified in the Discrepancy Report",
    ],
    correct: 2,
  },
  {
    id: 27,
    type: "single",
    question:
      "The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    options: [
      "ServiceNow Discovery must be used to populate the CI data",
      "Reconciliation rules with priorities must be configured",
      "The CI data must go through the IRE",
      "The CI data must be from an authorized Service Graph Connector",
    ],
    correct: 2,
  },
  {
    id: 28,
    type: "single",
    question:
      "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
    options: ["Principal Class", "Independent", "Extensible", "Main Record"],
    correct: 0,
  },
  {
    id: 29,
    type: "single",
    question:
      "Where can an administrator perform Natural Language Queries (NLQ)?",
    options: [
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB Data Manager",
      "CI Class Manager",
    ],
    correct: 1,
  },
  {
    id: 30,
    type: "single",
    question:
      "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
    options: [
      "Class Switch",
      "Class Change",
      "Class Upgrade",
      "Class Downgrade",
    ],
    correct: 0,
  },
  {
    id: 31,
    type: "multiple",
    question:
      "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery? (Choose 2)",
    options: [
      "Assist integration choices",
      "Gain visibility and control",
      "Enhanced Service Management operations",
      "Reduced hardware costs",
    ],
    correct: [1, 2],
  },
  {
    id: 32,
    type: "multiple",
    question:
      "A Configuration Manager wants to manage manually maintained data attributes of CIs. Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups? (Choose 2)",
    options: ["Change group", "CMDB group", "Approval group", "Support group"],
    correct: [0, 3],
  },
  {
    id: 33,
    type: "single",
    question:
      "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
    options: ["Crawl", "Walk", "Fly", "Run"],
    correct: 1,
  },
  {
    id: 34,
    type: "single",
    question:
      "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    options: [
      "Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity",
    ],
    correct: 1,
  },
  {
    id: 35,
    type: "match",
    question:
      "A CMDB Administrator seeks to understand the available tools for preventing, addressing, and remediating duplicate CIs. Drag and drop each feature with the corresponding outcome.",
    options: [
      "Certification Tasks",
      "CMDB Health Dashboard",
      "De-Duplication Tasks",
      "De-Duplication Templates",
      "Duplicate CI Remediator",
    ],
    pairs: [
      {
        left: "Can be assigned to groups for resolving duplicate CIs",
        right: "Certification Tasks",
      },
      {
        left: "Offers insight into duplicate CIs within the CMDB",
        right: "CMDB Health Dashboard",
      },
      {
        left: "Offers a solution to resolve de-duplication tasks in bulk",
        right: "De-Duplication Templates",
      },
      {
        left: "Provides a wizard to resolve de-duplication tasks individually",
        right: "De-Duplication Tasks",
      },
    ],
  },
  {
    id: 36,
    type: "multiple",
    question:
      "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (Choose 2)",
    options: [
      "Integrates third-party data into the CMDB or into non-CMDB tables",
      "Performs discovery data collection and updates the CMDB",
      "Uses the IRE to process and integrate data",
      "Imports Microsoft SCCM/Intune data into the CMDB",
    ],
    correct: [0, 2],
  },
  {
    id: 37,
    type: "single",
    question:
      "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
    options: [
      "Import Sets",
      "Agent Client Collector",
      "Service Graph Connectors",
      "IntegrationHub ETL",
    ],
    correct: 2,
  },
  {
    id: 38,
    type: "single",
    question:
      "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    options: ["Completeness", "Correctness", "Compliance"],
    correct: 1,
  },
  {
    id: 39,
    type: "single",
    question:
      "Two new CI records are imported into the hardware class of the CMDB: CI1's name matches the name of an existing CI record in the CMDB; CI2's IP address matches the IP address of an existing CI record in the CMDB. Given the identification rule table (Hardware: serial_number priority 200; Hardware: name priority 300; Network Adapter: mac_address, name priority 400), which is correct based on the identification rule and the imported CI records?",
    options: [
      "CI1 and CI2 both will be updated with matching records",
      "CI1 will be updated with matching record and CI2 will be inserted as new record",
      "CI1 will be inserted as new record and CI2 will be updated with matching record",
      "CI1 and CI2 both will be inserted as new records",
    ],
    correct: 1,
  },
  {
    id: 40,
    type: "multiple",
    question:
      "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook? (Choose 2)",
    options: [
      "Problem Analysis",
      "Root Cause",
      "Problem Overview",
      "Automated Remediations",
    ],
    correct: [0, 2],
  },
  {
    id: 41,
    type: "match",
    question:
      "Given a list of Service types in the platform, drag the appropriate service to its definition.",
    options: [
      "Application Service",
      "Business Service",
      "Technology Management Service (Technical Service)",
    ],
    pairs: [
      {
        left: "Logical representation of a deployed system or application stack",
        right: "Application Service",
      },
      {
        left: "Published to Service Owners and underpins one or more business or application services",
        right: "Technology Management Service (Technical Service)",
      },
      {
        left: "Published to Business Users and underpins one or more business capabilities",
        right: "Business Service",
      },
    ],
  },
  {
    id: 42,
    type: "single",
    question:
      "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
    options: [
      "Provides the ability to configure health-related metrics",
      "Provides key health-related metrics to make decisions",
      "Provides the ability to resolve certification policy tasks",
    ],
    correct: 1,
  },
  {
    id: 43,
    type: "single",
    question:
      "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
    options: [
      "To identify CI attributes from multiple data sources",
      "To ingest data from multiple data sources using Service Graph Connector(s)",
      "To ingest data from multiple data sources using Import Set(s)",
      "To populate the CMDB from multiple data sources",
    ],
    correct: 0,
  },
  {
    id: 44,
    type: "single",
    question:
      "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
    options: ["Attestation", "Delete", "Retire", "Archive", "Certification"],
    correct: 0,
  },
  {
    id: 45,
    type: "single",
    question:
      "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
    options: [
      "Configure and run a custom de-duplication background script",
      "Create and run a de-duplication template",
      "Create de-duplication tasks manually and remediate each",
      "Utilize the Duplicate CI Remediator Wizard",
    ],
    correct: 1,
  },
  {
    id: 46,
    type: "single",
    question:
      "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    options: [
      "Important actions tile under the Home tab",
      "Total status tile under the My Work tab",
      "CMDB feature adoption tile under the Insights tab",
    ],
    correct: 0,
  },
  {
    id: 47,
    type: "single",
    question:
      "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
    options: [
      "glide.identification_engine.multisource_enabled",
      "glide.identification_engine.multisource.query.max.limit",
      "glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.identification_engine.multisource_non_cmdb_ci_enabled",
    ],
    correct: 0,
  },
  {
    id: 48,
    type: "single",
    question:
      "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    options: [
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Mapping [life_cycle_mapping]",
      "Life Cycle Controls [life_cycle_control]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
    ],
    correct: 1,
  },
  {
    id: 49,
    type: "single",
    question:
      "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?",
    options: [
      "Integration Hub",
      "CMDB Integrations Dashboard",
      "IntegrationHub ETL",
    ],
    correct: 2,
  },
  {
    id: 50,
    type: "multiple",
    question:
      "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature? (Choose 2)",
    options: [
      "Offers insight into the downstream impacts of poorly performing metrics",
      "Offers remediation templates to improve poorly performing metrics",
      "Offers remediation options to address and improve poorly performing metrics",
      "Offers automated scripts to resolve poorly performing metrics",
    ],
    correct: [1, 2],
  },
  {
    id: 51,
    type: "single",
    question:
      "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: Managed by Group = Enterprise IT Services. Technical Service Offering: Managed by Group = Windows Support, Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?",
    options: [
      "Enterprise IT Services",
      "Change Management Team",
      "Windows Support",
    ],
    correct: 2,
  },
  {
    id: 52,
    type: "single",
    question:
      "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
    options: [
      "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "Review both locations, update CIs with the correct location and delete the duplicate location",
      "Keep both locations as either can be used as a valid alternate location",
      "Use the Duplicate CI Remediator to merge the duplicate location records",
    ],
    correct: 1,
  },
  {
    id: 53,
    type: "multiple",
    question:
      "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this? (Choose 2)",
    options: [
      "Ensure that the business rule to update Asset fields on change on the CI table is active",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update CI fields on change on the asset table is active",
      "Ensure one-to-one physical mapping between Asset and CI",
    ],
    correct: [0, 2],
  },
  {
    id: 54,
    type: "multiple",
    question:
      "A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used? (Choose 2)",
    options: [
      "Tag-based queries",
      "Encoded queries",
      "Scripted queries",
      "Saved queries",
    ],
    correct: [0, 1],
  },
  {
    id: 55,
    type: "single",
    question:
      "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusion Rules tab available under a CI Class. How are these rules utilized by the IRE?",
    options: [
      "To narrow the scope of CIs included in the identification process",
      "To reduce the data ingested into the CMDB",
      "To reconcile specific attributes based on data sources",
    ],
    correct: 0,
  },
  {
    id: 56,
    type: "single",
    question:
      "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
    options: [
      "Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application",
      "Create fields on the Business Application record to mark the Business Application as containing patient information, and then ask the Business Application owner to mark the application as having patient information or not",
      "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner",
    ],
    correct: 2,
  },
  {
    id: 57,
    type: "single",
    question:
      "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
    options: ["Promotion", "Verification", "Attestation", "Certification"],
    correct: 2,
  },
  {
    id: 58,
    type: "single",
    question:
      "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
    options: ["cmdb_ci", "u_cmdb_ci", "u_ci_cmdb", "ci_cmdb"],
    correct: 1,
  },
  {
    id: 59,
    type: "multiple",
    question:
      "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management? (Choose 2)",
    options: [
      "Mapped services provide visibility to users consuming the service",
      "Binding of alerts to specific CIs",
      "Correlation of alerts to knowledge base articles",
      "Mapped services provide visibility to the business impact of an alert",
    ],
    correct: [1, 3],
  },
  {
    id: 60,
    type: "multiple",
    question:
      "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class? (Choose 2)",
    options: [
      "API Integrations",
      "IRE Application",
      "CI Class Manager",
      "CI Identifiers module",
    ],
    correct: [2, 3],
  },
  {
    id: 61,
    type: "match",
    question:
      "Drag and drop the application service type to the best description.",
    options: [
      "Dynamic CI Group",
      "Service Mapping (Connection Suggestion)",
      "Service Mapping (Top-down)",
      "Tag-Based",
    ],
    pairs: [
      {
        left: "Recommended for mission-critical application services that require a precise approach using patterns",
        right: "Service Mapping (Top-down)",
      },
      {
        left: "Best fit to map cloud-native, container-based, or virtual machine environments",
        right: "Service Mapping (Connection Suggestion)",
      },
      {
        left: "Ideal for custom-built applications and leverages fingerprinting to generate service maps in a timely manner",
        right: "Tag-Based",
      },
      {
        left: "Ideal for small application services that can be easily mapped using filters and CMDB queries",
        right: "Dynamic CI Group",
      },
    ],
  },
  {
    id: 62,
    type: "single",
    question:
      "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
    options: [
      "Design and Planning (Design)",
      "Build and Integration (Build)",
      "Service Delivery (Manage Technical Service)",
      "Foundation",
      "Service Consumption (Sell/Consume)",
    ],
    correct: 4,
  },
  {
    id: 63,
    type: "single",
    question:
      "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities. Which CSDM 5 domain is used?",
    options: [
      "Foundation",
      "Build and Integration (Build)",
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)",
      "Service Delivery (Manage Technical)",
    ],
    correct: 2,
  },
  {
    id: 64,
    type: "single",
    question:
      "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. Which field is used to calculate the duration of this metric?",
    options: [
      "Last modified on (last_modified)",
      "Created (sys_created_on)",
      "Updated (sys_updated_on)",
      "First discovered (first_discovered)",
      "Most recent discovery (last_discovery)",
    ],
    correct: 4,
  },
  {
    id: 65,
    type: "single",
    question:
      "A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
    options: [
      "Business Service Manager, Technology Service Owner",
      "Application Owner, Application Service Owner",
      "Customer Service Manager, Infrastructure Manager",
    ],
    correct: 0,
  },
  {
    id: 66,
    type: "single",
    question:
      "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
    options: [
      "Playbooks can automatically track common CMDB issues and output metrics",
      "Playbooks can be installed in the instance to automatically fix issues",
      "Playbooks can help analyze and fix issues",
    ],
    correct: 2,
  },
  {
    id: 67,
    type: "single",
    question: "What is the relationship between an application and a server?",
    options: [
      "Application > Uses::Used by > Server",
      "Application > Runs::Runs On > Server",
      "Application > Runs on::Runs > Server",
      "Application > Used by::Uses > Server",
    ],
    correct: 1,
  },
  {
    id: 68,
    type: "single",
    question:
      "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    options: [
      "Create a new CI class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes",
      "Use a scheduled data import to update the attributes from an external source",
    ],
    correct: 2,
  },
  {
    id: 69,
    type: "single",
    question:
      "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. Which panel will give the manager visibility and details?",
    options: [
      "Overview",
      "Application services",
      "Related items",
      "Attributes",
    ],
    correct: 2,
  },
  {
    id: 70,
    type: "single",
    question:
      "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on. What stage of CSDM would map this relationship?",
    options: ["Fly", "Crawl", "Foundation", "Run", "Walk"],
    correct: 4,
  },
  {
    id: 71,
    type: "single",
    question:
      "A CMDB Administrator needs to track which CIs and CI classes are missing key data. Which CMDB Health Dashboard scorecard supports tracking this requirement?",
    options: ["Compliance", "Correctness", "Completeness"],
    correct: 2,
  },
  {
    id: 72,
    type: "single",
    question:
      "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies. Which role is responsible for these tasks?",
    options: [
      "Service Owner",
      "CMDB Architect",
      "Configuration Manager",
      "IT Asset Manager",
    ],
    correct: 2,
  },
  {
    id: 73,
    type: "single",
    question:
      "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practice. Which should be used?",
    options: [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace",
      "CMDB Health Dashboard",
      "CMDB Data Manager",
    ],
    correct: 0,
  },
  {
    id: 74,
    type: "single",
    question:
      "A customer wants to model their business applications and would like to capture different types of data that includes Personally Identifiable Information (PII) data. Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
    options: [
      "Business Capability",
      "API Component",
      "Information Object",
      "Data Classification",
    ],
    correct: 2,
  },
  {
    id: 75,
    type: "multiple",
    question:
      "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose 2)",
    options: [
      "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
      "Modify an existing class",
      "Add a new class under an appropriate parent class",
      "Delete an unused class, and replace it with the new one",
    ],
    correct: [0, 2],
  },
  {
    id: 76,
    type: "single",
    question:
      "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. Where can the Data Manager do this?",
    options: [
      "CMDB Workspace CMDB 360 tab",
      "Service Operations Workspace",
      "CI Class Manager",
      "CMDB Workspace Management tab",
    ],
    correct: 3,
  },
  {
    id: 77,
    type: "single",
    question: "What ensures data volume in the CMDB is manageable?",
    options: ["Scheduled Jobs", "Business Rules", "Archive Policies"],
    correct: 2,
  },
  {
    id: 78,
    type: "multiple",
    question: "Which are business values of CMDB? (Choose 2)",
    options: [
      "Collecting and managing financial data",
      "Streamlining incident and change management",
      "Strengthening operational resiliency",
      "Automating maintenance for CI relationships",
    ],
    correct: [1, 2],
  },
  {
    id: 79,
    type: "multiple",
    question:
      "Which ServiceNow solution creates automatic relationships? (Choose 2)",
    options: [
      "Discovery",
      "Workflow Studio",
      "Service Mapping",
      "IntegrationHub ETL",
    ],
    correct: [0, 2],
  },
  {
    id: 80,
    type: "match",
    question:
      "A CMDB Owner starts on the CSDM journey and needs to become familiar with the CSDM domains. Drag the CMDB objects to the correct CSDM domains.",
    options: [
      "Design and Planning domain",
      "Foundation domain",
      "Service Delivery domain",
      "Sell/Consume domain",
    ],
    pairs: [
      { left: "Business Application", right: "Design and Planning domain" },
      { left: "Business Process", right: "Foundation domain" },
      { left: "Application Service", right: "Service Delivery domain" },
      { left: "Business Service", right: "Sell/Consume domain" },
    ],
  },
  {
    id: 81,
    type: "single",
    question:
      "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
    options: ["onComplete", "onBefore", "onStart", "onAfter"],
    correct: 3,
  },
  {
    id: 82,
    type: "multiple",
    question:
      "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel? (Choose 2)",
    options: [
      "Discovery source",
      "Managed by group",
      "Business criticality",
      "CI type",
    ],
    correct: [0, 3],
  },
  {
    id: 83,
    type: "single",
    question:
      "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time. Which use case requires information objects?",
    options: [
      "The Asset Management team wants to understand the asset life cycle compliancy in a Business Application context",
      "The SecOps team wants to understand the operational risk in the Business Application context",
      "The Business Service Management team wants to understand the operational impact for their consumer parties",
      "The Event Operations team wants to automate their events into incident for operational actions",
      "The Customer Service team wants to onboard pro-active case management",
    ],
    correct: 1,
  },
  {
    id: 84,
    type: "single",
    question:
      "A customer wants recently imported server records to be automatically reclassified into more specific CMDB classes after being discovered using ServiceNow Discovery. During the discovery process, if existing Server [cmdb_ci_server] records are reclassified into the Linux [cmdb_ci_linux_server] and Windows Server [cmdb_ci_win_server] classes, which reclassification operation occurred?",
    options: ["Class Switch", "Class Downgrade", "Class Upgrade"],
    correct: 2,
  },
  {
    id: 85,
    type: "single",
    question:
      "A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware CIs are missing serial numbers. The Administrator is concerned this may cause duplicate CIs and would like to resolve the issue in a timely manner. What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?",
    options: [
      "CSDM Now Create Playbooks",
      "CMDB Data Foundations Dashboard Playbooks",
      "CMDB Health Dashboard Playbooks",
      "CSDM Data Foundations Dashboard Playbooks",
    ],
    correct: 2,
  },
  {
    id: 86,
    type: "single",
    question:
      "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?",
    options: [
      "Service Delivery (Manage Technical)",
      "Foundation",
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Design and Planning (Design)",
    ],
    correct: 0,
  },
  {
    id: 87,
    type: "multiple",
    question:
      "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose 2)",
    options: [
      "It provides actionable insights to improve data quality and completeness",
      "It enables monitoring and tracking of CMDB health over time",
      "It automates the approval process for change management",
      "It helps detect and eliminate duplicate records in the CMDB",
    ],
    correct: [0, 1],
  },
  {
    id: 88,
    type: "match",
    question:
      "A manufacturing organization has implemented Incident Management in ServiceNow and wants to integrate additional products to enhance its functionality. Drag and drop each ServiceNow product to the value it brings to supporting Incident Management.",
    options: [
      "Discovery",
      "Hardware Asset Management",
      "Risk Management",
      "Service Portfolio Management",
    ],
    pairs: [
      {
        left: "Delivers asset actions and events for management/maintenance of assets during incidents",
        right: "Hardware Asset Management",
      },
      {
        left: "Supplies critical IT and financial risk data enabling the team to assess the broader impact of incidents",
        right: "Risk Management",
      },
      {
        left: "Offers detailed operational-level data on hardware and applications",
        right: "Discovery",
      },
      {
        left: "Provides life cycle information about services",
        right: "Service Portfolio Management",
      },
    ],
  },
  {
    id: 89,
    type: "single",
    question:
      "A Configuration Manager is planning the implementation of the CMDB. Which is the prescribed CSDM rollout order?",
    options: [
      "Initiate, Plan, Execute, Deliver, Close",
      "Architecture, Business, Technical, Governance",
      "Foundation, Crawl, Walk, Run, Fly",
      "Initial, Developing, Defined, Managed",
    ],
    correct: 2,
  },
  {
    id: 90,
    type: "single",
    question:
      "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
    options: [
      "Import Sets and Transform Maps",
      "IntegrationHub ETL",
      "Table API (REST API or SOAP API)",
    ],
    correct: 1,
  },
  {
    id: 91,
    type: "single",
    question:
      "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    options: [
      "Automates the enforcement of relationship rules between CIs in the CMDB",
      "Automates the archival and deletion of records based on retention policies",
      "Encrypts archived records for enhanced security",
    ],
    correct: 0,
  },
  {
    id: 92,
    type: "multiple",
    question:
      "The following Reconciliation Rules were configured for ServiceNow, Altiris, and SCCM (Windows Server [cmdb_ci_win_server]): ServiceNow priority 100, Altiris priority 200, SCCM priority 300. Which are true? (Choose 2)",
    options: [
      "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM",
      "Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table",
      "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table",
      "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number",
    ],
    correct: [0, 2],
  },
  {
    id: 93,
    type: "single",
    question:
      "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?",
    options: [
      "The scheduled jobs for the CMDB Health Dashboard must be activated",
      "Nothing, CMDB health scores are calculated by default",
      "The plugin, CMDB health calculation, needs to be installed",
    ],
    correct: 0,
  },
  {
    id: 94,
    type: "match",
    question:
      "Drag and drop the CMDB Health Dashboard metric to the description.",
    options: [
      "Audits",
      "Duplicate CIs",
      "Orphan CIs",
      "Recommended fields",
      "Required fields",
      "Stale CIs",
    ],
    pairs: [
      {
        left: "Use these to compare actual values with expected values",
        right: "Audits",
      },
      { left: "Use of these should be minimized", right: "Orphan CIs" },
      {
        left: "Certain attribute values are not set, or relationships are missing",
        right: "Required fields",
      },
      {
        left: "Preferable for them to be populated, as they could be useful in troubleshooting issues",
        right: "Recommended fields",
      },
      { left: "Have not been updated and may be outdated", right: "Stale CIs" },
      {
        left: "Detected during identification and reconciliation and have associated base system remediation tools",
        right: "Duplicate CIs",
      },
    ],
  },
  {
    id: 95,
    type: "single",
    question:
      "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI and Stale CI metrics. Which scorecard provides this information on the CMDB Health Dashboard?",
    options: ["Correctness", "Compliance", "Completeness"],
    correct: 0,
  },
  {
    id: 96,
    type: "multiple",
    question:
      "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used? (Choose 2)",
    options: ["Govern Data", "Report Data", "Fix Data"],
    correct: [0, 2],
  },
  {
    id: 97,
    type: "single",
    question:
      "The following identification rule for a CI class has been defined: Serial Number (serial_number, serial_number_type) priority 100; Hardware (serial_number) priority 200; Hardware (name) priority 300; Network Adapter (mac_address, name) priority 400. Two new CI records are imported into the hardware class of the CMDB: CI1's name matches the name of an existing CI record in the CMDB; CI2's IP address matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
    options: [
      "CI1 will be inserted as new record and CI2 will be updated with matching record",
      "CI1 will be updated with matching record and CI2 will be inserted as new record",
      "CI1 and CI2 both will be updated with matching records",
      "CI1 and CI2 both will be inserted as new records",
    ],
    correct: 1,
  },
  {
    id: 98,
    type: "single",
    question:
      "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    options: [
      "Percentage of Custom Status Values for CI Life Cycle Stages",
      "Named Product Models without Product Owners",
      "Locations without a Parent Location",
      "Application Services with Business Application Relationships",
    ],
    correct: 3,
  },
  {
    id: 99,
    type: "single",
    question:
      "Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. The Apache Web Server Identification Rule is configured with Criterion attributes: Class, Configuration file, Version. What will happen in the CMDB?",
    options: [
      "A new Apache Web Server CI is created",
      "The Apache Web Server CI will be reclassified as a Web Server CI",
      "The existing Apache Web Server CI will be reconciled and its version will be updated",
      "A duplication error will occur",
    ],
    correct: 2,
  },
  {
    id: 100,
    type: "single",
    question:
      "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed CIs. As a result, which base system field on the incident form will be automatically populated after selecting a CI?",
    options: [
      "Change group",
      "Assignment group",
      "Managed by group",
      "Approval group",
    ],
    correct: 1,
  },
  {
    id: 101,
    type: "single",
    question:
      "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    options: [
      "CMDB Health Dashboard",
      "De-duplication templates",
      "CMDB Data Manager",
    ],
    correct: 2,
  },
  {
    id: 102,
    type: "single",
    question:
      "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    options: ["Compliance", "Audit", "Attestation", "Certification"],
    correct: 3,
  },
  {
    id: 103,
    type: "multiple",
    question:
      "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)? (Choose 2)",
    options: [
      "Network devices in the DMZ",
      "Devices in secure environments",
      "Servers in the data center",
      "Devices that intermittently connect to the network",
    ],
    correct: [1, 3],
  },
  {
    id: 104,
    type: "single",
    question:
      "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    options: [
      "Configure data refresh rules with a specific time period",
      "Assign a priority to each data source in the reconciliation rules",
      "Manually run the data source updates in the correct order",
      "Assign a run order to each data source in the identification rules",
    ],
    correct: 1,
  },
  {
    id: 105,
    type: "single",
    question:
      "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
    options: ["Delete", "Attestation", "Certification", "Retire"],
    correct: 1,
  },
  {
    id: 106,
    type: "single",
    question:
      "A CMDB Administrator identifies duplicate CIs. One was created by a manual import, and the other one was created by automated discovery. The discovered CI has the latest IP address, while the manually imported CI has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
    options: [
      "Merge the two CIs automatically, retaining all attributes from the discovered CI",
      "Retain the discovered CI, and delete the manually imported CI",
      "Retain the discovered CI, but merge the relationship from the manually imported CI",
      "Retain the manually imported CI, and delete the discovered CI",
    ],
    correct: 2,
  },
  {
    id: 107,
    type: "multiple",
    question:
      "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM? (Choose 2)",
    options: [
      "Determine the root cause of the change issue",
      "Identify blackout windows for the change",
      "Understand the impact of the change on services",
      "Route the change dynamically",
    ],
    correct: [2, 3],
  },
  {
    id: 108,
    type: "single",
    question:
      "A new ServiceNow customer is assembling a Configuration Management team to support their CMDB. Which correctly matches each role to its corresponding job description (CI Analyst, CMDB Process Owner, Configuration Manager/CMDB Admin, Service or Product Owner)?",
    options: [
      "CI Analyst = has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards; Service or Product Owner = accountable for managing all elements that make up a portfolio throughout their entire lifecycle; Configuration Manager/CMDB Admin = manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records; CMDB Process Owner = obtains highest level role for CMDB privileges",
      "CMDB Process Owner = read-only access; CI Analyst = accountable for portfolio; Service or Product Owner = manages CI tables; Configuration Manager/CMDB Admin = highest level privileges",
      "Configuration Manager/CMDB Admin = read-only access; Service or Product Owner = manages CI tables; CI Analyst = highest privileges; CMDB Process Owner = accountable for portfolio",
      "Service or Product Owner = read-only access; CMDB Process Owner = manages CI tables; Configuration Manager/CMDB Admin = accountable for portfolio; CI Analyst = highest privileges",
    ],
    correct: 0,
  },
  {
    id: 109,
    type: "single",
    question:
      "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
    options: [
      "Customer Service Offerings and Databases",
      "Business Applications and Information Objects",
      "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups",
    ],
    correct: 1,
  },
  {
    id: 110,
    type: "multiple",
    question:
      "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose 2)",
    options: [
      "Provides metrics for CIs Processed by the IRE",
      "Reports on all orphan CIs in the CMDB",
      "Provides metrics on active CIs updated in the last 90 days",
      "Provides a list of all CIs that failed health audits",
    ],
    correct: [0, 2],
  },
  {
    id: 111,
    type: "single",
    question:
      "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    options: ["CI Class Manager", "CMDB Workspace", "CMDB Data Manager"],
    correct: 1,
  },
  {
    id: 112,
    type: "single",
    question:
      "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
    options: [
      "CMBD 360/Multisource is a platform product that can be used immediately",
      "ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules",
      "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled",
    ],
    correct: 2,
  },
  {
    id: 113,
    type: "single",
    question:
      "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    options: ["Many-to-one", "Many-to-many", "One-to-many", "One-to-one"],
    correct: 1,
  },
  {
    id: 114,
    type: "single",
    question:
      "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    options: [
      "Use the CSDM Data Foundations Dashboard",
      "Use the default configured CMDB Health Dashboard",
      "Start the ServiceNow Health Scan",
    ],
    correct: 0,
  },
  {
    id: 115,
    type: "single",
    question:
      "What is the difference between Data Certification and Attestation policies when managing a CI?",
    options: [
      "Attestation can be scheduled, while Data Certification cannot be scheduled",
      "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists",
      "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI",
      "Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual",
    ],
    correct: 2,
  },
  {
    id: 116,
    type: "single",
    question:
      "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    options: [
      "Enterprise Architect",
      "Application Service Owners",
      "Technology Service Owners",
    ],
    correct: 2,
  },
  {
    id: 117,
    type: "single",
    question:
      "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    options: [
      "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "Improves the implementation velocity of APM Foundation for future business application rationalization",
      "Enables impact assessments for incident, problem, and change on Business Services",
    ],
    correct: 2,
  },
  {
    id: 118,
    type: "single",
    question:
      "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    options: ["All", "Child", "Added", "Derived"],
    correct: 2,
  },
  {
    id: 119,
    type: "single",
    question:
      "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB. For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000. For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server CIs (60,000 vs. 50,000) evaluated between the two metrics?",
    options: [
      "The Orphan metric has a CMDB Group configured for the Server class",
      "The Duplicate metric has a Health Inclusion rule configured for the Server class",
      "The Orphan metric has a Health Inclusion rule configured for the Server class",
      "The Duplicate metric has a CMDB Group configured for the Server class",
    ],
    correct: 2,
  },
  {
    id: 120,
    type: "single",
    question:
      "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    options: [
      "Service Offerings by Department or Location",
      "Affected CI [task_ci] related list",
      "Application Service environment attribute",
      "Incident history of similar CIs",
    ],
    correct: 1,
  },
  {
    id: 121,
    type: "single",
    question:
      "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    options: [
      "Create a business rule",
      "Create a scheduled job",
      "Create an archive policy",
    ],
    correct: 2,
  },
  {
    id: 122,
    type: "single",
    question:
      "The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the data (Tivoli 4,096 MB, ServiceNow 4,096 MB, LANDesk 2,048 MB, Altiris 8,192 MB) in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    options: ["2,048 MB", "4,096 MB", "8,192 MB"],
    correct: 2,
  },
  {
    id: 123,
    type: "single",
    question:
      "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
    options: [
      "The upgrade stops and reports an error",
      "A skipped change is created and no change is made to the script transform definition",
      "The Service Graph Connector upgrade refuses to start",
    ],
    correct: 1,
  },
  {
    id: 124,
    type: "multiple",
    question:
      "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard? (Choose 2)",
    options: [
      "Most Reported",
      "Last Created",
      "Last Updated",
      "Smallest Value",
    ],
    correct: [0, 2],
  },
  {
    id: 125,
    type: "multiple",
    question:
      "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard? (Choose 2)",
    options: [
      "Downgraded CIs",
      "Duplicate CIs",
      "Missing CIs",
      "Stale CIs",
      "Upgraded CIs",
    ],
    correct: [1, 3],
  },
  {
    id: 126,
    type: "single",
    question:
      "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    options: [
      "To understand the business impact of CIs",
      "To understand the physical location of CIs",
      "To identify which devices will go offline first",
    ],
    correct: 0,
  },
  {
    id: 127,
    type: "multiple",
    question:
      "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group? (Choose 2)",
    options: [
      "Approval Group",
      "Managed by Group",
      "Support Group",
      "Owned by Group",
    ],
    correct: [1, 2],
  },
  {
    id: 128,
    type: "multiple",
    question:
      "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this? (Choose 2)",
    options: [
      "Repurposing a base CI class and rename attributes, as required",
      "Extending an existing Asset class table to accommodate the custom CI class attributes",
      "Extending an existing CI class table to accommodate the custom CI class attributes",
      "Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes",
    ],
    correct: [2, 3],
  },
  {
    id: 129,
    type: "single",
    question:
      "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    options: [
      "CMDB Data Manager",
      "CI Class Manager",
      "System Properties",
      "CMDB Workspace",
    ],
    correct: 1,
  },
  {
    id: 130,
    type: "single",
    question:
      "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    options: [
      "data_classification_admin and personalize_dictionary",
      "cmdb_inst_admin and personalize_form",
      "itil_admin and personalize_form",
      "sn_cmdb_admin and personalize_dictionary",
    ],
    correct: 3,
  },
  {
    id: 131,
    type: "single",
    question:
      "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    options: [
      "Managed By Group",
      "Approval Group",
      "Support Group",
      "Change Group",
    ],
    correct: 0,
  },
  {
    id: 132,
    type: "single",
    question:
      "The Apache Web Server Identification Rule is configured with Criterion attributes: Class, Configuration file, Version. Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    options: [
      "The Apache Web Server CI will be reclassified as a Web Server CI",
      "A duplication error will occur",
      "A new Apache Web Server CI is created",
      "The existing Apache Web Server CI will be reconciled and its version will be updated",
    ],
    correct: 3,
  },
  {
    id: 133,
    type: "single",
    question:
      "The following identification rule for a CI class has been defined (Serial Number: serial_number, serial_number_type, priority 100; Hardware: serial_number, priority 200; Hardware: name, priority 300; Network Adapter: mac_address, name, priority 400). Two new CI records are imported into the hardware class: CI1's name matches the name of an existing CI record; CI2's IP address matches the IP address of an existing CI record. Which is correct based on the identification rule and the imported CI records?",
    options: [
      "CI1 and CI2 both will be inserted as new records",
      "CI1 will be updated with matching record and CI2 will be inserted as new record",
      "CI1 will be inserted as new record and CI2 will be updated with matching record",
      "CI1 and CI2 both will be updated with matching records",
    ],
    correct: 1,
  },
  {
    id: 134,
    type: "single",
    question:
      "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    options: [
      "Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "Certification Filter, Certification Template, Audit",
      "Certification Policies, Data Filters, Scheduled Jobs",
      "Stale, Orphan, Duplicate",
    ],
    correct: 2,
  },
  {
    id: 135,
    type: "match",
    question:
      "Some steps need to be taken to transition from using different status attributes in the CMDB to life cycle objects. Drag and drop the objects/attributes to the description.",
    options: [
      "life_cycle_stage_status",
      "life_cycle_object",
      "life_cycle_mapping",
      "life_cycle_stage",
    ],
    pairs: [
      {
        left: "This table is pre-populated with mappings for legacy status values, based on its table, to the best-fit CSDM life-cycle value pair",
        right: "life_cycle_mapping",
      },
      {
        left: "This is a record attribute that reflects a meta-level state of the record life cycle",
        right: "life_cycle_stage",
      },
      {
        left: "This is a record attribute that reflects a sub-level state of the record life cycle",
        right: "life_cycle_stage_status",
      },
      {
        left: "This table uses the type of CI (hardware, document, logical, etc.) to determine which sub-level life cycle state values are available",
        right: "life_cycle_object",
      },
    ],
  },
  {
    id: 136,
    type: "multiple",
    question:
      "A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query? (Choose 2)",
    options: [
      "Add to the canvas the Incident table from the Non-CMDB Tables list",
      "Add property columns to the application service node",
      "Add a filter to the database node for location = Seattle",
      "Set the relationship level to 'Up to 2nd level relationships'",
    ],
    correct: [0, 2],
  },
];
