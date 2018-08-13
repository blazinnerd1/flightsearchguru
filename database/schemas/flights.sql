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
  created_at TIMESTAMP NOT NULL

  -- suggested additional columns
  -- depart_time TIME NOT NULL
  -- arriving DATE NOT NULL
  -- arrive_time TIME NOT NULL
  -- flightDuration INTEGER NOT NULL
  -- distance INTEGER NOT NULL
);


