import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import Carrousel from './components/Carrousel.jsx'
import Categorias from './components/Categorias/Categorias'
import Curve from './components/Curve.jsx'
import Curve2 from './components/Curve2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar/>
      <br/>
      <br/>
      <div id='backcolor'></div>
      <Carrousel/>
      <img src="src/assets/ICONO.png" alt="" className='bigicon'/>
      <div className='CenterLetter'><h1>"Una pequeña dosis de felicidad" </h1></div>
      <img src="src/assets/ICONO.png" alt="" className='CenterLetter' />
      <h2 className='CenterLetter'>"El mejor lugar para tortas y confiteria"  <img src="src/assets/ICONO.png" alt="" className='w-20 ml-36'/> </h2>
      <h3 className='CenterLetter'>"Accesible y de buena calidad"  <img src="src/assets/ICONO.png" alt="" className='w-20 ml-36'/></h3>
      <Curve negative={true}/>
      <Curve/>
      <div className='layer1 spacer'></div>
      <Curve2/>
      <Categorias/>
     
    


    </div>
  )
}

export default App
