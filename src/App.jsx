import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import React from 'react';
import CartWidget from './components/CartWidget/CartWidget';
import Cart from './components/Cart/cart';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detalle/:id" element={<ItemDetailConteiner />}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
        <Route path="/CartWidget" element={<CartWidget />}/>
        <Route path="/cart" element= {<Cart/>} />
// route para pagina inexistente
        <Route path='*' element={ <Navigate to= '/' />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App; 
