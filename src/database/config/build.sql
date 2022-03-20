BEGIN;
DROP TABLE IF EXISTS  users;

CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 user_name varchar(125) NOT NULL,
 email varchar(255) NOT NULL, 
 password varchar(125) NOT NULL
);

INSERT INTO users (user_name , email,password) Values('maram','m@gmail.com','123456');
COMMIT;