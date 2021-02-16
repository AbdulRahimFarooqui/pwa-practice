import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDDBpEbR0YIxL3FWLiXaMzPO-P5vZbbaCM",
  authDomain: "expensetrackerfirebase-8973a.firebaseapp.com",
  projectId: "expensetrackerfirebase-8973a",
  storageBucket: "expensetrackerfirebase-8973a.appspot.com",
  messagingSenderId: "988657194015",
  appId: "1:988657194015:web:062dd8195f405d300c312a"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()

export function configureNotification() {
  Notification.requestPermission().then((permission) => {
    console.log('permission', permission);
    if (permission === "granted") {
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          console.log('TOKEN:', currentToken)
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }
  })
}
