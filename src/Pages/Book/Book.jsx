import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const { bookName, bookId, author, image, review, category, totalPages, rating, publisher, yearOfPublishing, tags}=singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 h-11/12 shadow-sm p-5 mb-10">
                <figure className='h-5/12 bg-gray-200 p-8 rounded-2xl'>
                    <img className='w-5/12 h-[166px]'
                        src={image} />
                </figure>
                <div className="card-actions gap-20 mt-5 mx-5">
                    {
                        tags.map(tag => <button className='text-[#23BE0A] bg-gray-100 px-3 p-1 rounded-4xl'>{tag}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {bookName}
                    </h2>
                    <p className='font-bold text-gray-500'>By: {author}</p>
                </div>
                <div className='card-body'>
                    <div className='flex justify-between pt-4 border-dashed border-t-1 border-gray-400'>
                        <p className='font-bold text-gray-500 '>{category}</p>
                        <div className='flex justify-center gap-3 items-center'>
                            <p className='font-bold'>{rating}</p>
                            <p><Star size={16} ></Star></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;