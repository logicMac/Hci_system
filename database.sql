CREATE DATABASE IF NOT EXISTS hci_system;

USE hci_system;

CREATE TABLE users (
    user_id INT PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone_number INT(15) NOT NULL,
    role ENUM('admin', 'citizen', 'Barangay Staff', 'Department Officer', 'System')  
);

