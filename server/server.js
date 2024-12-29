import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [
    { id: "1", name: "Roo Canuku", age: 3, hatesOlives: true },
    { id: "2", name: "Lola", age: 25, hatesOlives: false },
    { id: "3", name: "Babyface Alice Johnson", age: 28, hatesOlives: false },
];

const typeDefs = `
    type Query {
      getUsers: [User]
      getUserById(id: ID!): User
    }

    type Mutation {
      createUser(name: String!, age: Int!, hatesOlives: Boolean!): User
    }

    type User {
      id: ID
      name: String
      age: Int
      hatesOlives: Boolean
    }
`;

const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        },
        getUserById: (parent, args) => {
            const id = args.id;
            return users.find((user) => user.id === id);
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const { name, age, hatesOlives } = args;
            const newUser = {
                id: (users.length + 1).toString(),
                name,
                age,
                hatesOlives,
            };
            console.log(newUser);
            users.push(newUser);
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server Running at: ${url}`);
