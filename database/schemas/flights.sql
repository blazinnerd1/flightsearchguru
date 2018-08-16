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
  route_with_day TEXT NOT NULL,
  to_id VARCHAR(3) NOT NULL,
  departing TIMESTAMP NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  arrivetime TIMESTAMP NOT NULL,
  carriers TEXT NOT NULL,
  stops TEXT NOT NULL
);


