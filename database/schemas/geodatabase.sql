-- ---
-- Globals
-- ---

-- ---
-- Table regions
-- ---

DROP TABLE IF EXISTS regions CASCADE;

CREATE TABLE regions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  updated_at DATE NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- ---
-- Table countries
-- ---

DROP TABLE IF EXISTS countries CASCADE;
		
CREATE TABLE countries (
  id VARCHAR(3) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  id_regions INTEGER REFERENCES regions (id),
  updated_at DATE NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- ---
-- Table airports
-- ---

DROP TABLE IF EXISTS airports CASCADE;
		
CREATE TABLE airports (
  id VARCHAR(3) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city_name VARCHAR(255) NOT NULL,
  updated_at DATE NOT NULL,
  created_at TIMESTAMP NOT NULL
);


-- ---
-- Table cities
-- ---

DROP TABLE IF EXISTS cities CASCADE;
		
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  updated_at DATE NOT NULL,
  created_at TIMESTAMP NOT NULL,
  id_countries VARCHAR(3) REFERENCES countries (id),
  id_airport VARCHAR(3) REFERENCES airports (id)
);


