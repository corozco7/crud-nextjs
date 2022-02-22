CREATE SCHEMA IF NOT EXISTS learn;

CREATE TABLE IF NOT EXISTS learn.predios(
    id SERIAL PRIMARY KEY,
    numero_predial VARCHAR(100) NOT NULL unique,
    avaluo VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    departamento VARCHAR(100) NOT NULL,
    municipio VARCHAR(100) NOT NULL
);