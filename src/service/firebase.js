import firebase from'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const firebaseDatabase=firebaseApp.database();
export default firebaseDatabase;