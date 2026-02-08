CREATE DATABASE IF NOT EXISTS hci_system;

USE hci_system;

CREATE TABLE users (
    user_id INT PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    role ENUM('admin', 'citizen', 'Barangay Staff', 'Department Officer', 'System')  
);

CREATE TABLE user_otps (
    user_id INT PRIMARY KEY,
    otp VARCHAR(6),
    otp_expires BIGINT,  
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
