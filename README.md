simple noteapp for school using MySQL database.

sample database file is included in repo for download, just import to get some data to work with.

users to login with:
- username: testUser password: testUserPassword
- username: notesadmin password: notespassword

USAGE:
clone repo, in each folder (backend/frontend) run command "npm i" in terminal.
import database and start upp a MySql database for server to connect to (localhost port 8889)
- now first start your database
- now in backend folder type "node ./bin/www start" to run server on localhost 3000.
- and finaly, in frontend folder type "npm start" to run frontend page (you might be prompted to change to different port, in that case press "y" to accept).

NPM packages used:
-cors
-express
-nanoid
