import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import React from 'react';
import CartWidget from './components/CartWidget/CartWidget';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detalle/:id" element={<ItemDetailConteiner />}/>
        <Route path="/detalle/:categoriaId" element={<ItemDetailConteiner />}/>
        <Route path="/CartWidget" element={<CartWidget />}/>
// route para pagina inexistente
        <Route path='*' element={ <Navigate to= '/' />} /> 
      </Routes>
      <Contador />
    </BrowserRouter>
  )
}

export default App; 
