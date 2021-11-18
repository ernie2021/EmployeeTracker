INSERT INTO sections (section_name)
VALUES ("eComm"),
       ("Media"),
       ("Production"),
       ("Accounting");
INSERT INTO postions (position_name, position_salary, position_department_id)
VALUES ("eComm", 30000, 1),
       ("Media", 34000, 2),
       ("Production", 37000, 3),
       ("Accounting", 37000, 4);
INSERT INTO employees (employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager)
VALUES ("Juan", "the Productionist", 1,1, "Leon"),
       ("Melly", "The Accountant", 2,2, "Albert"),
       ("Andrew", "Ernie", 3,3, "Albert"),
       ("Ernie", "Garcia", 4,4, "Leon");