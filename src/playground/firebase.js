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

// Adding expenses to firebase database
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 2
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: 3
}]




//child_removed event 
database.ref('expenses')
    .on(
        'child_removed',
        (snapshot) => {
            console.log(snapshot.key, snapshot.val(), 'was removed')
        }
    )

//child_changed
database.ref('expenses')
    .on(
        'child_changed',
        (snapshot) => {
            console.log(snapshot.val(), 'in', snapshot.key, 'was changed')
        }
    )

    // child_added
    database.ref('expenses')
    .on(
        'child_added',
        (snapshot) => {
            console.log(snapshot.val(), snapshot.key)
        }
    )


/*
database.ref('expenses')
.on(
    'value',
    (snapshot) => {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                idFB: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses)
    },
    (e) => console.log('Error fetching', e)
)
*/

// Add expenses to database
database.ref('expenses').push(expenses[0])
database.ref('expenses').push(expenses[1])
database.ref('expenses').push(expenses[2])

// Firebase CRUD Operations = Create, Read, Update, Delete
// const onValueChange = database
//     .ref()
//     .on(
//         'value',
//         (snapshot) => {
//             const response = snapshot.val()
//             console.log(`${response.name} is a ${response.job.title} at ${response.job.company}.`)
//         },
//         (e) => console.log('Error fetching data', e)
//     )


// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 6000)


// Fetch data from firebase once without rerunning
/*
database.ref()
    .once('value')
    .then((dataSnapshot) => {
        console.log(dataSnapshot.val())
    })
    .catch((e) => {
        console.log('Error occured', e)
    })
*/

// database.ref().set({
//     name: 'Grigoriu Stefan',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Iasi',
//         country: 'Romania'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => console.log('This failed', e))

// Remove data
/*
database.ref()
    .remove()
    .then(() => console.log('Remove succesful'))
    .catch((e) => console.log('Remove not succesful', e))

database.ref('isSingle').set(null)
*/

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Vaslui'
// })