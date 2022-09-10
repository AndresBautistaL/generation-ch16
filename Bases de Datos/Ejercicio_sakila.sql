use sakila;
-- La película que generó más dinero 
select * from payment;
select SUM(amount) from payment group by amount order by SUM(amount) DESC;
-- Cuantas películas están hechas en un mismo idioma
select * from film;
select * from language;
SELECT name, language_id FROM language order by language_id ASC;
select title, SUM(language_id) from film group by (title) order by COUNT(language_id) DESC;
select language_id, COUNT(language_id) from film group by (language_id) order by COUNT(language_id) DESC;


-- Titulo de peliculas con su idioma --
SELECT title, name FROM film, language;

-- Actores que han trabajado en películas francesas --

-- Cobro por día --
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;
