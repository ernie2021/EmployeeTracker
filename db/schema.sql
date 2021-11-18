 DROP DATABASE IF EXISTS employees_db;
 CREATE DATABASE employees_db;
 USE employees_db;

 CREATE TABLE sections (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   section_name VARCHAR(30) NOT NULL
 );
 CREATE TABLE positions ( 
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  position_name VARCHAR(30) NOT NULL,
  position_salary INT NOT NULL,
  position_section_id INT
 );
 CREATE TABLE employees ( 
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   employee_first_name VARCHAR(30) NOT NULL,
   employee_last_name VARCHAR(30) NOT NULL,
   employee_position_id INT NOT NULL,
   employee_section_id INT,
   employee_manager VARCHAR(300)
 );