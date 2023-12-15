CREATE TABLE Cars (
	id int NOT NULL,
	link VARCHAR NOT NULL,	-- type mapped from: string
	name VARCHAR NOT NULL,	-- type mapped from: string
	image VARCHAR NOT NULL,	-- type mapped from: string
	doors VARCHAR NOT NULL,	-- type mapped from: string
	years VARCHAR NOT NULL,	-- type mapped from: string
	type VARCHAR NOT NULL,	-- type mapped from: string
	vote BIGINT NOT NULL,	-- type mapped from: integer
	PRIMARY KEY (id)
);
CREATE TABLE HeroCar (
	id int NOT NULL,
	carId int NOT NULL,
	heroId int NOT NULL,
	relation VARCHAR NOT NULL,	-- type mapped from: string
	PRIMARY KEY (id)
);
CREATE TABLE Heroes (
	id int NOT NULL,
	name VARCHAR NOT NULL,	-- type mapped from: string
	link VARCHAR NOT NULL,	-- type mapped from: string
	image VARCHAR NOT NULL,	-- type mapped from: string
	desc VARCHAR NOT NULL,	-- type mapped from: string
	PRIMARY KEY (id)
);
CREATE TABLE Facts (
	id int NOT NULL,
	heroId VARCHAR NOT NULL,	-- type mapped from: string
	name VARCHAR NOT NULL,	-- type mapped from: string
	value VARCHAR NOT NULL,	-- type mapped from: string
	PRIMARY KEY (id)
);
CREATE TABLE Hero_Fact (
	id int NOT NULL,
	id2 int NOT NULL,	-- renamed from: id
	PRIMARY KEY (id, id2),
	FOREIGN KEY (id) REFERENCES Heroes (id) ON DELETE CASCADE,
	FOREIGN KEY (id2) REFERENCES Facts (id) ON DELETE CASCADE
);
CREATE TABLE Car_Hero (
	id int NOT NULL,
	id2 int NOT NULL,	-- renamed from: id
	PRIMARY KEY (id, id2),
	FOREIGN KEY (id) REFERENCES Cars (id) ON DELETE CASCADE,
	FOREIGN KEY (id2) REFERENCES HeroCar (id) ON DELETE CASCADE
);
CREATE TABLE Hero_Car (
	id int NOT NULL,
	id2 int NOT NULL,	-- renamed from: id
	PRIMARY KEY (id, id2),
	FOREIGN KEY (id) REFERENCES Heroes (id) ON DELETE CASCADE,
	FOREIGN KEY (id2) REFERENCES HeroCar (id) ON DELETE CASCADE
);
