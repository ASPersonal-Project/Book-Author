const express = require('express');
const graphqlHTTP = require('express-graphql'); 
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors())
connectDB();

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql: true 
}))

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`Server started in port ${port}`));