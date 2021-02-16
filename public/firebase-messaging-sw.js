importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyDDBpEbR0YIxL3FWLiXaMzPO-P5vZbbaCM",
    authDomain: "expensetrackerfirebase-8973a.firebaseapp.com",
    projectId: "expensetrackerfirebase-8973a",
    storageBucket: "expensetrackerfirebase-8973a.appspot.com",
    messagingSenderId: "988657194015",
    appId: "1:988657194015:web:062dd8195f405d300c312a"
};

firebase.initializeApp( firebaseConfig );

firebase.messaging();

//
let cacheData="appv1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((data)=>{
            data.addAll([
                "index.html",
                "App.js",
                "App.css", "index.css", "Reducer.js",     "swReg.js",
                "firebase_service.js",  "index.js",   "Main.js","TransactionContext.js",
                "E-192x192.jpg",  "E-favico.jpg",  "firebase-messaging-sw.js",  "Letter_Giant_Enough_E_231835_LL.jpeg",   "robots.txt"
                ,"E-512x512.jpg" , "manifest.json",  "sw.js"
            ])
        })
    )
})