Use tienda;

SELECT * FROM tienda.compra;
SELECT * FROM tienda.clientes;

-- Inner Join
-- Explícita

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = clientes.cliente_id;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (4, '2022-09-07', 123.50, 2);

SELECT
clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
on clientes.cliente_id = compra.cliente_id;

-- Unión implícita
SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Right join
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada pais
USE sakila;

SELECT * FROM sakila.address;

/*
address - city_id / address
city - city-id / id
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;


SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;

