SELECT COUNT(task.id) FROM task;
SELECT * FROM task;
SELECT COUNT(task.id) FROM task WHERE due_date IS NULL ;
SELECT * FROM task JOIN status ON task.status_id = status.id WHERE status.name like "done";
SELECT * FROM task JOIN status ON task.status_id = status.id WHERE status.name not like "done";
--5--Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC ;
--6--Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;
--7--Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task where CONCAT(title, description) like "%database%" ;
--8--Get the title and status (as text) of all tasks
SELECT task.title, status.name FROM task JOIN status on task.status_id = status.id;
--9--Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, count(task.status_id) as tasks FROM task JOIN status ON task.status_id=status.id GROUP BY status.name;
--10--Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id) as tasks FROM task JOIN status ON  task.status_id = status.id GROUP BY status.name ORDER BY tasks DESC 