const express = require('express');
const connectDB = require('./config/db');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

connectDB();
app.use(express.json());
app.use('/graphql',graphqlHttp({
    schema,
    graphiql:true
}))

const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Server Started'));