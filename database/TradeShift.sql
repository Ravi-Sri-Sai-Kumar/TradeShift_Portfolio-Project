create database tradeshift_db;
use tradeshift_db;

SHOW DATABASES;

SELECT user, host FROM mysql.user;

GRANT ALL PRIVILEGES ON tradeshift_db.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'springuser'@'localhost' IDENTIFIED BY 'springpass';
GRANT ALL PRIVILEGES ON tradeshift_db.* TO 'springuser'@'localhost';
FLUSH PRIVILEGES;


SHOW TABLES;
select *from users;
select *from portfolios;
select *from assets;
DELETE FROM users WHERE username='newuser';
DELETE FROM users WHERE username='testuser';
SELECT * FROM users WHERE username='ANGATI RAVI SRI SAI KUMAR';

DELETE FROM assets WHERE portfolio_id IN (
  SELECT id FROM portfolios WHERE user_id IN (
    SELECT id FROM users WHERE username='ANGATI RAVI SRI SAI KUMAR'
  )
);

DELETE FROM portfolios WHERE user_id IN (
  SELECT id FROM users WHERE username='ANGATI RAVI SRI SAI KUMAR'
);

DELETE FROM users WHERE username='ANGATI RAVI SRI SAI KUMAR';

SELECT * FROM users WHERE username='ANGATI RAVI SRI SAI KUMAR';

select *from portfolios;
SELECT * FROM assets WHERE portfolio_id = 7 AND symbol = 'AAPL';
SELECT * FROM users WHERE username = 'saikumar@gmail.com';
DELETE FROM users WHERE username='kumar';
DELETE FROM users WHERE username='maheshbabu';
DELETE FROM users WHERE username='kumar';
ALTER TABLE users ADD CONSTRAINT unique_username UNIQUE (username);



SELECT * FROM users;
SELECT * FROM portfolios;
SELECT * FROM assets;
SELECT * FROM orders;

