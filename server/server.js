// Import the ApolloServer class
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

// const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware,
});


const app = express();

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
            console.log(`🌍 Now listening on localhost:${PORT}`);
            console.log(`🚀 GraphQL available at http://localhost:${PORT}${server.graphqlPath}`);

        })
    })
};

startApolloServer(typeDefs, resolvers);