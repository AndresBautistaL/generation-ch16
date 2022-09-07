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


