import { Link } from 'react-router-dom';
import './menuNav.css';

///Btn Padre
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

//paso por props a los demas componentes
const BtnDashboard = () =>{

  return(

   <BtnNav 
   to="/dashboard"
   iconImg="./iconDashboard2.svg"
   altText="Dashboard"
   texto="Dasbboard" />
   
  )
}


const BtnExplotaciones = () =>{

  return(
    <BtnNav
    to="/explotaciones"
    iconImg="./iconExplotacion.svg"
    altText="Explotaciones"
    texto="Explotaciones" 
    />
  )
}
const BtnParcelas = () =>{

  return (
    <BtnNav
    to="./parcelas"
    iconImg="./iconParcelas.svg"
    altText="Parcelas"
    texto="Parcelas" />
  )

}
const BtnOperacines = () =>{

  return(
    
     <BtnNav 
     to="./operaciones"
     iconImg="./iconOperaciones.svg"
     altText="Parcelas"
     texto="Operaciones"/>
  )

}
const BtnRecoleccion = () =>{

  return(
   
     <BtnNav 
     to="./recoleccion"
     iconImg="./iconRecoleccion.svg"
     altText="Recoleccion"
     texto="Recoleccion"/>
  )

}
const BtnAlmacen = () =>{

  return(
     <BtnNav 
     to="./almacen"
     iconImg="./iconAlmacen.svg"
     altText="Almacen"
     texto="Almacen"/>
  )

}
//meto componentes dentro de la barraNav
const BarraMenu = () => {
  return(
<div class="navbar">
   <BtnDashboard/>
   <BtnExplotaciones/>
   <BtnParcelas/>
   <BtnOperacines/>
   <BtnRecoleccion/>
   <BtnAlmacen />  
</div>
  )
}




export default BarraMenu;