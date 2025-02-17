npm init
npm install --save-dev sequelize-cli
npm install --save sequelize
npx sequelize-cli init
npm install body-parser
npm install mysql2
npm install date-and-time


1. npx sequelize-cli model:generate --name users --attributes user_id:string,name:string,email:string,password:string,otp:integer,profile_image:string,refresh_token:text,device_id:string,fcm_token:string,is_email_verified:tinyint,is_deleted:tinyint,status:tinyint

2. npx sequelize-cli model:generate --name bookings --attributes id:bigint,user_id:string,name:string,email:string,room_number:integer,from:date,to:date,booked_status:string,description:string,is_deleted:tinyint,status:tinyint

3. npx sequelize-cli model:generate --name rooms --attributes id:bigint,room_id:integer,name:string,description:string,is_deleted:tinyint,status:tinyint

npx sequelize-cli db:migrate

Create seed
npx sequelize-cli seed:generate --name rooms
npx sequelize-cli seed:generate --name users



Create some seed data in separate folder and files. Instead of hardcoded json, add a dynamic array in seeders

Run seed
npx sequelize-cli db:seed:all


---------------------------------------------------------------------------------------------------------------
API Integration without ejs

Create server.js

npm install express
npm install nodemon

Add one script in package.json
"start": "nodemon server.js"

-------------------------------------------------------------------------------------------
Getting Started
Connecting to a database

create one database folder and one database file





----------------------------------------------------------------------