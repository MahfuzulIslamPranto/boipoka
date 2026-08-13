import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks,setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('/Books.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <h1>This is from Book</h1>
        </div>
    );
};

export default Books;