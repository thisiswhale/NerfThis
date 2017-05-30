CREATE DATABASE Overwatch;
USE Overwatch;

CREATE TABLE user(
	id AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(10) NOT NULL
	PRIMARY KEY (id)
);

CREATE TABLE round(
	id AUTO_INCREMENT NOT NULL,
	
	-- map_type FOREIGN KEY (maps_type),
	-- map_name FOREIGN KEY (maps_name),
	maps_id INT,
	INDEX usr_ind (maps_id),
	FOREIGN KEY (maps_id),
	REFERENCES maps(id) ON DELETE CASCADE,

	user_id INT,
	INDEX mps_ind (user_id),
	FOREIGN KEY (user_id),
	REFERENCES user(id) ON DELETE CASCADE,

	Genji BOOLEAN DEFAULT false,
	McCree BOOLEAN DEFAULT false,
	Pharah BOOLEAN DEFAULT false,
	Reaper BOOLEAN DEFAULT false,
	Soldier76 BOOLEAN DEFAULT false,
	Sombra BOOLEAN DEFAULT false,
	Tracer BOOLEAN DEFAULT false,
	Bastion BOOLEAN DEFAULT false,
	Hanzo BOOLEAN DEFAULT false,
	Junkrat BOOLEAN DEFAULT false,
	Mei BOOLEAN DEFAULT false,
	Torbjorn BOOLEAN DEFAULT false,
	Widowmaker BOOLEAN DEFAULT false,
	DVa BOOLEAN DEFAULT false,
	Orisa BOOLEAN DEFAULT false,
	Reinhardt BOOLEAN DEFAULT false,
	Roadhog BOOLEAN DEFAULT false,
	Winston BOOLEAN DEFAULT false,
	Zarya BOOLEAN DEFAULT false,
	Ana BOOLEAN DEFAULT false,
	Lucio BOOLEAN DEFAULT false,
	Mercy BOOLEAN DEFAULT false,
	Symmetra BOOLEAN DEFAULT false,
	Zenyatta BOOLEAN DEFAULT false,

	heroes_id INT,
	INDEX hrs_ind (heroes_id),
	FOREIGN KEY (heroes_id),
	REFERENCES heroes(id) ON DELETE CASCADE,

	attack BOOLEAN DEFAULT true,
	win BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);

CREATE TABLE maps(
	id AUTO_INCREMENT NOT NULL,
	type VARCHAR(50) NOT NULL,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY(id)
 );


CREATE TABLE heroes(
	id AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	portrait VARCHAR(150) NOT NULL,
	PRIMARY KEY(id)
);

SELECT * FROM rounds LEFT JOIN user on rounds.user_id= user.id;
SELECT * FROM rounds LEFT JOIN maps on rounds.maps_id= maps.id;
