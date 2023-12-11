const users = [
    {
        id: Math.random(),
        firstName: 'Jessica',
        lastName: 'Silver',
        age: 21,
        hasIdentificationDocument: true,
        isBanned: false,
    },
    {
        id: Math.random(),
        firstName: 'Tom',
        lastName: 'Wood',
        age: 30,
        hasIdentificationDocument: false,
        isBanned: false,
    },
    {
        id: Math.random(),
        firstName: 'Allen',
        lastName: 'Green',
        age: 26,
        hasIdentificationDocument: true,
        isBanned: true,
    },
    {
        id: Math.random(),
        firstName: 'Joshua',
        lastName: 'Timber',
        age: 19,
        hasIdentificationDocument: true,
        isBanned: false,
    },
];

const goodUsers = users.filter((user) => {
    if (user.age >= 20 && user.hasIdentificationDocument === true && user.isBanned === false) {
        return true;
    }
})
// console.log(goodUsers)



// MAP
const usersHasIdentificationDocument = users.filter((user) => {
    if (user.hasIdentificationDocument) {
        return true;
    }
})

const newUsers = usersHasIdentificationDocument.map((user) => {
    return {
        id: user.id,
        firstName: user.firstName,
    }
})

// console.log(newUsers)

// REDUCE 

const usersAdult = users.filter((user) => {
    if (user.age >= 20) {
        return true;
    }
}) // pilnameciai

const usersGroupAsObject = usersAdult.reduce((groupedUsers, user) => {
    if (user.isBanned) {
        groupedUsers.isBanned.push(user)
    }
    if (user.hasIdentificationDocument) {
        groupedUsers.hasDocument.push(user)
    }

    return groupedUsers;
}, { isBanned: [], hasDocument: [] });

console.log(usersGroupAsObject)