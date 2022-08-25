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

  function removeItems(item) {
    setCart(cart.filter(book => book.id  !== item.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
  }, [cart])

  return (
    
      <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />}/>
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItems={removeItems}/>}/>
      </Routes>
      <Footer />
      
    </div>
    
    
  );
}

export default App;
