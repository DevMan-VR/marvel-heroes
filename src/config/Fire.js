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
  class Firebase {
    constructor() {
      firebase.initializeApp(config);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }

    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email,password);
    }

    logout() {
      return this.auth.signOut();
    }

    async register(username, email, password){
      await this.auth.createUserWithEmailAndPassword(email, password);
      return this.auth.currentUser.updateProfile({
        displayName: username
      })
    }

    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve);
      })
    }
    getCurrentUsername(){
      return this.auth.currentUser && this.auth.currentUser.displayName;
    }

  }
  export default new Firebase();