CREATE TABLE IF NOT EXISTS users (
    id TEXT,
    full_name VARCHAR (50),
    email TEXT,
    password VARCHAR (25),
    nick_name VARCHAR (15)
);


ALTER TABLE users ADD id TEXT; -- to add a new id