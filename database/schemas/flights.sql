-- ---
-- Globals
-- ---

-- ---
-- Table 'regions'
-- ---
DROP TABLE IF EXISTS `oneway`;

CREATE TABLE `oneway` (
  `id` INTEGER AUTO_INCREMENT NULL,
  `name` VARCHAR(255) NOT NULL,
  `updated_at` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE oneway AUTO_INCREMENT=1;

