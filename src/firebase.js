import firebase from "firebase/app";
import "firebase/database";

// const ENV = process.env;

let config = {
  apiKey: "AIzaSyANUoDR6P4bDV18Bx2BZ81J-_r3Zh_NF5E",
  authDomain: "ol5-16-firebase.firebaseapp.com",
  projectId: "ol5-16-firebase",
  storageBucket: "ol5-16-firebase.appspot.com",
  messagingSenderId: "797289347829",
  appId: "1:797289347829:web:72e621b3fd187fef66a3bc",
  // apiKey: ENV.API_KEY,
  // authDomain: ENV.AUTH_DOMAIN,
  // projectId: ENV.PROJECT_ID,
  // storageBucket: ENV.STORAGE_BUCKET,
  // messagingSenderId: ENV.MESSAGING_SENDER_ID,
  // appId: ENV.APP_ID,
  // databaseURL: ENV.DATABASE_URL,
  databaseURL:
    "https://ol5-16-firebase-default-rtdb.europe-west1.firebasedatabase.app/",
};

firebase.initializeApp(config);

export default firebase.database();
