import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCm_rr6oWMQApNjNzSHdi-EaI297eEDbAc",
  authDomain: "react-quiz-app-9a311.firebaseapp.com",
  databaseURL: "https://react-quiz-app-9a311-default-rtdb.firebaseio.com",
  projectId: "react-quiz-app-9a311",
  storageBucket: "react-quiz-app-9a311.appspot.com",
  messagingSenderId: "10813175386",
  appId: "1:10813175386:web:b1ce0b77380c952e1b0a63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase