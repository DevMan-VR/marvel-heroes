import firebase from 'firebase';
  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyDq-B9jT-IQSI0gN_jbJDJFw3V-79gqEpg",
    authDomain: "marvel-heroes-b0945.firebaseapp.com",
    databaseURL: "https://marvel-heroes-b0945.firebaseio.com",
    projectId: "marvel-heroes-b0945",
    storageBucket: "",
    messagingSenderId: "959242699410",
    appId: "1:959242699410:web:7dc7d6a624a4496d6edc4b",
    measurementId: "G-LYYT49R934"
  };

  //iniciando firebase
  const fire = firebase.initializeApp(config);
  export default fire;