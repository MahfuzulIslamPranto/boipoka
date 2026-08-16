const getStoredBook = () =>{
    const data = localStorage.getItem('readList');
    if(data){
        const getBook = JSON.parse(data);
        return getBook;
    }
    else{
        return [];
    }
}
const storeInDB = (bkId)=>{
    const dataa = getStoredBook();
    if (dataa.includes(bkId)){
        alert('Book present in the Reading List');
    }
    else{
        dataa.push(bkId);
        const dt = JSON.stringify(dataa);
        localStorage.setItem("readList",dt);
        alert("Book added to My Read List successfully!");
    }
}
export { storeInDB, getStoredBook }