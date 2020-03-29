import React from 'react';
import {gql} from 'apollo-boost';
//mport {graphql} from 'graphql';
import {useQuery} from '@apollo/react-hooks';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const BookList = () =>{
    const {data,loading} = useQuery(getBooksQuery);
    console.log(data);
    return (
        <div>
            {loading? <p>Book is loading......</p>: <ul>{data.books.map(book => (<li key={book.id}>{book.name}</li>))}</ul>}
        </div>
    )
}

export default BookList;
