-- Create the `burgers_db`.
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Switch to or use the `burgers_db`.
USE burgers_db;

-- Create a `burgers` table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(80) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
)
