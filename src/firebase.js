import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBpbwvDgk8Vs9VlTfsbTcYb4lzvvkLTgmE",
  authDomain: "react-native-todo-a2ad4.firebaseapp.com",
  databaseURL: "https://react-native-todo-a2ad4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-todo-a2ad4",
  storageBucket: "react-native-todo-a2ad4.appspot.com",
  messagingSenderId: "996280294884",
  appId: "1:996280294884:web:7d8899202893dd2d047bf1",
  measurementId: "G-7WWVH3H7XF"
};

firebase.initializeApp(config);

export default firebase.database();
