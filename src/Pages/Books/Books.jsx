import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks,setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch('Books.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setAllBooks(data); 
    //     })
    // },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-6xl'>
                {
                    data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;