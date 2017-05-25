CREATE DATABASE Overwatch;
USE Overwatch;

CREATE TABLE user(
	id AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	password VARCHAR(10) NOT NULL
);

CREATE TABLE round(
	id AUTO_INCREMENT NOT NULL,
	user FOREIGN KEY (user_name),
	map_type FOREIGN KEY (maps_type),
	map_name FOREIGN KEY (maps_name),
	teammate1 FOREIGN KEY (heroes_name),
	teammate2 FOREIGN KEY (heroes_name),
	teammate3 FOREIGN KEY (heroes_name),
	teammate4 FOREIGN KEY (heroes_name),
	teammate5 FOREIGN KEY (heroes_name),
	user_hero FOREIGN KEY(heroes_name),
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
	PRIMARY KEY(id)
);
