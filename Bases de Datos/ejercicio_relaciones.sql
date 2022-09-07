CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE cohorte (
cohorte12_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

SELECT * FROM cohorte;

CREATE TABLE alumno(
alumno_id INT NOT NULL PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255) NOT NULL,
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

DROP TABLE alumno;
SELECT * FROM alumno;

CREATE TABLE direccion(
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);
DROP TABLE direccion;
SELECT * FROM direccion;

CREATE TABLE equipo(
equipo_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

CREATE TABLE instructor (
 instructor_id INT NOT NULL PRIMARY KEY, 
 nombre VARCHAR(255) NOT NULL,
 edad INT NOT NULL,
 cumpleanios date NOT NULL,
 RFC VARCHAR(255) NOT NULL,
 supervisor VARCHAR(255) NOT NULL,
 sesiones VARCHAR(255) NOT NULL
 );
 
 SELECT * FROM instructor;

-- Agregar llave foránea --
ALTER TABLE cohorte
ADD CONSTRAINT fk_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id); 

ALTER TABLE cohorte
ADD CONSTRAINT fk_instructor_id
FOREIGN KEY (instructor_id)
REFERENCES instructor(instructor_id); 

ALTER TABLE equipo
ADD CONSTRAINT fk_equipo_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id); 

ALTER TABLE direccion
ADD CONSTRAINT fk_direccion_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id); 

INSERT INTO alumno (alumno_id, nombre, edad, curp, rfc, nivel_ingles, amonestaciones)
VALUES (100, 'Pedro', '20', '5555555555', '5555555555', 'A2', 1),
(200,'Raul', '5555555555', '30',  '5555555555', 'Comala','A2', 1),
(300,'Victor', '5555555555', '40', '5555555555', 'Comala','A2', 1),
(400,'Andrés', '5555555555', '26', '5555555555', 'Comala','A2', 1);

INSERT INTO cohorte (alumno_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (1, 1, 45, 'Matutino', 'En linea', 'CDMX');


 SELECT * FROM alumno;
 