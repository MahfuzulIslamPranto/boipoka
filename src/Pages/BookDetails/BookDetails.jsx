import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { storeInDB } from '../../utilities/addToDB';


const BookDetails = () => {
    const {bookId} = useParams();
    const bkId = parseInt(bookId);
    const data = useLoaderData();
    console.log('ami id',bookId,data);
    
    const singleBook = data.find(singleB => singleB.bookId === bkId);

    const { bookName,author, image, review, category, totalPages, rating, publisher, yearOfPublishing, tags } = singleBook;
    console.log(singleBook);
    const handleReadList = (bkId)=>{
        storeInDB(bkId);
        
    }
    return (
        <div className='flex max-w-6xl mx-auto m-10 gap-20 p-10'>
            <img className='w-5/12' src={image} alt="" />
            <div>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <p className='text-xl py-2'>By: {author}</p>
                <p className='text-xl border-t-1 border-b-1 py-2 border-gray-200'>{category}</p>
                <p className='py-2'><span className='font-bold'>Review: </span><span className='text-gray-500'>{review}</span></p>
                <div className='py-6 border-b-1 border-gray-200'>
                    <span className='font-bold'>Tag: </span>
                    {
                        tags.map(tag => <button className='mx-4 text-[#23BE0A] bg-gray-100 px-2 py-1 rounded-2xl'>#{tag}</button>)
                    }
                </div>
                <p className='py-2 '><span className='text-gray-500'>Number of Pages: </span><span className='font-bold'>{totalPages}</span></p>
                <p className='py-2'><span className='text-gray-500'>Publisher: </span><span className='font-bold'>{publisher}</span></p>
                <p className='py-2'><span className='text-gray-500'>Year of Publishing: </span><span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='py-2'><span className='text-gray-500'>Rating: </span> <span className='font-bold'>{rating}</span></p>
                <div className='py-2 flex gap-3'>
                    <button onClick={() => handleReadList(bkId)} className='border-1 border-gray-400 px-4 py-2 rounded font-bold'>Read</button>
                    <button className='border-1 border-[#59C6D2] bg-[#59C6D2] px-4 text-white py-2 rounded'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;