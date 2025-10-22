const questions = [
  // --- WEEK 1: ASSIGNMENT 1 (Questions 1-15) ---
  {
    question: "Which of the following is not a function of a Database Management System (DBMS)?",
    options: [
      "Data storage management",
      "Data backup and recovery",
      "Data hardware repair",
      "Data integrity management"
    ],
    answer: "Data hardware repair"
  },
  {
    question: "What does DBMS stand for?",
    options: [
      "Data Based Model System",
      "Database Management Structure",
      "Database Management System",
      "Digital Base Model Software"
    ],
    answer: "Database Management System"
  },
  {
    question: "Which of the following is a characteristic of a database?",
    options: [
      "Volatile data",
      "Data redundancy",
      "Shared data access",
      "Temporary storage"
    ],
    answer: "Shared data access"
  },
  {
    question: "In a database system, who is responsible for managing the overall system environment and ensuring its efficient functioning?",
    options: [
      "Database Administrator",
      "End User",
      "Application Programmer",
      "Data Analyst"
    ],
    answer: "Database Administrator"
  },
  {
    question: "What is the purpose of a schema in a database?",
    options: [
      "Stores the data values",
      "Acts as a blueprint for database structure",
      "Tracks hardware performance",
      "Manages backup operations"
    ],
    answer: "Acts as a blueprint for database structure"
  },
  {
    question: "Which of the following best describes an instance of a database?",
    options: [
      "The logical design of the database",
      "The actual data stored at a particular moment",
      "A snapshot of a database administrator's role",
      "A description of data types only"
    ],
    answer: "The actual data stored at a particular moment"
  },
  {
    question: "Which data model uses entities, attributes, and relationships to represent data?",
    options: [
      "Hierarchical model",
      "Relational model",
      "Network model",
      "Entity-Relationship model"
    ],
    answer: "Entity-Relationship model"
  },
  {
    question: "What component is primarily responsible for interacting with the DBMS through applications?",
    options: [
      "Casual users",
      "Database designers",
      "Application programmers",
      "System analysts"
    ],
    answer: "Application programmers"
  },
  {
    question: "Which level of database architecture provides a view of the data as seen by individual users?",
    options: [
      "Internal level",
      "Conceptual level",
      "External level",
      "Physical level"
    ],
    answer: "External level"
  },
  {
    question: "The conceptual schema describes:",
    options: [
      "The logical structure of the entire database",
      "A specific user's view",
      "Data storage format",
      "File system details"
    ],
    answer: "The logical structure of the entire database"
  },
  {
    question: "Which of the following are types of database users?",
    options: [
      "Casual users",
      "Application programmers",
      "DBA",
      "Data miners"
    ],
    answer: [
      "Casual users",
      "Application programmers",
      "DBA",
      "Data miners"
    ]
  },
  {
    question: "Key characteristics of a database system include:",
    options: [
      "Concurrent access",
      "Controlled redundancy",
      "Complex redundancy",
      "Data independence"
    ],
    answer: [
      "Concurrent access",
      "Controlled redundancy",
      "Data independence"
    ]
  },
  {
    question: "Functions of a DBMS include:",
    options: [
      "Data retrieval",
      "Schema modeling",
      "Concurrency control",
      "Disk formatting"
    ],
    answer: [
      "Data retrieval",
      "Schema modeling",
      "Concurrency control"
    ]
  },
  {
    question: "The three-schema architecture includes:",
    options: [
      "Internal schema",
      "External schema",
      "Transactional schema",
      "Conceptual schema"
    ],
    answer: [
      "Internal schema",
      "External schema",
      "Conceptual schema"
    ]
  },
  {
    question: "The components of the DBMS environment typically include:",
    options: [
      "Hardware",
      "Software",
      "Data",
      "Firewall"
    ],
    answer: [
      "Hardware",
      "Software",
      "Data"
    ]
  },
  
  // --- WEEK 2: ASSIGNMENT 2 (Questions 1-15) ---
  {
    question: "What is the purpose of a data dictionary in DBMS?",
    options: [
      "Execute transactions",
      "Store user passwords",
      "Store metadata about data",
      "Encrypt data"
    ],
    answer: "Store metadata about data"
  },
  {
    question: "A sub-schema in a DBMS is:",
    options: [
      "Physical layout of the database",
      "Description of how data is stored on hardware",
      "A user-specific view of the database",
      "A system-level view of memory allocation"
    ],
    answer: "A user-specific view of the database"
  },
  {
    question: "Data independence refers to:",
    options: [
      "Separation of data from storage",
      "Isolation of data from users",
      "Ability to modify schema without changing application",
      "Data stored in the cloud"
    ],
    answer: "Ability to modify schema without changing application"
  },
  {
    question: "Which architecture supports data independence most effectively?",
    options: [
      "One-tier",
      "Two-tier",
      "Three-tier",
      "Client-server"
    ],
    answer: "Three-tier"
  },
  {
    question: "In ER modeling, an attribute that can have multiple values for a single entity is called:",
    options: [
      "Simple attribute",
      "Composite attribute",
      "Derived attribute",
      "Multi-valued attribute"
    ],
    answer: "Multi-valued attribute"
  },
  {
    question: "Which symbol is used to represent a relationship in ER diagrams?",
    options: [
      "Oval",
      "Rectangle",
      "Diamond",
      "Ellipse"
    ],
    answer: "Diamond"
  },
  {
    question: "In UML, entities are typically modeled as:",
    options: [
      "Use case diagrams",
      "Activity diagrams",
      "Classes",
      "Attributes"
    ],
    answer: "Classes"
  },
  {
    question: "An example of a weak entity is:",
    options: [
      "An employee with a unique ID",
      "A department with a primary key",
      "A dependent without a primary key",
      "A product with unique serial number"
    ],
    answer: "A dependent without a primary key"
  },
  {
    question: "In object modeling, encapsulation refers to:",
    options: [
      "Hiding the data implementation",
      "Displaying all attributes",
      "Linking data to multiple tables",
      "Making data publicly accessible"
    ],
    answer: "Hiding the data implementation"
  },
  {
    question: "In the relational model, each row in a relation is called:",
    options: [
      "Attribute",
      "Tuple",
      "Domain",
      "Field"
    ],
    answer: "Tuple"
  },
  {
    question: "Which are common components of DBMS architecture?",
    options: [
      "Query Processor",
      "Storage Manager",
      "Application Layer",
      "Transaction Manager"
    ],
    answer: [
      "Query Processor",
      "Storage Manager",
      "Transaction Manager"
    ]
  },
  {
    question: "Features of Enhanced ER Model include:",
    options: [
      "Generalization",
      "Aggregation",
      "Inheritance",
      "Multithreading"
    ],
    answer: [
      "Generalization",
      "Aggregation",
      "Inheritance"
    ]
  },
  {
    question: "Relational algebra includes which of the following operations?",
    options: [
      "Selection",
      "Join",
      "Compilation",
      "Projection"
    ],
    answer: [
      "Selection",
      "Join",
      "Projection"
    ]
  },
  {
    question: "Which of the following are part of the relational model?",
    options: [
      "Domains",
      "Tuples",
      "Methods",
      "Attributes"
    ],
    answer: [
      "Domains",
      "Tuples",
      "Attributes"
    ]
  },
  {
    question: "In a data dictionary, which of the following are stored?",
    options: [
      "Names of tables",
      "Data types",
      "Indexes",
      "User passwords"
    ],
    answer: [
      "Names of tables",
      "Data types",
      "Indexes"
    ]
  },

  // --- WEEK 3: ASSIGNMENT 3 (Questions 1-15) ---
  {
    question: "Which of the following is a key component of database architecture?",
    options: [
      "Web server",
      "Transaction manager",
      "Operating system",
      "Data warehouse"
    ],
    answer: "Transaction manager"
  },
  {
    question: "In the relational model, a column is also known as a:",
    options: [
      "Tuple",
      "Relation",
      "Attribute",
      "Domain"
    ],
    answer: "Attribute"
  },
  {
    question: "Entity integrity ensures that:",
    options: [
      "All attributes are unique",
      "Foreign keys are non-null",
      "Primary key cannot be null",
      "Duplicate values exist"
    ],
    answer: "Primary key cannot be null"
  },
  {
    question: "Referential integrity is maintained through:",
    options: [
      "Triggers",
      "Indexes",
      "Foreign keys",
      "Cursors"
    ],
    answer: "Foreign keys"
  },
  {
    question: "Which operation in relational algebra is used to extract columns from a relation?",
    options: [
      "Select",
      "Project",
      "Union",
      "Join"
    ],
    answer: "Project"
  },
  {
    question: "Relational algebra is:",
    options: [
      "Procedural",
      "Non-procedural",
      "Declarative",
      "Logical"
    ],
    answer: "Procedural"
  },
  {
    question: "Tuple relational calculus is based on:",
    options: [
      "Attributes",
      "Values",
      "Tuples",
      "Tables"
    ],
    answer: "Tuples"
  },
  {
    question: "Which of the following represents a constraint in relational model?",
    options: [
      "Syntax rule",
      "Function rule",
      "Domain constraint",
      "Object rule"
    ],
    answer: "Domain constraint"
  },
  {
    question: "A functional dependency is a relationship between:",
    options: [
      "Relations",
      "Entities",
      "Attributes",
      "Tables"
    ],
    answer: "Attributes"
  },
  {
    question: "In normalization, 3NF removes:",
    options: [
      "Repeating groups",
      "Partial dependencies",
      "Transitive dependencies",
      "Candidate keys"
    ],
    answer: "Transitive dependencies"
  },
  {
    question: "Which of the following are relational algebra operations?",
    options: [
      "Union",
      "Join",
      "Difference",
      "Aggregate"
    ],
    answer: [
      "Union",
      "Join",
      "Difference"
    ]
  },
  {
    question: "Functional dependencies are used for:",
    options: [
      "Query optimization",
      "Integrity constraint enforcement",
      "Normalization",
      "Data deletion"
    ],
    answer: [
      "Integrity constraint enforcement",
      "Normalization"
    ]
  },
  {
    question: "Characteristics of 1NF include:",
    options: [
      "Atomic values",
      "No repeating groups",
      "Referential integrity",
      "Composite keys"
    ],
    answer: [
      "Atomic values",
      "No repeating groups"
    ]
  },
  {
    question: "Which dependencies can lead to anomalies in databases?",
    options: [
      "Transitive",
      "Multivalued",
      "Join",
      "Normal"
    ],
    answer: [
      "Transitive",
      "Multivalued",
      "Join"
    ]
  },
  {
    question: "In database architecture, which of the following are part of the three-level architecture?",
    options: [
      "External level",
      "Internal level",
      "Conceptual level",
      "Physical schema"
    ],
    answer: [
      "External level",
      "Internal level",
      "Conceptual level"
    ]
  },
// Please ask for the remaining questions (Weeks 4-12) if you need them.
  // --- WEEK 4: ASSIGNMENT 4 (Questions 1-15) ---
  {
    question: "Which normal form eliminates partial dependency?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "2NF"
  },
  {
    question: "A relation is in BCNF if:",
    options: [
      "Every determinant is a candidate key",
      "It has no transitive dependencies",
      "It is in 2NF",
      "All attributes are atomic"
    ],
    answer: "Every determinant is a candidate key"
  },
  {
    question: "Which decomposition ensures that no data is lost during joining?",
    options: [
      "Horizontal",
      "Vertical",
      "Lossless join",
      "Redundant"
    ],
    answer: "Lossless join"
  },
  {
    question: "A dependency preserving decomposition ensures that:",
    options: [
      "All dependencies are eliminated",
      "All constraints are normalized",
      "All functional dependencies are maintained",
      "Redundant data exists"
    ],
    answer: "All functional dependencies are maintained"
  },
  {
    question: "Which SQL statement is used to create a database table?",
    options: [
      "INSERT",
      "UPDATE",
      "CREATE",
      "SELECT"
    ],
    answer: "CREATE"
  },
  {
    question: "Which one is not a part of DML in SQL?",
    options: [
      "SELECT",
      "DELETE",
      "DROP",
      "UPDATE"
    ],
    answer: "DROP"
  },
  {
    question: "A view in SQL is:",
    options: [
      "A physical table",
      "A virtual table",
      "A primary key",
      "A foreign key"
    ],
    answer: "A virtual table"
  },
  {
    question: "Embedded SQL is used in:",
    options: [
      "SQL Server only",
      "Database backups",
      "Host programming languages",
      "Web servers"
    ],
    answer: "Host programming languages"
  },
  {
    question: "Which command removes a table from a database?",
    options: [
      "DELETE",
      "ERASE",
      "DROP",
      "REMOVE"
    ],
    answer: "DROP"
  },
  {
    question: "What does DDL stand for?",
    options: [
      "Data Derivation Language",
      "Data Definition Language",
      "Dynamic Data Language",
      "Database Description Language"
    ],
    answer: "Data Definition Language"
  },
  {
    question: "Which of the following are DDL commands?",
    options: [
      "CREATE",
      "ALTER",
      "DROP",
      "SELECT"
    ],
    answer: [
      "CREATE",
      "ALTER",
      "DROP"
    ]
  },
  {
    question: "Which statements are true about 3NF?",
    options: [
      "Removes transitive dependencies",
      "Must be in 2NF",
      "Every non-prime attribute is non-transitively dependent",
      "Allows partial dependency"
    ],
    answer: [
      "Removes transitive dependencies",
      "Must be in 2NF",
      "Every non-prime attribute is non-transitively dependent"
    ]
  },
  {
    question: "Which SQL commands are used to retrieve and manipulate data?",
    options: [
      "SELECT",
      "INSERT",
      "UPDATE",
      "CREATE"
    ],
    answer: [
      "SELECT",
      "INSERT",
      "UPDATE"
    ]
  },
  {
    question: "Which of the following are benefits of views in SQL?",
    options: [
      "Simplifies query",
      "Provides security",
      "Reduces data redundancy",
      "Stores data permanently"
    ],
    answer: [
      "Simplifies query",
      "Provides security",
      "Reduces data redundancy"
    ]
  },
  {
    question: "Which properties are ensured in a lossless-join decomposition?",
    options: [
      "No information loss",
      "Reconstruct original relation",
      "Allows redundant data",
      "Retains all functional dependencies"
    ],
    answer: [
      "No information loss",
      "Reconstruct original relation"
    ]
  },

  // --- WEEK 5: ASSIGNMENT 5 (Questions 1-15) ---
  {
    question: "Which of the following is used to enforce constraints in SQL?",
    options: [
      "CREATE",
      "ALTER",
      "INDEX",
      "CONSTRAINT"
    ],
    answer: "CONSTRAINT"
  },
  {
    question: "What is the primary purpose of an index in SQL?",
    options: [
      "To enforce data integrity",
      "To speed up data retrieval",
      "To create foreign keys",
      "To modify data"
    ],
    answer: "To speed up data retrieval"
  },
  {
    question: "Which SQL command is used to declare a cursor?",
    options: [
      "CREATE",
      "OPEN",
      "DECLARE",
      "FETCH"
    ],
    answer: "DECLARE"
  },
  {
    question: "Which of the following is true about triggers in SQL?",
    options: [
      "They are used to update data in the table",
      "They automatically execute in response to certain events",
      "They can only be used with primary keys",
      "They require manual execution"
    ],
    answer: "They automatically execute in response to certain events"
  },
  {
    question: "A stored procedure in SQL is used for:",
    options: [
      "Data manipulation",
      "Query optimization",
      "Reusable operations",
      "Trigger management"
    ],
    answer: "Reusable operations"
  },
  {
    question: "The relational model is based on:",
    options: [
      "Tables and relations",
      "Tree structure",
      "Hierarchical organization",
      "Object classes"
    ],
    answer: "Tables and relations"
  },
  {
    question: "Which of the following is a key feature of network data models?",
    options: [
      "Data is represented in a tree structure",
      "Data is represented as a graph of linked records",
      "Data is stored in flat files",
      "Data is organized in objects"
    ],
    answer: "Data is represented as a graph of linked records"
  },
  {
    question: "Which system uses the hierarchical data model?",
    options: [
      "IDMS",
      "IMS",
      "Oracle",
      "DB2"
    ],
    answer: "IMS"
  },
  {
    question: "The object-relational database model combines which two models?",
    options: [
      "Object-oriented and relational",
      "Hierarchical and network",
      "Flat file and relational",
      "Network and object-oriented"
    ],
    answer: "Object-oriented and relational"
  },
  {
    question: "In object databases, data is stored as:",
    options: [
      "Rows and columns",
      "Classes and objects",
      "Nodes and relationships",
      "Graphs and nodes"
    ],
    answer: "Classes and objects"
  },
  {
    question: "Which of the following are types of constraints in SQL?",
    options: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "NOT NULL",
      "INDEX"
    ],
    answer: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "NOT NULL"
    ]
  },
  {
    question: "Which SQL statements are used to create functions and procedures?",
    options: [
      "CREATE PROCEDURE",
      "CREATE FUNCTION",
      "INSERT PROCEDURE",
      "CREATE INDEX"
    ],
    answer: [
      "CREATE PROCEDURE",
      "CREATE FUNCTION"
    ]
  },
  {
    question: "Which are characteristics of the hierarchical data model?",
    options: [
      "Data is stored in a tree-like structure",
      "One-to-many relationships between records",
      "Data is represented in objects",
      "Relationships are defined by pointers"
    ],
    answer: [
      "Data is stored in a tree-like structure",
      "One-to-many relationships between records"
    ]
  },
  {
    question: "Which of the following are characteristics of the object-relational model?",
    options: [
      "Supports complex data types",
      "Supports both object and relational concepts",
      "Used primarily for scientific data",
      "Does not support inheritance"
    ],
    answer: [
      "Supports complex data types",
      "Supports both object and relational concepts"
    ]
  },
  {
    question: "Which of the following are advantages of using object databases?",
    options: [
      "Efficient handling of complex data",
      "Support for object-oriented programming",
      "Enhanced query optimization",
      "Reduced need for joins"
    ],
    answer: [
      "Efficient handling of complex data",
      "Support for object-oriented programming"
    ]
  },

  // --- WEEK 6: ASSIGNMENT 6 (Questions 1-15) ---
  {
    question: "Why is data security critical in database management?",
    options: [
      "To ensure quick access to data",
      "To maintain the integrity of the data",
      "To optimize database queries",
      "To improve system performance"
    ],
    answer: "To maintain the integrity of the data"
  },
  {
    question: "What is the primary purpose of authorization in database security?",
    options: [
      "To limit the number of users",
      "To ensure data is secure from unauthorized access",
      "To define database structure",
      "To create backups of data"
    ],
    answer: "To ensure data is secure from unauthorized access"
  },
  {
    question: "Which of the following best describes discretionary access control (DAC)?",
    options: [
      "Access rights are granted by the system administrator",
      "Users are given access to objects based on their own discretion",
      "Access is restricted based on predefined security policies",
      "The system allows full access without restrictions"
    ],
    answer: "Users are given access to objects based on their own discretion"
  },
  {
    question: "In the context of database security, mandatory access control (MAC) means:",
    options: [
      "Users have control over access to data",
      "Data access is determined by the database system, not the user",
      "The database uses discretionary policies",
      "Access rights are set by the user level"
    ],
    answer: "Data access is determined by the database system, not the user"
  },
  {
    question: "Which of the following is an example of role-based access control (RBAC)?",
    options: [
      "Assigning permissions based on user roles",
      "Giving full access to every user",
      "Restricting access based on individual decisions",
      "Granting unrestricted access to all users"
    ],
    answer: "Assigning permissions based on user roles"
  },
  {
    question: "The principle of least privilege in data security means:",
    options: [
      "Users should have access to only the information necessary for their tasks",
      "Users should be allowed to access everything in the database",
      "All users should be administrators",
      "Users should not have access to any data"
    ],
    answer: "Users should have access to only the information necessary for their tasks"
  },
  {
    question: "What is a potential risk of granting excessive privileges to users in a database?",
    options: [
      "Increased system performance",
      "Unauthorized data modification or deletion",
      "Improved data security",
      "Efficient query execution"
    ],
    answer: "Unauthorized data modification or deletion"
  },
  {
    question: "In Oracle's security model, Fine-Grained Access Control (FGAC) is used to:",
    options: [
      "Define users' roles",
      "Restrict access to specific rows or columns of a table",
      "Encrypt data stored in the database",
      "Backup data at the table level"
    ],
    answer: "Restrict access to specific rows or columns of a table"
  },
  {
    question: "Audit trails in database security are used to:",
    options: [
      "Monitor user access and activities",
      "Create a backup of the database",
      "Encrypt sensitive data",
      "Define user roles"
    ],
    answer: "Monitor user access and activities"
  },
  {
    question: "What is a privilege in the context of database security?",
    options: [
      "A specific permission granted to a user or role",
      "The ability to create a backup",
      "The power to modify database structure",
      "The ability to create and drop tables"
    ],
    answer: "A specific permission granted to a user or role"
  },
  {
    question: "Which of the following are security concerns in database management?",
    options: [
      "Data confidentiality",
      "Data integrity",
      "Data accessibility",
      "Data storage"
    ],
    answer: [
      "Data confidentiality",
      "Data integrity",
      "Data accessibility"
    ]
  },
  {
    question: "Which statements are true about Discretionary Access Control (DAC)?",
    options: [
      "Users can grant or revoke access to their data",
      "Access control is strictly enforced by the system",
      "Users have control over object permissions",
      "Administrators define all access rules"
    ],
    answer: [
      "Users can grant or revoke access to their data",
      "Users have control over object permissions"
    ]
  },
  {
    question: "Which of the following are benefits of Role-Based Access Control (RBAC)?",
    options: [
      "Simplifies the management of user permissions",
      "Allows easier implementation of the principle of least privilege",
      "Provides granular control over access rights",
      "Requires users to manage their own access permissions"
    ],
    answer: [
      "Simplifies the management of user permissions",
      "Allows easier implementation of the principle of least privilege",
      "Provides granular control over access rights"
    ]
  },
  {
    question: "In Mandatory Access Control (MAC), what can typically be controlled by the system?",
    options: [
      "Data classification",
      "User role assignment",
      "User access to specific data",
      "The number of users"
    ],
    answer: [
      "Data classification",
      "User access to specific data"
    ]
  },
  {
    question: "Which of the following are features of Oracle's security model?",
    options: [
      "Fine-grained access control",
      "Transparent data encryption",
      "Automatic backup creation",
      "Row-level security"
    ],
    answer: [
      "Fine-grained access control",
      "Transparent data encryption",
      "Row-level security"
    ]
  },

  // --- WEEK 7: ASSIGNMENT 7 (Questions 1-15) ---
  {
    question: "Which of the following is used to implement access controls in a database?",
    options: [
      "User authentication",
      "Data normalization",
      "Backup procedures",
      "Data encryption"
    ],
    answer: "User authentication"
  },
  {
    question: "What is the purpose of encryption in database security?",
    options: [
      "To protect data during transmission",
      "To speed up query execution",
      "To back up data",
      "To increase the database size"
    ],
    answer: "To protect data during transmission"
  },
  {
    question: "Which of the following is an example of an auditing tool in a database?",
    options: [
      "Query optimizer",
      "Access control list",
      "Database logs",
      "Backup utility"
    ],
    answer: "Database logs"
  },
  {
    question: "Database integrity refers to:",
    options: [
      "Ensuring data is correct and consistent",
      "Storing data in multiple locations",
      "Keeping the database structure simple",
      "Encrypting data for security"
    ],
    answer: "Ensuring data is correct and consistent"
  },
  {
    question: "Confidentiality in database security is primarily concerned with:",
    options: [
      "Ensuring that only authorized users can access sensitive data",
      "Ensuring the data is backed up regularly",
      "Ensuring that all users can modify data",
      "Ensuring quick data retrieval"
    ],
    answer: "Ensuring that only authorized users can access sensitive data"
  },
  {
    question: "What is the primary function of Oracle in a database environment?",
    options: [
      "To manage user queries",
      "To store large volumes of data",
      "To provide a structured database management system",
      "To create indexes for fast data retrieval"
    ],
    answer: "To provide a structured database management system"
  },
  {
    question: "Which of the following is an advantage of stored procedures in Oracle?",
    options: [
      "Reduce network traffic by processing logic on the server side",
      "Increase database size",
      "Allow for easy data duplication",
      "Simplify indexing"
    ],
    answer: "Reduce network traffic by processing logic on the server side"
  },
  {
    question: "What does indexing in a database improve?",
    options: [
      "Query execution speed",
      "Data encryption",
      "Backup processes",
      "Transaction isolation"
    ],
    answer: "Query execution speed"
  },
  {
    question: "Triggers in Oracle are primarily used to:",
    options: [
      "Enforce business rules",
      "Store large objects",
      "Create database backups",
      "Increase user permissions"
    ],
    answer: "Enforce business rules"
  },
  {
    question: "Database optimization techniques are used to:",
    options: [
      "Speed up query execution and improve system performance",
      "Increase database size",
      "Protect sensitive data",
      "Reduce server load"
    ],
    answer: "Speed up query execution and improve system performance"
  },
  {
    question: "Which of the following are key techniques used to safeguard sensitive information in databases?",
    options: [
      "Access control",
      "Data encryption",
      "Data replication",
      "Auditing"
    ],
    answer: [
      "Access control",
      "Data encryption",
      "Auditing"
    ]
  },
  {
    question: "Which of the following help in ensuring the integrity of a database?",
    options: [
      "Constraints",
      "Triggers",
      "Indexing",
      "Auditing"
    ],
    answer: [
      "Constraints",
      "Triggers"
    ]
  },
  {
    question: "Which of the following are features of Oracle Database Administration?",
    options: [
      "Managing user roles and permissions",
      "Database backup and recovery",
      "Query optimization",
      "Data encryption"
    ],
    answer: [
      "Managing user roles and permissions",
      "Database backup and recovery",
      "Data encryption"
    ]
  },
  {
    question: "Which of the following can be implemented using stored procedures?",
    options: [
      "Automating common tasks",
      "Protecting sensitive data",
      "Managing transaction logs",
      "Enforcing business rules"
    ],
    answer: [
      "Automating common tasks",
      "Enforcing business rules"
    ]
  },
  {
    question: "Which of the following are examples of database optimization techniques?",
    options: [
      "Index creation",
      "Query rewriting",
      "Data encryption",
      "Partitioning"
    ],
    answer: [
      "Index creation",
      "Query rewriting"
    ]
  },

  // --- WEEK 8: ASSIGNMENT 8 (Questions 1-15) ---
  {
    question: "Which of the following is an essential task in database installation?",
    options: [
      "Creating users and assigning roles",
      "Configuring the database server",
      "Backup and recovery planning",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "The primary purpose of database backup and recovery is to:",
    options: [
      "Prevent unauthorized access",
      "Ensure data integrity and availability",
      "Increase query performance",
      "Monitor user activities"
    ],
    answer: "Ensure data integrity and availability"
  },
  {
    question: "What is a common routine maintenance task for a database administrator?",
    options: [
      "Optimizing queries",
      "Backing up data",
      "Updating the database software",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Performance tuning in a database primarily aims to:",
    options: [
      "Improve user interface",
      "Enhance query speed and resource usage",
      "Increase database size",
      "Ensure data consistency"
    ],
    answer: "Enhance query speed and resource usage"
  },
  {
    question: "Database optimization in Oracle typically involves:",
    options: [
      "Adjusting indexes",
      "Partitioning tables",
      "Analyzing and rewriting SQL queries",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which of the following is NOT a technique for tuning Oracle databases?",
    options: [
      "Indexing",
      "Query rewriting",
      "Data partitioning",
      "Data encryption"
    ],
    answer: "Data encryption"
  },
  {
    question: "Data types in a relational database are used to define:",
    options: [
      "The size and type of data stored in a column",
      "The relationships between tables",
      "The access rights of users",
      "The frequency of data access"
    ],
    answer: "The size and type of data stored in a column"
  },
  {
    question: "Which of the following is a constraint in Oracle?",
    options: [
      "UNIQUE",
      "FOREIGN KEY",
      "CHECK",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Constraints in Oracle help to:",
    options: [
      "Define data integrity rules",
      "Optimize query performance",
      "Manage user access",
      "Encrypt sensitive data"
    ],
    answer: "Define data integrity rules"
  },
  {
    question: "Which of the following is a valid query in Oracle to retrieve all records from a table named employees?",
    options: [
      "SELECT * FROM employees;",
      "GET * FROM employees;",
      "FETCH * FROM employees;",
      "RETRIEVE * FROM employees;"
    ],
    answer: "SELECT * FROM employees;"
  },
  {
    question: "Which of the following tasks are part of routine database maintenance?",
    options: [
      "Backup and recovery",
      "Database tuning",
      "Query optimization",
      "Server security patches"
    ],
    answer: [
      "Backup and recovery",
      "Database tuning",
      "Query optimization",
      "Server security patches"
    ]
  },
  {
    question: "Performance tuning in Oracle involves which of the following?",
    options: [
      "Analyzing execution plans",
      "Using indexes to speed up queries",
      "Reducing the size of tables",
      "Adjusting the database schema"
    ],
    answer: [
      "Analyzing execution plans",
      "Using indexes to speed up queries"
    ]
  },
  {
    question: "Which of the following are techniques for optimizing Oracle databases?",
    options: [
      "Using proper indexes",
      "Rewriting inefficient queries",
      "Optimizing hardware resources",
      "Reducing the number of users"
    ],
    answer: [
      "Using proper indexes",
      "Rewriting inefficient queries",
      "Optimizing hardware resources"
    ]
  },
  {
    question: "Data types in Oracle include:",
    options: [
      "VARCHAR2",
      "NUMBER",
      "DATE",
      "ALL of the above"
    ],
    answer: "ALL of the above"
  },
  {
    question: "Constraints in Oracle can help to enforce:",
    options: [
      "Primary key uniqueness",
      "Foreign key relationships",
      "Range checks",
      "Query optimization"
    ],
    answer: [
      "Primary key uniqueness",
      "Foreign key relationships",
      "Range checks"
    ]
  },

  // --- WEEK 9: ASSIGNMENT 9 (Questions 1-15) ---
  {
    question: "A subquery is a query that:",
    options: [
      "Runs before the main query",
      "Runs after the main query",
      "Is executed as part of the main query",
      "Cannot be used in SELECT statements"
    ],
    answer: "Is executed as part of the main query"
  },
  {
    question: "Correlated subqueries differ from regular subqueries in that:",
    options: [
      "They depend on the outer query",
      "They are independent of the outer query",
      "They can only be used in UPDATE statements",
      "They are faster than regular subqueries"
    ],
    answer: "They depend on the outer query"
  },
  {
    question: "Which set operator combines the result sets of two queries, removing duplicates?",
    options: [
      "UNION",
      "INTERSECT",
      "MINUS",
      "JOIN"
    ],
    answer: "UNION"
  },
  {
    question: "The INTERSECT operator returns:",
    options: [
      "All rows that are in both queries",
      "All rows that are in either of the queries",
      "Rows that are only in the first query",
      "Rows that are only in the second query"
    ],
    answer: "All rows that are in both queries"
  },
  {
    question: "Which of the following SQL functions can be used to calculate the total number of rows in a dataset?",
    options: [
      "AVG",
      "SUM",
      "COUNT",
      "MAX"
    ],
    answer: "COUNT"
  },
  {
    question: "The SUM function is typically used to:",
    options: [
      "Find the average of a set of numbers",
      "Find the total of a set of numbers",
      "Count the number of records",
      "Find the highest value in a set of numbers"
    ],
    answer: "Find the total of a set of numbers"
  },
  {
    question: "Which of the following are examples of database security measures?",
    options: [
      "Encryption",
      "User authentication",
      "Data access control",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Database security primarily involves:",
    options: [
      "Protecting the data from unauthorized access",
      "Optimizing query performance",
      "Ensuring data is always backed up",
      "Increasing database size"
    ],
    answer: "Protecting the data from unauthorized access"
  },
  {
    question: "Which of the following statements can be used to create a user in Oracle?",
    options: [
      "CREATE USER",
      "CREATE ACCOUNT",
      "ADD USER",
      "USER CREATE"
    ],
    answer: "CREATE USER"
  },
  {
    question: "A role in Oracle is used to:",
    options: [
      "Define access rights for database users",
      "Store backup information",
      "Encrypt data",
      "Automatically optimize queries"
    ],
    answer: "Define access rights for database users"
  },
  {
    question: "Which of the following are benefits of using subqueries?",
    options: [
      "Simplifies complex queries",
      "Allows for conditional logic in queries",
      "Can reduce the number of queries needed",
      "Cannot be used with aggregate functions"
    ],
    answer: [
      "Simplifies complex queries",
      "Allows for conditional logic in queries",
      "Can reduce the number of queries needed"
    ]
  },
  {
    question: "Set operators in SQL can be used to:",
    options: [
      "Combine the results of multiple queries",
      "Calculate the total number of records",
      "Find the common rows between two queries",
      "Join tables based on common columns"
    ],
    answer: [
      "Combine the results of multiple queries",
      "Find the common rows between two queries"
    ]
  },
  {
    question: "Which SQL functions can be used for data aggregation?",
    options: [
      "AVG",
      "SUM",
      "COUNT",
      "SELECT"
    ],
    answer: [
      "AVG",
      "SUM",
      "COUNT"
    ]
  },
  {
    question: "Database security measures include:",
    options: [
      "Authentication",
      "Authorization",
      "Data backup",
      "Data compression"
    ],
    answer: [
      "Authentication",
      "Authorization"
    ]
  },
  {
    question: "Managing users and roles in Oracle involves:",
    options: [
      "Creating and managing user accounts",
      "Assigning roles to users",
      "Controlling user access to data",
      "Optimizing queries for user accounts"
    ],
    answer: [
      "Creating and managing user accounts",
      "Assigning roles to users",
      "Controlling user access to data"
    ]
  },

  // --- WEEK 10: ASSIGNMENT 10 (Questions 1-15) ---
  {
    question: "Privileges in Oracle databases are used to:",
    options: [
      "Control access to database objects",
      "Create backup copies",
      "Optimize query performance",
      "Change the structure of database tables"
    ],
    answer: "Control access to database objects"
  },
  {
    question: "Which of the following is an example of access control in a database?",
    options: [
      "Granting or revoking user privileges",
      "Creating indexes for faster search",
      "Storing sensitive data in encrypted format",
      "Analyzing query execution plans"
    ],
    answer: "Granting or revoking user privileges"
  },
  {
    question: "Indexes in databases are primarily used to:",
    options: [
      "Improve data integrity",
      "Speed up data retrieval operations",
      "Store backup copies of data",
      "Manage user roles and privileges"
    ],
    answer: "Speed up data retrieval operations"
  },
  {
    question: "Which of the following statements is true about indexes?",
    options: [
      "Indexes can slow down data modification operations",
      "Indexes only work on text-based data",
      "Indexes are used to normalize data",
      "Indexes are used to reduce storage requirements"
    ],
    answer: "Indexes can slow down data modification operations"
  },
  {
    question: "In Oracle, an index can be created using the command:",
    options: [
      "CREATE INDEX",
      "INDEX CREATE",
      "CREATE INDEX TABLE",
      "NEW INDEX"
    ],
    answer: "CREATE INDEX"
  },
  {
    question: "Views in SQL are used to:",
    options: [
      "Display data from one or more tables",
      "Modify data directly in tables",
      "Store data in a more efficient format",
      "Increase the size of the database"
    ],
    answer: "Display data from one or more tables"
  },
  {
    question: "The ACID properties in database transactions stand for:",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Allocation, Consistency, Integrity, Durability",
      "Authorization, Consistency, Integrity, Durability",
      "Atomicity, Consistency, Isolation, Distribution"
    ],
    answer: "Atomicity, Consistency, Isolation, Durability"
  },
  {
    question: "Which ACID property ensures that once a transaction is committed, it cannot be undone?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    answer: "Durability"
  },
  {
    question: "The Transaction Management system in databases is responsible for:",
    options: [
      "Ensuring all transactions are executed in isolation",
      "Keeping track of transactions and ensuring ACID properties",
      "Granting access privileges to users",
      "Encrypting sensitive data"
    ],
    answer: "Keeping track of transactions and ensuring ACID properties"
  },
  {
    question: "The Isolation property of ACID ensures:",
    options: [
      "Transactions are independent of one another",
      "All data is consistent",
      "Only committed transactions are visible to other transactions",
      "The database remains intact after system failures"
    ],
    answer: "Transactions are independent of one another"
  },
  {
    question: "Privileges can be granted on:",
    options: [
      "Tables",
      "Views",
      "Indexes",
      "Users"
    ],
    answer: [
      "Tables",
      "Views",
      "Indexes"
    ]
  },
  {
    question: "The importance of indexes includes:",
    options: [
      "Speeding up data retrieval",
      "Reducing the size of the database",
      "Improving data integrity",
      "Enabling faster joins"
    ],
    answer: [
      "Speeding up data retrieval",
      "Enabling faster joins"
    ]
  },
  {
    question: "Views in SQL provide:",
    options: [
      "Data abstraction",
      "A mechanism to secure sensitive data",
      "A way to simplify complex queries",
      "A method for modifying the structure of tables"
    ],
    answer: [
      "Data abstraction",
      "A mechanism to secure sensitive data",
      "A way to simplify complex queries"
    ]
  },
  {
    question: "ACID properties in database transactions ensure:",
    options: [
      "Transactions are processed in the correct order",
      "Data is consistent and not corrupted",
      "Transactions are isolated from each other",
      "Completed transactions are permanently stored"
    ],
    answer: [
      "Transactions are processed in the correct order",
      "Data is consistent and not corrupted",
      "Transactions are isolated from each other"
    ]
  },
  {
    question: "Transaction Management includes:",
    options: [
      "Ensuring the ACID properties are met",
      "Managing the commit and rollback operations",
      "Allocating memory for database operations",
      "Securing user data"
    ],
    answer: [
      "Ensuring the ACID properties are met",
      "Managing the commit and rollback operations"
    ]
  },

  // --- WEEK 11: ASSIGNMENT 11 (Questions 1-15) ---
  {
    question: "Common challenges in database management include:",
    options: [
      "Data redundancy",
      "Slow query performance",
      "Data integrity violations",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "JOINs in SQL are used to:",
    options: [
      "Combine rows from two or more tables based on a related column",
      "Create a new database",
      "Delete rows from a table",
      "Group rows based on aggregate functions"
    ],
    answer: "Combine rows from two or more tables based on a related column"
  },
  {
    question: "The GROUP BY clause in SQL is used to:",
    options: [
      "Group rows based on aggregate functions",
      "Sort the result set in ascending order",
      "Filter rows based on a condition",
      "Select rows from a table"
    ],
    answer: "Group rows based on aggregate functions"
  },
  {
    question: "A performance bottleneck in a database can occur due to:",
    options: [
      "High CPU usage",
      "Poor indexing strategy",
      "Inefficient queries",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "The NOT NULL constraint ensures that:",
    options: [
      "A column cannot have a NULL value",
      "A column must have a default value",
      "Data is normalized",
      "A column must be indexed"
    ],
    answer: "A column cannot have a NULL value"
  },
  {
    question: "The PRIMARY KEY constraint ensures that:",
    options: [
      "A column has unique values",
      "A column cannot contain NULL values",
      "Both of the above",
      "Data in the column is always encrypted"
    ],
    answer: "Both of the above"
  },
  {
    question: "The FOREIGN KEY constraint is used to:",
    options: [
      "Ensure that values in one table match values in another table",
      "Create a unique index on a column",
      "Make a column mandatory",
      "Speed up query execution"
    ],
    answer: "Ensure that values in one table match values in another table"
  },
  {
    question: "Real-world database applications often require:",
    options: [
      "High availability",
      "Scalability",
      "Security",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "In advanced SQL queries, the use of JOINs helps to:",
    options: [
      "Retrieve data from multiple tables",
      "Limit data retrieval to specific rows",
      "Perform aggregation operations",
      "Sort data based on conditions"
    ],
    answer: "Retrieve data from multiple tables"
  },
  {
    question: "To improve database performance, one must focus on:",
    options: [
      "Optimizing queries",
      "Proper indexing",
      "Analyzing execution plans",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "SQL JOINs can be classified into:",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "OUTER JOIN"
    ],
    answer: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "OUTER JOIN"
    ]
  },
  {
    question: "GROUP BY is typically used with:",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    answer: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ]
  },
  {
    question: "Constraints in SQL include:",
    options: [
      "NOT NULL",
      "UNIQUE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    answer: [
      "NOT NULL",
      "UNIQUE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ]
  },
  {
    question: "Identifying performance bottlenecks in a database can involve:",
    options: [
      "Monitoring query performance",
      "Reviewing database schema",
      "Optimizing indexes",
      "Writing better JOIN queries"
    ],
    answer: [
      "Monitoring query performance",
      "Reviewing database schema",
      "Optimizing indexes",
      "Writing better JOIN queries"
    ]
  },
  {
    question: "Real-world database applications often face challenges in:",
    options: [
      "Data consistency",
      "High traffic volume",
      "Data redundancy",
      "Complex query optimization"
    ],
    answer: [
      "Data consistency",
      "High traffic volume",
      "Data redundancy",
      "Complex query optimization"
    ]
  },

  // --- WEEK 12: ASSIGNMENT 12 (Questions 1-15) ---
  {
    question: "In a University Record Management System, which SQL command is commonly used to create a new table?",
    options: [
      "INSERT",
      "SELECT",
      "CREATE",
      "UPDATE"
    ],
    answer: "CREATE"
  },
  {
    question: "In a University Record Management System, which SQL command would you use to update a student's grade in a specific course?",
    options: [
      "ALTER",
      "MODIFY",
      "UPDATE",
      "REPLACE"
    ],
    answer: "UPDATE"
  },
  {
    question: "In a Client Information System using SQL Server, which SQL statement would you use to retrieve the names of clients who have made purchases within the last month?",
    options: [
      "SELECT DISTINCT",
      "SELECT TOP",
      "SELECT WHERE",
      "SELECT JOIN"
    ],
    answer: "SELECT WHERE"
  },
  {
    question: "In a Client Information System using SQL Server, which SQL statement would you use to delete all clients who have not made any purchases in the last year?",
    options: [
      "DELETE FROM",
      "DROP TABLE",
      "TRUNCATE TABLE",
      "DELETE WHERE"
    ],
    answer: "DELETE FROM"
  },
  {
    question: "Which of the following tables are commonly found in a University Record Management System?",
    options: [
      "Student",
      "Course",
      "Instructor",
      "Department"
    ],
    answer: [
      "Student",
      "Course",
      "Instructor",
      "Department"
    ]
  },
  {
    question: "Which of the following statements accurately describes the role of foreign keys in a University Record Management System database?",
    options: [
      "Foreign keys ensure referential integrity by enforcing relationships between tables",
      "Foreign keys allow for efficient querying and retrieval of data",
      "Foreign keys restrict the deletion of records in a parent table if corresponding records exist in a child table",
      "Foreign keys facilitate the creation of virtual views for reporting purposes"
    ],
    answer: [
      "Foreign keys ensure referential integrity by enforcing relationships between tables",
      "Foreign keys restrict the deletion of records in a parent table if corresponding records exist in a child table"
    ]
  },
  {
    question: "What are the advantages of stored procedures in a Client Information System database?",
    options: [
      "Improved performance due to precompiled execution plans",
      "Enhanced security by encapsulating complex logic",
      "Simplified maintenance by centralizing business logic",
      "It is compatible with all SQL Server editions",
      "Ability to execute multiple queries simultaneously"
    ],
    answer: [
      "Improved performance due to precompiled execution plans",
      "Enhanced security by encapsulating complex logic",
      "Simplified maintenance by centralizing business logic"
    ]
  },
  {
    question: "Which statements regarding transactions in a Client Information System database are true?",
    options: [
      "Transactions ensure data integrity by grouping multiple SQL statements into a single unit of work",
      "BEGIN TRANSACTION and COMMIT statements can explicitly start and commit transactions",
      "Transactions can be automatically rolled back if an error occurs during their execution",
      "Transactions can span multiple SQL Server instances",
      "Transactions are always automatically committed after each SQL statement execution"
    ],
    answer: [
      "Transactions ensure data integrity by grouping multiple SQL statements into a single unit of work",
      "BEGIN TRANSACTION and COMMIT statements can explicitly start and commit transactions",
      "Transactions can be automatically rolled back if an error occurs during their execution"
    ]
  },
  {
    question: "The SQL command used to insert data into a University Record Management System table is:",
    options: [],
    answer: "INSERT"
  },
  {
    question: "In a University Record Management System database, a query to retrieve the list of students who have enrolled in a specific course and received a grade above 90% might include using the statement:",
    options: [],
    answer: "SELECT"
  },
  {
    question: "The SQL command used to update the email address of a specific client in the Clients table is:",
    options: [],
    answer: "UPDATE"
  },
  {
    question: "What is the main function of database encryption in cybersecurity?",
    options: [
      "Data protection",
      "Performance slowdown",
      "Query blocking",
      "Compliance removal"
    ],
    answer: "Data protection"
  },
  {
    question: "What role do stored procedures play in a Client Information System using SQL Server?",
    options: [
      "They are used to create new tables in the database",
      "They encapsulate complex business logic and improve performance",
      "They enforce data integrity constraints",
      "They provide simplified access to specific subsets of data"
    ],
    answer: "They encapsulate complex business logic and improve performance"
  },
  {
    question: "What is the primary purpose of views in a Client Information System database?",
    options: [
      "To automate tasks or enforce business rules based on certain events",
      "To provide simplified access to specific subsets of data",
      "To retrieve client information based on various criteria",
      "To enforce data integrity constraints"
    ],
    answer: "To provide simplified access to specific subsets of data"
  },
  {
    question: "Which security measure is commonly implemented to protect sensitive client information in a Client Information System?",
    options: [
      "Role-based access control",
      "Encapsulation",
      "Foreign key constraints",
      "Triggers"
    ],
    answer: "Role-based access control"
  }
];
// This completes the array with all 180 questions from Week 4 through Week 12.
