import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BarraMenu from './components/menuNav.jsx';
import Operaciones from './components/operaciones';
import Dashboard from './components/dashboard'; // si tienes este componente



import './App.css'

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

        <BarraMenu/>

        <Routes>
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/dashboard" element={<Dashboard />} />
           
        </Routes>
      </div>
    </Router>
  )
}

export default App
