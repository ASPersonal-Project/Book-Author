import React, { useState } from 'react';
import {getBooksQuery} from '../queries/queries';
import {useQuery} from '@apollo/react-hooks';
import BookDetail from '../components/BookDetail';



const BookList = () =>{
    const [state,setState] =useState({select:null})
    const {data,loading} = useQuery(getBooksQuery);
    //console.log(data);
    //console.log(state)
    return (
        <div>
            {loading? <p>Book is loading......</p>: <ul>{data.books.map(book => (<li key={book.id} onClick={(e) => setState({select:book.id})}>{book.name}</li>))}</ul>}
            <BookDetail bookId={state.select}/>
        </div>
    )
}

export default BookList;
