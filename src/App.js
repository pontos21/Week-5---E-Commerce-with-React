import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Books from './pages/Books'
import { Routes, Route } from 'react-router-dom'
import { books } from "./data"
import  BookInfo  from "./pages/BookInfo"
import Cart from './pages/Cart'



function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity:1}])
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
            ...item,
            quantity: +quantity,
            }
          : item;
      })
    )
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    
      <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />}/>
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity}/>}/>
      </Routes>
      <Footer />
      
    </div>
    
    
  );
}

export default App;
