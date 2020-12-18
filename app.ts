const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DBCOnnection = require('./src/config/connection');
const { ApolloServer } = require('apollo-server-express');
const { schema } = require('./src/graphqlSchema');
const utils = require('./src/util/getCurrentDB');
const axios = require("axios")

const server = new ApolloServer({
  debug: process.env.NODE_ENV === "development",
  schema,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light',
    }
  },
  // context: async ({ req }) => {
  //   const context = {db: ""};
  //   const db = await utils.getDbFromHostName('localhost');
  //   context.db = db;
  //   return context;
  // }
});
server.applyMiddleware({ app });
app.listen(process.env.PORT, async () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
