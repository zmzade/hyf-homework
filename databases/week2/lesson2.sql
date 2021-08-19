--------------------Part 1: Working with tasks

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ("writing", "practice danish", now(),ADDDATE(now(), INTERVAL 1 Day),ADDDATE(now(), INTERVAL 10 Day), 3, 1 );

--Change the title of a task
UPDATE task 
SET title = "learning Danish"
where id = 36;

--Change a task due date
UPDATE task
SET due_date = ADDDATE(now(), INTERVAL 5 Day)
WHERE id = 36;
--Change a task status
UPDATE task
SET status_id = 2
WHERE id = 36;

--Mark a task as complete
UPDATE task
SET status_id = 3
where id = 36;

--Delete a task
DELETE FROM task
WHERE id = 37;

------------------------------------------
-----------------------Part 2: School database
--Create a new database containing the following tables:
--Class: with the columns: id, name, begins (date), ends (date)
--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE database School;
use School;
CREATE TABLE `class`(
    `id` INT (10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `begins` DATETIME,
    `ends` DATETIME 
);
CREATE TABLE `student`(
    `id` INT (10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `email` VARCHAR (255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` INT (10) UNSIGNED NOT NULL,
    FOREIGN KEY (`class_id`) REFERENCES class(`id`) ON delete SET NULL ON update CASCADE
);
--Create an index on the name column of the student table.
--add a new column to the class table named status which can only have 
--the following values: not-started, ongoing, finished (hint: enumerations).
CREATE INDEX idx_name
on student (name);
SHOW INDEX FROM student;
ALTER TABLE Class
ADD status enum('not-started', 'ongoing', 'finished') not null;
----------------------------------------------------------------------
-------------------------Part 3: More queries
USE hyf_lesson2;


--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
user.email,
task.title,
task.description
FROM (task JOIN user_task ON task.id = user_task.task_id)
JOIN user ON user.id = user_task.user_id
where user.email like '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
user.name as username,
task.title,
status.name 
FROM (task join user_task ON task.id = user_task.task_id) 
JOIN user ON user.id = user_task.user_id
join status ON status.id= task.status_id 
where status.name = "Not started" AND user.name = 'Donald Duck';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
user.name,
task.title,
task.created
FROM (task JOIN user_task ON task.id = user_task.task_id)
JOIN user ON user.id = user_task.user_id
WHERE month(task.created) = 9 AND user.name = "Maryrose Meadows";

--Find how many tasks where created in each month, e.g. 
--how many tasks were created in october, how many tasks were created in 
--november, etc. (hint: use group by)
SELECT
month(task.created) as months,
COUNT(task.id) as task_count
FROM task
GROUP BY month(task.created);
---------------------------------------------------------------------------

--------------------------------------Part 4: Creating a database
-- create a simple university register database
use registration;
SET NAMES utf8mb4;
-- database has 4 tables: student, department, course and enrollment.
CREATE TABLE `student`(
    student_id INT(10) UNSIGNED PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    gpa DECIMAL(3,2)
);
-- delete auto_crement from student_id
--ALTER table student 
--DROP PRIMARY KEY,
--CHANGE student_id student_id INT(10) UNSIGNED PRIMARY KEY;
CREATE TABLE `department`(
    dept_id char(8) PRIMARY KEY,
    name VARCHAR (255) NOT NULL unique,
    head VARCHAR (255) NOT NULL,
    building VARCHAR(255),
    room VARCHAR(255) 

);
-- change dept_id datatype 
--ALTER table department
--DROP PRIMARY KEY,
--CHANGE dept_id dept_id char(8) PRIMARY KEY;


CREATE TABLE `course`(
    dept_id CHAR(8),
    course_id INT (10),
    name varchar(32) not null,
    hours int not null,

    PRIMARY KEY (dept_id, course_id),
    CONSTRAINT `fk_course_department` FOREIGN KEY (dept_id) REFERENCES `department` (dept_id)
    ON update CASCADE
    ON delete RESTRICT
);
CREATE TABLE enrolled (
    dept_id CHAR (8),
    course_id INT (10),
    student_id INT (10) UNSIGNED,

    PRIMARY KEY (dept_id, course_id, student_id),
    FOREIGN KEY (dept_id,course_id) REFERENCES `course` (dept_id, course_id)
    ON update CASCADE
    ON delete CASCADE,

    FOREIGN KEY (student_id) REFERENCES `student` (student_id)
    ON update CASCADE
    ON delete CASCADE
);
--insert data into student table
INSERT INTO student VALUES (11, "Kiarash", 3.0);
INSERT INTO student VALUES (22, "Zahra", 3.2);
INSERT INTO student VALUES (33, "Jalal", 3.9);
INSERT INTO student VALUES (44, "Maxine", 3.5);
INSERT INTO student VALUES (55, "Eric", 3.5);

--insert data into department table
INSERT INTO department VALUES ('LING', "Linguistics", 'Barry', 'red', 200);
INSERT INTO department VALUES ('CS', "Computer Science", 'Bob', 'lion', 300);
INSERT INTO department VALUES ('IE', "Industirel Engineering", 'Joe', 'rose', 300);
INSERT INTO department VALUES ('SOC', "Sociology", 'Nana', 'west', 200);
INSERT INTO department VALUES ('GEO', "Geology", 'Sofie', 'north', 100);

--insert data into course table
INSERT into course VALUES ('CS',101,'Programming',4);
INSERT into course VALUES ('CS',201,'Algorithms',3);
INSERT into course VALUES ('CS',202,'Systems',3);
INSERT into course VALUES ('IE',101,'Proabability',3);
INSERT into course VALUES ('IE',102,'Statistics',3);
INSERT into course VALUES ('GEO',101,'Geo Morphology',3);
INSERT into course VALUES ('GEO',201,'Petrology',4);
INSERT into course VALUES ('GEO',301,'Tectonics',4);
INSERT into course VALUES ('LING',102,'Phonetics',3);
INSERT into course VALUES ('LING',104,'Syntax',4);
INSERT into course VALUES ('SOC',102,'Society',3);

--insert data into enrolled table
INSERT into enrolled VALUES ('CS',101,11);
INSERT into enrolled VALUES ('GEO',101,44);
INSERT into enrolled VALUES ('CS',101,33);
INSERT into enrolled VALUES ('CS',201,22);
INSERT into enrolled VALUES ('GEO',301,44);
INSERT into enrolled VALUES ('LING',102,22);
INSERT into enrolled VALUES ('LING',104,33);
INSERT into enrolled VALUES ('SOC',102,55);

-------------------Some queries to check data
use registration;
SELECT * from department;
-- What is the name of the head of the CS dept?
SELECT head
FROM department
WHERE dept_id = 'CS';
-- What are the course numbers of all the CS courses?
SELECT course_id
FROM course
WHERE dept_id = "CS";
-- What are all the LING and IE courses?
SELECT name, dept_id
FROM course
WHERE dept_id='LING' OR dept_id = 'IE';
-- What are the names of the students enrolled in GEO 301?
SELECT Name
FROM student JOIN enrolled ON student.student_id = enrolled.student_id
WHERE dept_id='GEO' AND course_id = 301;
--select name
--from student natural join enrolled
--where dept_id = 'GEO' and course_id = 301;
----------
-- What is the total enrollment of each department?
SELECT COUNT(student_id) as total_enrolled,
department.name
FROM enrolled natural JOIN department
GROUP BY department.name;
-- What are the dept_ids and names of the heads of departments 
--that have zero enrollment?
SELECT dept_id,
head
FROM department LEFT JOIN enrolled USING (dept_id)
WHERE course_id is NULL;
UPDATE department SET name = 'SOCIO' WHERE dept_id = 'SOC';
UPDATE department SET dept_id = 'SOCIO' WHERE dept_id = "SOC";
UPDATE department SET name = 'Sociology' WHERE dept_id = 'SOCIO';
