\c recipes_app_db_dev;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id serial PRIMARY KEY,
    rec_name VARCHAR(255),
    category VARCHAR(255),
    servings INT NOT NULL,
    prep_time VARCHAR(255),
    level VARCHAR(255),
    calories INT NOT NULL,
    ingredients TEXT,
    directions TEXT,
    pic VARCHAR(255)
);

