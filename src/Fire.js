import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDem3StCHI4wHnXTebm-klTHHRChLHlVAY",
  authDomain: "login-page-921a7.firebaseapp.com",
  projectId: "login-page-921a7",
  storageBucket: "login-page-921a7.appspot.com",
  messagingSenderId: "483962654361",
  appId: "1:483962654361:web:d89d17aac017298c8ab208",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
