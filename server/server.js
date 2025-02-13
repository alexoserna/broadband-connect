const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app});

  db.once("open", () => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
