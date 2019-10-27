CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	email TEXT,
	password TEXT
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	giver_id INTEGER,
	posted_by TEXT,
	receiver_id INTEGER,
	requested_by TEXT,
	pending_request BOOLEAN,
	settled_request BOOLEAN,
	title TEXT,
	img TEXT,
	ingredients TEXT,
	area TEXT,
	address TEXT,
	content TEXT,
	expiry_date DATE,
	time_posted DATE

);