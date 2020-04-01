const express = require('express');
const graphqlHTTP = require('express-graphql');
const connectDb = require('./config/db');
const schema = require('./graphql/schema');


const app = express();
connectDb();
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`Server started on Port ${port}`))