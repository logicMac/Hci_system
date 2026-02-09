CREATE DATABASE IF NOT EXISTS hci_system;

USE hci_system;

CREATE TABLE users ( 
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    authenticated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    role ENUM('admin', 'citizen', 'Barangay Staff', 'Department Officer', 'System')  
);

CREATE TABLE user_otps (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT PRIMARY KEY,
    otp VARCHAR(6),
    otp_expires BIGINT,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
