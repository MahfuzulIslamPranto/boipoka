import React from 'react';
import bookImage from '../../assets/61o1b77CQmL._AC_UF894_1000_QL80_-removebg-preview.png'

const Banner = () => {
    return (
        <div className='lg:flex max-w-6xl mx-auto p-20 rounded-2xl m-10 justify-between items-center bg-gray-200'>
            <div>
                <h1 className='lg:text-6xl text-3xl'>Books to freshen up</h1>
                <h1 className='lg:text-6xl text-3xl'>your bookshelf</h1>
                <a className="btn bg-[#23BE0A] text-white lg:mt-10 mt-5 lg:text-xl lg:p-8 lg:rounded-xl rounded">View The List</a>
            </div>
            <div className='mt-10'>
                <img className='lg:w-80 w-60' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;