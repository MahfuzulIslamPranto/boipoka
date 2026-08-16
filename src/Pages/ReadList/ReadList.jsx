import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';
import { ChevronDown } from 'lucide-react';

const ReadList = () => {
    const [readList,setReadList] = useState([]);
    const data = useLoaderData();
    useEffect(()=>{
        const getstoreBookData = getStoredBook();
        const convertgetStoreBookData = getstoreBookData.map(id => parseInt(id));
        const readBooks = data.filter(book => convertgetStoreBookData.includes(book.bookId));
        setReadList(readBooks);
    },[]) 
    const handleBypages=(type)=>{
        if (type ==='totalPages'){
            const sortByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortByPages);
        }
    }
    const handleByratings =(type)=>{
        const sortByRating = [...readList].sort((a,b)=>a.rating-b.rating);
        setReadList(sortByRating);
    }
    return (
        <div className='pt-10'>
            <div className="dropdown dropdown-start flex justify-center pb-5">
                <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A]">Sort By <ChevronDown></ChevronDown> </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleBypages('totalPages')}><a>Number of Pages</a></li>
                    <li onClick={()=>handleByratings('rating')}><a>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='font-bold py-5 text-[#23BE0A] text-center'>Numbers of Book I read: {readList.length}</h2>
                    <div className='grid lg:grid-cols-3'>
                        {
                            readList.map(book => <Book singleBook={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wishlist of Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;