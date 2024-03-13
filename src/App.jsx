import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Cart from './components/Header/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header/>
      <div className='container mx-auto md:flex'>
        <Cart/>
        <Bookmarks/>
      </div>
      
    </>
  )
}

export default App
