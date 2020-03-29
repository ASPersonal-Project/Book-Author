import React from 'react';
import BookList from '../src/components/BookList';
import AddBook from '../src/components/AddBook';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

const App = () =>{

  return (
    <ApolloProvider client={client}>
    <div className="Main">
      <h1>Ninja's Reading List</h1>
      <BookList/>
      <AddBook/>
     
    </div>
    </ApolloProvider>
  );
}

export default App;
