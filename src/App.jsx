import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Cart from './components/Header/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleClick = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleMarkAsTime = (id, time) =>{
    setReadingTime(readingTime + time);

    // remove bookmarks from bookmarks list
    // console.log("bookmarks removed", id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      
      <Header/>
      <div className='container mx-auto md:flex gap-8'>
        <Cart handleClick ={handleClick} handleMarkAsTime ={handleMarkAsTime}/>
        <Bookmarks 
          bookmarks = {bookmarks} readingTime ={readingTime}/>
      </div>
      
    </>
  )
}

export default App
