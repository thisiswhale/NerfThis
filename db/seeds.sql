INSERT INTO user (name, password) VALUES ('Kat', '1234');

INSERT INTO user (name, password) VALUES ('Will', '2345');
INSERT INTO user (name, password) VALUES ('Kuku', '3456');
INSERT INTO user (name, password) VALUES ('Eric', '4567');

INSERT INTO maps (type, name) VALUES ('Assault', 'Hanamura');
INSERT INTO maps (type, name) VALUES ('Assault', 'Temple of Anubis');
INSERT INTO maps (type, name) VALUES ('Assault', 'Volskaya Industries');

INSERT INTO maps (type, name) VALUES ('Esscort', 'Dorado');
INSERT INTO maps (type, name) VALUES ('Esscort', 'Route 66');
INSERT INTO maps (type, name) VALUES ('Esscort', 'Watchpoint: Gibraltar');

INSERT INTO maps (type, name) VALUES ('Hybrid', 'Eichenwalde');
INSERT INTO maps (type, name) VALUES ('Hybrid', 'Hollywood');
INSERT INTO maps (type, name) VALUES ("Hybrid", "King's Row");
INSERT INTO maps (type, name) VALUES ('Hybrid', 'Numbani');

INSERT INTO maps (type, name) VALUES ('Control', 'Ilios');
INSERT INTO maps (type, name) VALUES ('Control', 'Lijiang Tower');
INSERT INTO maps (type, name) VALUES ('Control', 'Nepal');
INSERT INTO maps (type, name) VALUES ('Control', 'Oasis');

INSERT INTO heroes (name, portrait) VALUES ('Genji', 'https://blzgdapipro-a.akamaihd.net/hero/genji/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Mcree', 'https://blzgdapipro-a.akamaihd.net/hero/mccree/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Pharah', 'https://blzgdapipro-a.akamaihd.net/hero/pharah/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Reaper', 'https://blzgdapipro-a.akamaihd.net/hero/reaper/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Soldier:76', 'https://blzgdapipro-a.akamaihd.net/hero/soldier-76/icon-portrait.png');

INSERT INTO heroes (name, portrait) VALUES ('Sombra', 'https://blzgdapipro-a.akamaihd.net/hero/sombra/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Tracer', 'https://blzgdapipro-a.akamaihd.net/hero/tracer/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Bastion', 'https://blzgdapipro-a.akamaihd.net/hero/bastion/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Hanzo', 'https://blzgdapipro-a.akamaihd.net/hero/hanzo/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Junkrat', 'https://blzgdapipro-a.akamaihd.net/hero/junkrat/icon-portrait.png');

INSERT INTO heroes (name, portrait) VALUES ('Mei', 'https://blzgdapipro-a.akamaihd.net/hero/mei/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Torbjörn', 'https://blzgdapipro-a.akamaihd.net/hero/torbjorn/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Widowmaker', 'https://blzgdapipro-a.akamaihd.net/hero/widowmaker/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('D.Va', 'https://blzgdapipro-a.akamaihd.net/hero/dva/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Orisa', 'https://blzgdapipro-a.akamaihd.net/hero/orisa/icon-portrait.png');

INSERT INTO heroes (name, portrait) VALUES ('Reinhardt', 'https://blzgdapipro-a.akamaihd.net/hero/reinhardt/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Roadhog', 'https://blzgdapipro-a.akamaihd.net/hero/roadhog/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Winston', 'https://blzgdapipro-a.akamaihd.net/hero/winston/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Zarya', 'https://blzgdapipro-a.akamaihd.net/hero/zarya/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Ana', 'https://blzgdapipro-a.akamaihd.net/hero/ana/icon-portrait.png');

INSERT INTO heroes (name, portrait) VALUES ('Lúcio', 'https://blzgdapipro-a.akamaihd.net/hero/lucio/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Mercy', 'https://blzgdapipro-a.akamaihd.net/hero/mercy/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Symmetra', 'https://blzgdapipro-a.akamaihd.net/hero/symmetra/icon-portrait.png');
INSERT INTO heroes (name, portrait) VALUES ('Zenyatta', 'https://blzgdapipro-a.akamaihd.net/hero/zenyatta/icon-portrait.png');


INSERT INTO rounds (Genji, McCree, Pharah, Reaper, Soldier76, Sombra, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Genji, McCree, Pharah, Reaper, Soldier76, Sombra, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, CREATEDAT, UPDATEDAT) 
	VALUES ( true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds ( Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);

INSERT INTO rounds (DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds ( Roadhog, Winston, Zarya, Ana, Lucio, Mercy, CREATEDAT, UPDATEDAT)
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Genji, Tracer, Mei, Orisa, Zarya, Mercy,  CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds ( McCree, Reaper, Soldier76, Orisa, Lucio, Mercy, CREATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);

INSERT INTO rounds ( Pharah, Reaper, Mei, Torbjorn, Widowmaker, DVa, REATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds ( Genji, Reaper, Soldier76, Torbjorn, Widowmaker, Roadhog, REATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Genji, Bastion, Hanzo, Reinhardt, Mercy, Symmetra, REATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Sombra, Tracer, DVa, Orisa, Lucio, Mercy, REATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
INSERT INTO rounds (Pharah, Junkrat, Torbjorn, Zarya, Ana, Zenyatta, REATEDAT, UPDATEDAT) 
	VALUES (true, true, true, true, true, true, 0, 0);
/* 
/* INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);
 */
/* INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);


INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
false, true); */

/* INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
false, false);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
false, false);


INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true,  
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, true,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, true,
true, true);


INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true,  
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true,
false, false);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true,
false, true); */

/* INSERT INTO round (
/* Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, true,
false, false); */

/* INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, true,
false, true);


INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, false,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false,
false, true); */

/* 

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, 
false, false);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, 
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, false,
false, false);


INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, true, true, true, true, true,  false, false, false, false, false, false, false, false, false, false, false, false, 
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false,
false, false);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false,  false, true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false,
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, 
false, false);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, 
false, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES (false, false, false, false, false, false, false, true, true, true, true, true,  false, false, false, false, false, false, false, false, false, false, false, false, 
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false,
true, false);
 */
/* INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) VALUES ( false, false, false, false, false,  false, true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false,
true, true);

INSERT INTO round (
Genji, McCree, Pharah, Reaper, Soldier76, Sombra, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, DVa, Orisa, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, attack, win) 
VALUES ( false, false, false, false, false, false, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, 
true, false); */

 */
