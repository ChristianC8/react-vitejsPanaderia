import React from 'react'
import Card from 'react-bootstrap/Card';
import CategoriasCard from './CategoriasCards.jsx'
import '../styles/Categorias.css'

function Categorias() {
    return <div id="TodasLasCat">    
        <h1 className='CategoriasTitle'>CATEGORIAS DE PRODUCTOS</h1>
        <Card body >
     
        <div id="Categorias">
        <CategoriasCard/> 
        <CategoriasCard/> 
        <CategoriasCard/> 
        <CategoriasCard/> 
        </div>
        <div id="Categorias">
        <CategoriasCard/> 
        <CategoriasCard/> 
        <CategoriasCard/> 
        <CategoriasCard/> 
        </div>
  
        </Card>
        </div>;
}

export default Categorias