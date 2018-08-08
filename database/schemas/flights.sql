-- ---
-- Globals
-- ---

-- ---
-- Table 'regions'
-- ---
DROP TABLE IF EXISTS `oneway`;

CREATE TABLE `oneway` (
  `id` INTEGER AUTO_INCREMENT NULL,
  `from` VARCHAR(3) NOT NULL,
  `to` VARCHAR(3) NOT NULL,
  `departing` DATE NOT NULL,
  `price` INTEGER NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE oneway AUTO_INCREMENT=1;

