# Dream Log APP #

## INTRODUCTION ##

August Kekulé figured out the chemical configuration structure of Benzene. He notably says that he came about this discovery through a dream he had of a snake biting its own tail. August Kekulé, the scientist responsible for this contribution to field of organic chemistry has been proven to be correct today through various spectroscopic techniques.
Everyone has dreams! This application is a digital journal built to keep track of the dreams that you had while sleeping! In the section about Good dreams, bad dreams, or neutral dreams, it is totally up to User discretion to determine whether their dream was good or bad or neutral. An example of a good dream could be you wake up feeling happy and hopeful. An example of a bad dream could be waking up in a state of terror. A neutral dream could be something you dreamed about that happened in the previous day.

# Installation Instructions #

NOTE #1: You must have a GitHub account to clone and install this repository locally. If do not, you can view the project at the following link: [Dream Log App](https://chic-kitsune-7beb31.netlify.app/)

NOTES: name-of-folder is the name that you will be using for the created root directory of the project, where both the backend code and the frontend will be located inside. For example, if you use the name sharukhgv-dream-project-root-folder, then you have to consistantly use that every time instead of name-of-folder.


1. Go to Terminal, and create a new Folder that you want to install the backend and frontend of the application...

2. Change your directroy to this folder, that you have just created. You can do it with the following command (you may press tab for auto-complete after typing in a few of the first letters the folder's name):

```
cd name-of-folder
//name-of-folder is the name of your folder

```

3. in that folder (ie. name-of-folder), paste the following command: 

```
git clone https://github.com/SharukhGV/Dream-Log-App-frontend.git
//this will install all the files necessary for the frontend part of the application, except for the .env file, which instructions will be explained later on.

```

4.  in that same folder (ie. name-of-folder), paste the following command: 

```
git clone https://github.com/SharukhGV/Dream-Log-App-backend.git
//this will install all the files necessary for the backend part of the application, except for the .env file, which instructions will be explained later on.

```

5. Open two separate terminals. If you are using VS Code and you are curently in the root (top-level) folder of the project (ie. name-of-folder), you will be in the root directory of the project (ie. name-of-folder).

6. In one of the terminals, run the following command:

```
cd frontend
// this will change the current directory to the frontend project code that was installed/cloned from the following link: https://github.com/SharukhGV/Dream-Log-App-frontend.git

```

...and in the other terminal, run the following command:

```
cd backend
// this will change the current directory to the backend project code that was installed/cloned from the following link: https://github.com/SharukhGV/Dream-Log-App-backend.git

```

7. In each terminal (both the frontend and the backend directories/folders that you just opened), run the following command:

```
npm install
// this will install all the Node package dependencies for your project.

```

8. Create an .env file for your project by running the following command in each of the terminals (both the frontend and the backend):

```
touch .env

//this is the file that is usually necessary if you are going to push up your code to a remote public repository, so that your important sensitive information such as API keys will not be used in a way that you did not permit. Also, this file is necessary for connecting the frontend and the backend locally.

```

9. In a new terminal (like in step 5.), run the command to get back to the root folder of your project:

```

cd ..

//this command will move you into the previous directory (ie. name-of-folder)... ie. the directory that the current directory is located in (ie. name-of-folder).

```

10. In that same root folder (ie. name-of-folder), run the code:

```

code .

//this will open all your code that you just installed in Microsoft's VS Code programming software. If you haven't installed it yet, go ahead and do it. You may need to also 

```

11. Click on the .env file from the frontend, and paste the following code:

```
REACT_APP_API_URL=http://localhost:7777
```

12. Click on the .env file from the backend on the left "Explorer" panel of VS code, and paste the following code into the .env file:

```
PORT=7777
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=dream_log_database
```

13. Find the two terminals you had previously opened. In the backend terminal, run the following commands:

```
cd backend

```


```
npm run db:init

//this will initialize the schema file, which basically created the database called "dream_log_database" and the resource table called "dreams"

```


```
npm run db:seed

//this will run the seed file, which will populate the table with default values, which you can change later on if you please to do so.

```

14. After this is done, you can start the backend (server) by running the following command in the same terminal that you ran the code in step 13. 

```
nodemon server.js

```


15. Then you can start the frontend part of the project by running the following command in the terminal that is in the directory called "frontend"

```
npm start

```


To view the server side of the project, visit the following link:

backend: [Express App Backend with Routes Defined & PostgreSQL Database](http://localhost:7777/)

To view the client (USER) side of the project, visit the following link:


frontend: [React App](http://localhost:3000/)