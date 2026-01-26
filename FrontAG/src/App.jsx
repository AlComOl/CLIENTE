import { useState } from 'react'

import './App.css'

import Btndashboard from './components/menuNav.jsx';

function App() {
  

  return (

<div>
<div class='logo'>
  <img className='imgLogo' src="/logo.png" alt="Logo"/>
  <div>
    <h1>AgroGestión</h1>
    <h5>Sistema de Gestión de tierras</h5>
  </div>
</div>

   <Btndashboard />
     </div> 
  )
}

export default App
