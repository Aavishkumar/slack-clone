# Live Website url : 

https://slack-clone-5ee51.web.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

- Clone the project and then start the project.

  ```
  git clone https://github.com/Aavishkumar/slack-clone
  cd slack-clone
  npm i
  npm start
  ```

- Go to [firebase console](console.firebase.google.com) and create your firebase project and then choose a "Web" app to create which will give you `firebaseConfig` something like this.

  ```
  const firebaseConfig = {
    apiKey: 'your-key',
    authDomain: 'your-domain',
    databaseURL: 'your-db',
    projectId: 'your-project',
    storageBucket: 'your-storage',
    messagingSenderId: 'your-messaging-id',
    appId: 'your-app-id',
  };


  firebase.initializeApp(firebaseConfig);
  ```

  Add your firebase config to `src/firebase.js`. NOTE: Dont use the current `firebaseConfig` as it wont work as I have invoked permissions for anonymous users.

## Project Structure

```
src
├── App.css
├── App.js
├── Chat.css
├── Chat.js
├── ChatInput.css
├── ChatInput1.js
├── firebase.js
├── Header.css
├── Header.js
├── Index.css
├── Index.js
├── ...
├── ..
├── .
 and so on.
```

## Hosting the project on Firbase

- For first time users, you have to donwload the `firebase-cli`.

  ```
    npm run build
    npm i -g firebase-tools
    firebase login
    firebase deploy
  ```

- For second time users (who have already done the above steps).

  ```
    npm run build
    firebase deploy
  ```

You can read more about firebase click [here](https://firebase.google.com/docs/cli).

## Available Scripts

In the project directory, you can run (in terminal):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.





