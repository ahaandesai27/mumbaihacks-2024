-- Enable foreign key constraints
PRAGMA foreign_keys = ON;

-- Create Company Table
CREATE TABLE IF NOT EXISTS Companies (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyName TEXT UNIQUE NOT NULL,
    AmountOfEmployeesWorkingFromHome INTEGER,
    HQ TEXT,
    TasksInStore INTEGER,
    Domain TEXT
);

-- Create Employee Table
CREATE TABLE IF NOT EXISTS Employees (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Email TEXT NOT NULL,
    Age INTEGER NOT NULL,
    Password TEXT NOT NULL,
    Role TEXT NOT NULL,
    Level INTEGER CHECK(Level BETWEEN 1 AND 4),
    PhoneNumber TEXT,
    CompanyID INTEGER,
    HomeCity TEXT,
    TasksCompleted INTEGER DEFAULT 0,
    TimeWorkedPerWorkweek INTEGER,
    FOREIGN KEY (CompanyID) REFERENCES Companies(ID) ON DELETE SET NULL
);

-- Create Task Table
CREATE TABLE IF NOT EXISTS Tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    assigned_to INTEGER,
    created_by INTEGER,
    status TEXT CHECK(status IN ('Pending', 'In Progress', 'Completed')) NOT NULL DEFAULT 'Pending',
    deadline TEXT,
    FOREIGN KEY (assigned_to) REFERENCES Employees(ID) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES Employees(ID) ON DELETE SET NULL
);
