USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT NAME AS Nombre_de_pais, Population AS 'Poblacion del país' FROM country;

SELECT NAME AS Nombre_de_pais, Population AS 'Poblacion del país' FROM country ORDER BY Nombre_de_pais DESC;
-- Distinct filtra los datos repetidos --
SELECT DISTINCT Continent FROM Country;

-- WHERE cláusula
-- < > <= >= != = --
SELECT * from Country WHERE LifeExpectancy < 50;

SELECT * from Country WHERE Continent != 'North America' ORDER BY Continent ASC;

-- Between --
-- Se utiliza junto con where --
SELECT * FROM country WHERE Population BETWEEN 5000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 5000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND / !== lógicos --

SELECT * FROM Country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM Country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';

-- Filtrar Valores Nulos NULL --
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL; 

-- Like sirve para buscar un patrón en específico --
-- '%' busca cualquier cantidad de caracteres --
-- '_' especificamos un caracter
SELECT * FROM country Where Name LIKE '%as%';
SELECT * FROM country Where Name LIKE '%e__a%';
SELECT * FROM country Where Continent LIKE 'asia';