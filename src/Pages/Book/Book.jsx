import { Star } from 'lucide-react';
import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, author, image, review, category, totalPages, rating, publisher, yearOfPublishing, tags}=singleBook;
    return (
        <div className="card bg-base-100 w-96 h-11/12 shadow-sm p-5 mb-10">
            <figure className='h-5/12 bg-gray-200 p-8 rounded-2xl'>
                <img className='w-5/12 h-11/12'
                    src={image} />
            </figure>
            <div className="card-actions mt-5 mx-auto gap-20">
                <div className="badge badge-outline border-0 text-[#23BE0A]">{tags[0]}</div>
                <div className="badge badge-outline border-0 text-[#23BE0A]">{tags[1]}</div>
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
    );
};

export default Book;