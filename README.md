# Backend Folder Structure  
### Controller 
Contain main logic to the application which handling the request and the response . 
### Database
Contain migration , seeders and models . To run migration and seeders need to config the connection first in ```database\config\config.json``` . Command to run ```npm run migration``` & ```npm run seed``` . 
### Request
Contain validation for request   
### Routes
Contain routes for each category that point to controller 
### Service
Contain service that used by the controller , reusable service .

## How to use ?
1. run ```npm install```
2. set db configuration in ```database\config\config.json```
3. run migration ```npm run migration```
4. run seeders ```npm run seed```
5. start server ```npm run start```



