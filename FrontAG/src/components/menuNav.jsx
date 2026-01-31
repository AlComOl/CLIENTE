import { Link } from 'react-router-dom';
import './menuNav.css';


const BtnNav =({to,texto,iconImg,altText}) =>{

  return(
  <Link to={to} className="router-link">
  <div className='logo'>
      <a className='texto'>
        <img className='iconMenu' src={iconImg} alt={altText} />
        <span>{texto}</span>
       </a>
       
  </div>
    </Link>
  )

}


//meto componentes dentro de la barraNav
const BarraMenu = () => {
  return(

<div className="navbar">

  <BtnNav  to="./dashboard"
     iconImg="./iconDashboard.svg"
     altText="Dashboard"
     texto="Dashboard"/>

  <BtnNav
    to="/explotaciones"
    iconImg="./iconExplotacion.svg"
    altText="Explotaciones"
    texto="Explotaciones" 
    /> 

  <BtnNav
    to="./parcelas"
    iconImg="./iconParcelas.svg"
    altText="Parcelas"
    texto="Parcelas" />

     
  <BtnNav 
     to="./operaciones"
     iconImg="./iconOperaciones.svg"
     altText="Parcelas"
     texto="Operaciones"/>

  <BtnNav 
     to="./recoleccion"
     iconImg="./iconRecoleccion.svg"
     altText="Recoleccion"
     texto="Recoleccion"/>

  <BtnNav 
     to="./almacen"
     iconImg="./iconAlmacen.svg"
     altText="Almacen"
     texto="Almacen"/>
    
</div>
  )
}




export default BarraMenu;