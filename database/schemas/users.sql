-- ---
-- Globals
-- ---

-- ---
-- Table regions
-- ---

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL
);

-- ---
-- 
-- ---

DROP TABLE IF EXISTS pricewatch;
		
CREATE TABLE pricewatch (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  title TEXT NOT NULL,
  searchstring TEXT NOT NULL,
  completed BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS searchhistory;
		
CREATE TABLE searchhistory (
  id SERIAL PRIMARY KEY,
  searchstring TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  user_id TEXT
);