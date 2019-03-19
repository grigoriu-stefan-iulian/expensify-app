import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAgWIvayhhTaqY17y2bWoNMfW6gxNRvC6c",
    authDomain: "grigoriu-stefan-expensify-app.firebaseapp.com",
    databaseURL: "https://grigoriu-stefan-expensify-app.firebaseio.com",
    projectId: "grigoriu-stefan-expensify-app",
    storageBucket: "grigoriu-stefan-expensify-app.appspot.com",
    messagingSenderId: "160068128771"
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

