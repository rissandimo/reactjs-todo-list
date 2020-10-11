import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJ3rxeOhJ7LE-5U-WIqmcEe8pmpdqyj6o",
    authDomain: "todo-list-83638.firebaseapp.com",
    databaseURL: "https://todo-list-83638.firebaseio.com",
    projectId: "todo-list-83638",
    storageBucket: "todo-list-83638.appspot.com",
    messagingSenderId: "1074441480038",
    appId: "1:1074441480038:web:817963c28bd9f7beb84aa7",
    measurementId: "G-9VK4WD3LRW"
});

const db = firebaseApp.firestore();

export default db;

