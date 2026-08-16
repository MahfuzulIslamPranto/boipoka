import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList,setReadList] = useState([]);
    const data = useLoaderData();
    useEffect(()=>{
        const getstoreBookData = getStoredBook();
        const convertgetStoreBookData = getstoreBookData.map(id => parseInt(id));
        const readBooks = data.filter(book => convertgetStoreBookData.includes(book.bookId));
        setReadList(readBooks);
    },[]) 
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read: {readList.length}</h2>
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