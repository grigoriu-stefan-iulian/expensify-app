import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(config);

const database = firebase.database()


export { firebase, database as default }
// //child_removed event 
// database.ref('expenses')
//     .on(
//         'child_removed',
//         (snapshot) => {
//             console.log(snapshot.key, snapshot.val(), 'was removed')
//         }
//     )

// //child_changed
// database.ref('expenses')
//     .on(
//         'child_changed',
//         (snapshot) => {
//             console.log(snapshot.val(), 'in', snapshot.key, 'was changed')
//         }
//     )

// // child_added
// database.ref('expenses')
//     .on(
//         'child_added',
//         (snapshot) => {
//             console.log(snapshot.val(), snapshot.key)
//         }
//     )

// database.ref('expenses')
//     .on(
//         'value',
//         (snapshot) => {
//             const expenses = []
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     idFB: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })
//             console.log(expenses)
//         },
//         (e) => console.log('Error fetching', e)
//     )

