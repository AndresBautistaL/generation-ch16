use sakila;

SELECT * FROM sakila.address;

-- SUM(), AVG(), COUNT() --

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta a las filas de una tabla --
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2 --
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos --
SELECT COUNT(DISTINCT customer_id) FROM payment;
/*
SUM()
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount)  AS 'Total de rentas' FROM payment where staff_id = 2;

-- ¿Cuál cliente realizó mas rentas? 148 - 46 / 318 - 12 --
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- GROUP BY - Agrupo solo si se usa con  SUM, AVG, --
-- ORDER BY -- Ordena según la columna o funcion que le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cuál cliente gastó mas? 526 - 221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) ASC;

-- AVG() - Regresa el promedio --
SELECT AVG(amount) AS Promedio  FROM payment;

-- ¿Cuál cliente gastó más en promedio --