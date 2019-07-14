'use strict'

let express = require('express');
let express_graphql = require('express-graphql');
let { buildSchema } = require('graphql');

// GraphQL Schema
let schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
let root = {
    message: () => 'Hello World!'
};

// Create and express server and a GraphQL endpoint
let app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Express graphql server now running on localhost:4000/graphql');
})