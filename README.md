# Mortgage-calculator-web-app
Mortgage-Calculator: this is a Web App that can be used to plan out mortgages. It helps in the calculation of monthly EMI to avoid confusion and stress while taking out loans. 

# Installed PostgresSQL
**Set up Database**
- cd "C:\Program Files\PostgreSQL\17\bin" - to navigate to the directory containing postgres
- .\psql -U postgres - to login to Postgres
- chcp 1252 - switch the console's code page to match Windows' default.
- \l - to list databases 
- \q - to exit the psql session
- CREATE DATABASE your_database_name; to creat the database
- \c mortgage_database - switch to the database
- \dt - to list all the tables in your current database
- Add columns to the existing table; ALTER TABLE users
ADD COLUMN username VARCHAR(100) NOT NULL UNIQUE,
ADD COLUMN password VARCHAR(255) NOT NULL;
- INSERT INTO users (username, password) VALUES ('john_doe', 'securepassword123');
- SELECT * FROM users; - to verify the insertion
- DELETE FROM users WHERE username = 'john_doe'; - an example to delete a specific user from the users table in the mortgage_database



