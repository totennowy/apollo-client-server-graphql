const UserList = [
    {
        id: 1,
        name: "John",
        username: "Wick",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "Tech",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: "Family",
                age: 5,
                nationality: "CHILE",
            },
        ],
    },
    {
        id: 2,
        name: "Pedro",
        username: "Tech",
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "Tech",
                age: 20,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 4,
        name: "Rafe",
        username: "Path",
        age: 60,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "Kelly",
        username: "Family",
        age: 5,
        nationality: "CHILE",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "FakeMovie",
        yearOfPublication: 2037,
        isInTheaters: false,
    },
];

module.exports = {UserList, MovieList};
