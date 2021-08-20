--create the database and queries for a meal sharing website
CREATE database meal_website;
use meal_website;
SET NAMES utf8mb4;

--Db model has 3 tables
 
CREATE TABLE `meal` (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT ,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT(10),
    price DECIMAL,
    created_date DATE 
);

CREATE TABLE `reservation` (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT (10),
    meal_id INT (10) UNSIGNED NOT NULL,
    created_date DATE,
    contact_phonenumber VARCHAR (255),
    contact_name VARCHAR (255),
    contact_email VARCHAR (255),

    FOREIGN KEY (meal_id) REFERENCES meal (id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

CREATE TABLE `review` (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (255),
    description TEXT,
    meal_id INT(10) UNSIGNED NOT NULL,
    stars INT (10),
    created_date DATE,

    FOREIGN KEY (meal_id) REFERENCES meal (id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

-------------------queries-----------------
------------ Meal---
--Get all meals
SELECT *
FROM meal;

-- Add a new meal
INSERT INTO meal VALUES (1,'homemade kebab', 'lamb and calf meat', 'Tehran', '2021-08-08', 10,200, '2021-08-07');
INSERT INTO meal (
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date) 
    VALUES ('homemade sandwich', 'lamb meat', 'Istanbul', '2021-06-08', 20,100, '2021-06-07'),
    ('falafel', 'mashed peas', 'Tehran', '2021-05-02', 5, 50, '2021-05-01');

--Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 3;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'kebab', max_reservations = 4
WHERE id = 1;
SELECT*
FROM meal;
--Delete a meal with any id, fx 1
DELETE 
FROM meal
WHERE id = 1;

-----------Reservation--------------

--Get all reservations
SELECT *
FROM reservation;
--Add a new reservation
INSERT INTO reservation 
(number_of_guests, 
meal_id, 
created_date, 
contact_phonenumber, 
contact_name, 
contact_email)
VALUES (10, 2, '2021-08-01', '125678','John', 'John@mail.com'),
(5, 2,'2021-08-01', '100678','Jo', 'Jo@mail.com'),
(3, 3,'2021-07-01', '125668','Josh', 'Josh@mail.com');

--Get a reservation with any id, fx 1
SELECT * 
FROM reservation
WHERE id=1;
--ALTER TABLE reservation AUTO_INCREMENT = 1;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 7, meal_id=3
WHERE id = 1;
--Delete a reservation with any id, fx 1
DELETE 
FROM reservation
WHERE id = 1;

---------------------Review---------------
--Get all reviews
SELECT *
FROM review;
--Add a new review
INSERT INTO review (
    title,
    description,
    meal_id,
    stars,
    created_date)
VALUES
('best food', 'fresh vegs', 3, 4, '2021-08-07'),
('fresh food', 'fresh meat', 2, 5, '2021-07-07'),
('best food', 'fresh vegs', 2, 6, '2021-06-07');
SELECT*
FROM review;
--Get a review with any id, fx 1
SELECT*
FROM review
WHERE id =1;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = "delicious", stars = 6
WHERE id = 1;
--Delete a review with any id, fx 1
DELETE
FROM review
WHERE id = 1;
-----------------------Additional queries------------
--Now add a couple of different meals, reservations and reviews with different attributes
INSERT INTO meal (
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
    ) 
    VALUES ('pasta', 'fotochini', 'Kerman', '2021-06-04', 30,70, '2021-03-07'),
    ('salad', 'red vegs', 'London', '2021-01-02', 2, 30, '2021-05-07'),
    ('egg', 'complete breakfast', 'Paris', '2020-01-02', 1, 10, '2020-05-07');
 SELECT *
 FROM meal;

INSERT INTO reservation (
    number_of_guests, 
meal_id, created_date, 
contact_phonenumber, 
contact_name, 
contact_email
)
VALUES (10, 2, '2021-08-01', '125678','John', 'John@mail.com'),
(15, 2,'2020-08-01', '1660678','Helle', 'Helle@mail.com'),
(13, 3,'2021-07-01', '125668','Maxine', 'Maxine@mail.com');

SELECT*
FROM
reservation;

INSERT INTO review (
    title,
    description,
    meal_id,
    stars,
    created_date)
VALUES
('best food', 'fresh vegs', 3, 4, '2021-08-07'),
('juicy', 'fresh ingredients', 2, 3, '2021-07-07'),
('salad mixed', 'tropical', 2, 1, '2021-06-07');
SELECT *
FROM review;

---------------Functionality--------------
--Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;
--Get meals that still has available reservations
SELECT 
    Coalesce(SUM(reservation.number_of_guests), 0) AS total_reservation,
    meal.max_reservations,
    meal.title,
    meal.id
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING max_reservations > total_reservation;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT *
FROM meal
WHERE title like '%homemade%';
--Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date 
BETWEEN '2021-01-01' AND '2021-08-08';
--Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 2;
--Get the meals that have good reviews
SELECT
meal.title,
review.stars
FROM meal JOIN review ON meal.id=review.meal_id
WHERE review.stars > 5;
--Get reservations for a specific meal sorted by created_date
SELECT
reservation.contact_name,
reservation.created_date as creation_date,
meal.title
FROM reservation JOIN meal ON meal.id=reservation.meal_id
WHERE meal.id=2
ORDER BY creation_date;
--Sort all meals by average number of stars in the reviews
SELECT
meal.title,
AVG(review.stars) as Average_stars
FROM meal JOIN review
ON meal.id=review.meal_id
GROUP BY meal_id
ORDER BY Average_stars DESC;
