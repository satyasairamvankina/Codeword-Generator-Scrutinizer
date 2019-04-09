# Project Charter Template

[Template for a Project Charter](https://profcase.github.io/project-charter-template) document used to formalize project understanding.

[Markdown](https://daringfireball.net/projects/markdown/syntax) makes it easy to track associated history and contributions.

[GitHub Pages](https://pages.github.com/) makes it easy to publish for client review.


How to run our Project?
1. git clone https://github.com/satyasairamvankina/CodeWords

Now open our project in Visual Studio and 

2. Use npm install if node.js is already installed.if node.js is not installed go to this link(https://nodejs.org/en/) and install node.js and hit the command

3. Intall angular by using the command npm install -g @angular/cli
4.Entire code has to be done in source file so we need to install all the dependencies (package.JSON). After step 3 set path to client (cd views/app/src) and use npm install command to install all the dependency modules in the project which is used to create package.json.

4.Once package.JSON is created app is ready to run. In src file usie ng serve --open to run the application.

5. Now app is opened as a localhost in your default browser in 4200 port
6. Now Angular is installed but in backend we need to connect to database so we go to project and use npm start this will connect you to database run all the migrations As we are using MangoDB we donot need to create any tables but we need to create a new Cluster and get the link and use that link in you project in config.js and in Dbconnection/connect-mongodb.js.this link contains your cluster password and userId..
7. Once this is done use npm start which will connect you to DB then you can create a user and login. 
