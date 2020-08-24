require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const app = express();
const PORT = process.env.PORT || 3000;
const resolvers = require('./lib/resolvers');
const { readFileSync } = require('fs');
const { join } = require('path');
const db = require('./lib/db');
db();

const typeDefs = readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8');
const schema = makeExecutableSchema({ typeDefs, resolvers})

app.use('/api', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));






app.listen(PORT, () => console.log(`Listening server at http://localhost:${PORT}/api`))