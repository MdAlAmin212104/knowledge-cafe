import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Cart from './components/Header/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleClick = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  return (
    <>
      
      <Header/>
      <div className='container mx-auto md:flex'>
        <Cart handleClick ={handleClick}/>
        <Bookmarks bookmarks = {bookmarks}/>
      </div>
      
    </>
  )
}

export default App
