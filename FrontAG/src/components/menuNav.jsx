import { Link } from 'react-router-dom';
import './menuNav.css';

///Btn Padre
const BtnNav =({to,texto,iconImg,altText}) =>{

  return(
  <Link to={to}>
  <div className='logo'>
      <p className='texto'>
        <img className='iconMenu' src={iconImg} alt={altText} />
        <span>{texto}</span>
       </p>
       
  </div>
    </Link>
  )

}

//paso por props a los demas componentes
const BtnDashboard = () =>{

  return(

   <BtnNav 
   to="/dashboard"
   iconImg="./iconDashboard.png"
   altText="Dashboard"
   texto="Dasbboard" />
   
  )
}


const BtnExplotaciones = () =>{

  return(
    <BtnNav
    to="/explotaciones"
    iconImg="./iconExplotaciones.png"
    altText="Explotaciones"
    texto="Explotaciones" 
    />
  )
}
const BtnParcelas = () =>{

  return (
    <BtnNav
    to="./parcelas"
    iconImg="./iconParcelas.png"
    altText="Parcelas"
    texto="Parcelas" />
  )

}
const BtnOperacines = () =>{

  return(
    
     <BtnNav 
     to="./operaciones"
     iconImg="./iconOperaciones.png"
     altText="Parcelas"
     texto="Parcelas"/>
  )

}
const BtnRecoleccion = () =>{

  return(
   
     <BtnNav 
     to="./recoleccion"
     iconImg="./iconRecoleccion.png"
     altText="Recoleccion"
     texto="Recoleccion"/>
  )

}
const BtnAlmacen = () =>{

  return(
     <BtnNav 
     to="./almacen"
     iconImg="./iconAlmacen.png"
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