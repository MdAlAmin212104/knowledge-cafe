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

  const handleMarkAsTime = (time) =>{
    setReadingTime(readingTime + time);
  }

  return (
    <>
      
      <Header/>
      <div className='container mx-auto md:flex'>
        <Cart handleClick ={handleClick} handleMarkAsTime ={handleMarkAsTime}/>
        <Bookmarks 
          bookmarks = {bookmarks} readingTime ={readingTime}/>
      </div>
      
    </>
  )
}

export default App
