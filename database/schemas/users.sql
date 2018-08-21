-- ---
-- Globals
-- ---


DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id VARCHAR(255),
  email TEXT NOT NULL,
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions (
  session_id VARCHAR(255),
  user_id VARCHAR(255) REFERENCES users (id),
  active BOOLEAN NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (session_id)
);

-- ---
-- 
-- ---

DROP TABLE IF EXISTS pricewatch;
		
CREATE TABLE pricewatch (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(255),
  title TEXT NOT NULL,
  searchstring TEXT NOT NULL,
  completed BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);

ALTER TABLE pricewatch AUTO_INCREMENT = 0;


DROP TABLE IF EXISTS searchhistory;
		
CREATE TABLE searchhistory (
  id INTEGER NOT NULL AUTO_INCREMENT,
  searchstring TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  user_id TEXT,
  session_id TEXT,
  PRIMARY KEY (id)
);

ALTER TABLE searchhistory AUTO_INCREMENT = 0;