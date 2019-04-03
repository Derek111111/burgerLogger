
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

id INTEGER AUTO_INCREMENT NOT NULL,
burger_Name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
primary key(id)

);