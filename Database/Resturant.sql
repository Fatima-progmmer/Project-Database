CREATE DATABASE resutrant;

use resutrant;


-- =======================
-- Table: Customers
-- =======================
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    PhoneNumber VARCHAR(15),
    Address TEXT,
    IsPremium BOOLEAN DEFAULT FALSE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =======================
-- Table: MenuItems
-- =======================
CREATE TABLE MenuItems (
    ItemID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10,2) NOT NULL,
    Category VARCHAR(50),
    Available BOOLEAN DEFAULT TRUE
);
-- =======================
-- Table: OnlineOrders
-- =======================
CREATE TABLE OnlineOrders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10,2),
    DeliveryAddress TEXT,
    AreaCode VARCHAR(10),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- =======================
-- Table: PhoneOrders
-- =======================
CREATE TABLE PhoneOrders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(100),
    PhoneNumber VARCHAR(15),
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10,2),
    DeliveryAddress TEXT,
    AreaCode VARCHAR(10)
);

-- =======================
-- Table: AreaCodes
-- =======================
CREATE TABLE AreaCodes (
    AreaCode VARCHAR(10) PRIMARY KEY,
    AreaName VARCHAR(100)
);

-- =======================
-- Table: DeliveryBoys
-- =======================
CREATE TABLE DeliveryBoys (
    DeliveryBoyID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100),
    PhoneNumber VARCHAR(15),
    AssignedAreaCode VARCHAR(10),
    FOREIGN KEY (AssignedAreaCode) REFERENCES AreaCodes(AreaCode)
);

-- =======================
-- Table: Tables
-- =======================
CREATE TABLE Tables (
    TableID INT AUTO_INCREMENT PRIMARY KEY,
    TableNumber INT UNIQUE NOT NULL,
    Capacity INT NOT NULL,
    IsAvailable BOOLEAN DEFAULT TRUE
);

-- =======================
-- Table: Reservations
-- =======================
CREATE TABLE Reservations (
    ReservationID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    TableID INT,
    ReservationDate DATE,
    ReservationTime TIME,
    NumberOfGuests INT,
    SpecialRequest TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (TableID) REFERENCES Tables(TableID)
);

-- =======================
-- Table: Discounts
-- =======================
CREATE TABLE Discounts (
    DiscountID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    DiscountPercentage DECIMAL(5,2),
    ValidUntil DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);


-- =======================
-- Sample Data: Customers
-- =======================
INSERT INTO Customers (FullName, Email, PhoneNumber, Address, IsPremium)
VALUES 
('Ali Raza', 'ali.raza@example.com', '03001234567', 'Street 1, Kotli AJK', TRUE),
('Sara Khan', 'sara.khan@example.com', '03111234567', 'Gulshan Iqbal, Karachi', FALSE);

-- =======================
-- Sample Data: MenuItems
-- =======================
INSERT INTO MenuItems (Name, Description, Price, Category, Available)
VALUES 
('Chicken Biryani', 'Spicy biryani with chicken', 450.00, 'Food', TRUE),
('Veggie Burger', 'Burger with grilled vegetables', 350.00, 'Food', TRUE),
('Pepsi 500ml', 'Chilled soft drink', 80.00, 'Beverage', TRUE);

-- =======================
-- Sample Data: AreaCodes
-- =======================
INSERT INTO AreaCodes (AreaCode, AreaName)
VALUES 
('KTL01', 'Kotli City'),
('KHI01', 'Karachi Central');

-- =======================
-- Sample Data: DeliveryBoys
-- =======================
INSERT INTO DeliveryBoys (FullName, PhoneNumber, AssignedAreaCode)
VALUES 
('Ahmed Nawaz', '03451234567', 'KTL01'),
('Bilal Yousaf', '03331234567', 'KHI01');

-- =======================
-- Sample Data: OnlineOrders
-- =======================
INSERT INTO OnlineOrders (CustomerID, TotalAmount, DeliveryAddress, AreaCode)
VALUES 
(1, 530.00, 'Street 1, Kotli AJK', 'KTL01');

-- =======================
-- Sample Data: PhoneOrders
-- =======================
INSERT INTO PhoneOrders (CustomerName, PhoneNumber, TotalAmount, DeliveryAddress, AreaCode)
VALUES 
('Zara Sheikh', '03221234567', 450.00, 'Gulshan, Karachi', 'KHI01');

-- =======================
-- Sample Data: Tables
-- =======================
INSERT INTO Tables (TableNumber, Capacity, IsAvailable)
VALUES 
(1, 4, TRUE),
(2, 2, TRUE),
(3, 6, FALSE);

-- =======================
-- Sample Data: Reservations
-- =======================
INSERT INTO Reservations (CustomerID, TableID, ReservationDate, ReservationTime, NumberOfGuests, SpecialRequest)
VALUES 
(2, 1, '2025-04-20', '19:30:00', 2, 'Window seat');

-- =======================
-- Sample Data: Discounts
-- =======================
INSERT INTO Discounts (CustomerID, DiscountPercentage, ValidUntil)
VALUES 
(1, 10.00, '2025-12-31');

