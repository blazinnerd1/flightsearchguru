-- ---
-- Globals
-- ---

-- ---
-- Table regions
-- ---

DROP TABLE IF EXISTS oneway;

CREATE TABLE oneway (
  id SERIAL PRIMARY KEY,
  from_id VARCHAR(3) NOT NULL,
  to_id VARCHAR(3) NOT NULL,
  departing DATE NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  info TEXT NOT NULL
);


