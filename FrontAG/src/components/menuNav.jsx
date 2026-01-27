import { Link } from 'react-router-dom';


const Btndashboard = () =>{

  return(

<Link to="/dashboard">
<div className='logo'>
   <p>
  <img className='iconMenu' src="./iconDashboard.png" alt="dashboard" />
  <span>Dashboard</span>
</p>
</div>
</Link>
  )
}
const BtnExplotaciones = () =>{

  return(
<div className='logo'>
  <p>
    <img className='iconMenu' src="./iconExplotaciones.png" alt="dashboard" />
    <span>Explotaciones</span>
  </p>
</div>
  )
}
const Btnparcelas = () =>{

  return (
<div className='logo'>
  <p>
    <img className='iconMenu' src="./iconParcelas.png" alt="Parcelas" />
    <span>Parcelas</span>
  </p>
</div>
  )

}
const BtnOperacines = () =>{

  return(
    
      <div className='logo'>
        <Link to="/operaciones">
          <p>
            <img className='iconMenu' src="./IconOperaciones.png" alt="Operaciones" />
            <span>Operaciones</span>
          </p>
        </Link>
      </div>
  )

}
const BtnExlotaciones = () =>{

  return(
    <div className='logo'>
  <p>
    <img className='iconMenu' src="./iconRecoleccion.png" alt="Recoleccion" />
    <span>Recoleccion</span>
  </p>
</div>
  )

}
const Btnalmacen = () =>{

  return(
    <div className='logo'>
  <p>
    <img className='iconMenu' src="./iconAlmacen.png" alt="Almacen" />
    <span>Almacen</span>
  </p>
</div>
  )

}

const BarraMenu = () => {
  return(
<div class="navbar">
   <Btndashboard/>
   <BtnExplotaciones/>
   <Btnparcelas/>
   <BtnOperacines/>
   <BtnExlotaciones/>
   <Btnalmacen />
</div>
  )
}




export default BarraMenu;