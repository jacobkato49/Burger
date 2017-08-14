CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT,
  burgers_name varchar(100) NOT NULL,
  devoured BOOLEAN default false,
  date TIMESTAMP,
  PRIMARY KEY(id)
);
