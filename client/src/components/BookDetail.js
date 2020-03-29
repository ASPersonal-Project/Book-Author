import React from 'react';
import {getBookQuery} from '../queries/queries';
import {useQuery} from '@apollo/react-hooks';
import BookList from './BookList';


const BookDetail = ({bookId}) => {
    const {data,loading} = useQuery(getBookQuery,{variables:{id:bookId}});
   console.log(data);
//    if(data.book !== null ){
//        console.log('hiii')
//    }
    // {loading? console.log("ooo"):{if(data.book)}}
    
   const displayBookDetails = () =>{
        const {book} = data;
        if(book){
            return(
                <div>
                    <h3>{book.name}</h3>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this Author</p>
            <ul>
            {book.author.books.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
                </div>
            )
        }else{
            return(
            <div>
                <p>Book details go here</p>
            </div>
            )
        }
    }
    return (
        <div id="book-details">
            {loading? null : displayBookDetails()}
                
        </div>
    )
}

export default BookDetail
