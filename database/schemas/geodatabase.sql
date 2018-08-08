-- ---
-- Globals
-- ---

-- ---
-- Table 'regions'
-- ---

DROP TABLE IF EXISTS `regions`;

CREATE TABLE `regions` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `updated_at` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'cities'
-- ---

DROP TABLE IF EXISTS `cities`;
		
CREATE TABLE `cities` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `id_countries` VARCHAR(3) NOT NULL,
  `updated_at` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `cities` ADD FOREIGN KEY (id_countries) REFERENCES `countries` (`id`);

-- ---
-- Table 'airports'
-- ---

DROP TABLE IF EXISTS `airports`;
		
CREATE TABLE `airports` (
  `id` VARCHAR(3) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `id_cities` INTEGER NOT NULL,
  `updated_at` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);
ALTER TABLE `airports` ADD FOREIGN KEY (id_cities) REFERENCES `cities` (`id`);

-- ---
-- Table 'countries'
-- ---

DROP TABLE IF EXISTS `countries`;
		
CREATE TABLE `countries` (
  `id` VARCHAR(3) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `id_regions` INTEGER NOT NULL,
  `updated_at` DATE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
);
ALTER TABLE `countries` ADD FOREIGN KEY (id_regions) REFERENCES `regions` (`id`);