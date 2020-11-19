import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjNpfWV8tMY6o3NshOo5G87hTA3EYT6Ck",
  authDomain: "todoapp-b04ba.firebaseapp.com",
  databaseURL: "https://todoapp-b04ba.firebaseio.com",
  projectId: "todoapp-b04ba",
  storageBucket: "todoapp-b04ba.appspot.com",
  messagingSenderId: "324915185846",
  appId: "1:324915185846:web:06faeacc897a5c75bdbe17",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();

export const auth = firebase.auth();
