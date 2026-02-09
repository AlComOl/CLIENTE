import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BarraMenu from './components/menuNav.jsx';
import FormExplotacion from './components/CreateForm/formExplotacion.jsx';
import Dashboard from './components/dashboard.jsx'; 
import Explotaciones from './components/explotaciones.jsx';
import Parcelas from './components/parcelas.jsx'; 
import Operaciones from './components/operaciones.jsx';
import Recoleccion from './components/recoleccion.jsx';
import Almacen from './components/almacen.jsx';

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <div className='logo'>
          <img className='imgLogo' src="/logo.png" alt="Logo"/>
          <div>
            <h1>AgroGestión</h1>
            <h5>Sistema de Gestión de tierras</h5>
          </div>
        </div>
         <div className='login'>
            <h3>Usuario</h3>
          </div>
         

        <BarraMenu/>

        <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explotaciones" element={<Explotaciones />} />
          <Route path="/parcelas" element={<Parcelas />} />
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/recoleccion" element={<Recoleccion />} />
          <Route path="/almacen" element={<Almacen />} />
          <Route path="/nueva-explotacion" element={<FormExplotacion />} />

           
        </Routes>
        {/* <Dashboard /> */}
  
      </div>
    </Router>
  )
    
}

export default App
