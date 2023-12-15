CREATE TABLE IF NOT EXISTS  Heroes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    link TEXT NOT NULL,
    image TEXT NOT NULL,
    desc TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS  Cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    link TEXT NOT NULL,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    doors TEXT NOT NULL,
    years TEXT NOT NULL,
    type TEXT NOT NULL,
    vote integer DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS Facts (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    heroId TEXT NOT NULL,
    name TEXT NOT NULL,
    value TEXT NOT NULL,
    FOREIGN KEY("heroId") REFERENCES "Heroes"("id") on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS  HeroCar (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    carId INTEGER NOT NULL,
    heroId INTEGER NOT NULL,
    relation TEXT NOT NULL,
    FOREIGN KEY("carId") REFERENCES "Cars"("id") on update cascade on delete cascade
    FOREIGN KEY("heroId") REFERENCES "Heroes"("id") on update cascade on delete cascade
);