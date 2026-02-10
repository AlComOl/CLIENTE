import { Link } from 'react-router-dom';
import {useState} from 'react';
// import './menuNav.css';
import './Style/menuNav.css';


//ESTE ES EL MOLDE
const BtnNav =({to,texto,iconImg,altText,isSeleccionado, onClick}) =>{


  return(
  <Link to={to} className="router-link">
  <div className={`logo ${isSeleccionado ? 'activeMenu' : ''}`} onClick={onClick}>
        <img className='iconMenu' src={iconImg} alt={altText} />
        <span>{texto}</span>
  </div>
    </Link>
  )

}


//meto componentes dentro de la barraNav
const BarraMenu = () => {

  // useState guarda qué botón está activo, 
  const [botonActivo, setBotonActivo] = useState('Dashboard');
  return(

<div className="navbar">

  <BtnNav  
     to="./dashboard"
     iconImg ="./iconDashboard.svg"
     altText="Dashboard"
     texto="Dashboard"
    //  isSeleccionado pregunta si ese botón es el activo para añadirle la clase CSS. 
     isSeleccionado={botonActivo === 'Dashboard'} 
     onClick={() => setBotonActivo('Dashboard')}/>

  <BtnNav
    to="/explotaciones"
    iconImg="./iconExplotacion.svg"
    altText="Explotaciones"
    texto="Explotaciones" 
    isSeleccionado={botonActivo === 'Explotaciones'} 
    onClick={() => setBotonActivo('Explotaciones')}/>

  <BtnNav
    to="./parcelas"
    iconImg="./iconParcelas.svg"
    altText="Parcelas"
    texto="Parcelas" 
    isSeleccionado={botonActivo === 'Parcelas'} 
    onClick={() => setBotonActivo('Parcelas')}/>

     
  <BtnNav 
     to="./operaciones"
     iconImg="./iconOperaciones.svg"
     altText="Parcelas"
     texto="Operaciones"
     isSeleccionado={botonActivo === 'Operaciones'} 
    onClick={() => setBotonActivo('Operaciones')}/>

  <BtnNav 
     to="./recoleccion"
     iconImg="./iconRecoleccion.svg"
     altText="Recoleccion"
     texto="Recoleccion"
     isSeleccionado={botonActivo === 'Recoleccion'} 
    onClick={() => setBotonActivo('Recoleccion')}/>

  <BtnNav 
     to="./almacen"
     iconImg="./iconAlmacen.svg"
     altText="Almacen"
     texto="Almacen"
     isSeleccionado={botonActivo === 'Almacen'} 
     onClick={() => setBotonActivo('Almacen')}/>
    
</div>
  )
}




export default BarraMenu;