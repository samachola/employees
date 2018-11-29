// initialize Cloud firestore through firebase.

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const employeesRef = db.collection('employees');

employeesRef.get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
        console.log(`${doc.id}`);
    });
});

// employeesRef.doc('R.Dikles').set({
//     fName: 'Ranice',
//     lName: 'Dikles',
//     email: 'rdikles@example.com',
//     age: 40,
//     gender: 'Female',
//     yearsOfExperience: 7,
//     isFullName: true
// });

// employeesRef.doc('D.Quan').set({
//     fName: 'Duu',
//     lName: 'Quan',
//     email: 'quan@example.com',
//     age: 23,
//     gender: 'Male',
//     yearsOfExperience: 1,
//     isFullName: true
// });

// employeesRef.doc('W.Bishop').set({
//     fName: 'Winston',
//     lName: 'Bishop',
//     email: 'winnythebish@example.com',
//     age: 32,
//     gender: 'Male',
//     yearsOfExperience: 8,
//     isFullName: true
// });

// employeesRef.doc('J.Day').set({
//     fName: 'Jessica',
//     lName: 'Day',
//     email: 'missday@example.com',
//     age: 34,
//     gender: 'Female',
//     yearsOfExperience: 10,
//     isFullName: true
// });

// employeesRef.doc('P.Cece').set({
//     fName: 'Cece',
//     lName: 'Parikh',
//     email: 'cece@example.com',
//     age: 27,
//     gender: 'Female',
//     yearsOfExperience: 11,
//     isFullName: true
// });