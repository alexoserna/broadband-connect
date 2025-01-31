require("dotenv").config({ path: "../../.env" });
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

const corsOptions = {
  origin: [process.env.CLIENT_URL || "http://localhost:5173", 'https://studio.apollographql.com'],
  credentials: true,
};

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, cors: corsOptions });

  // Serve static files from the Vite `dist` folder
  app.use(express.static(path.resolve(__dirname, "../client/dist")));

  // Fallback route for Single Page Application (SPA)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });

  db.once("open", () => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();
