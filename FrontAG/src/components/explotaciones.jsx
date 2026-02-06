import { useEffect , useState } from 'react';
import Card from './InfoPanel/InfoPanel1.jsx'
import explotacionService from '../services/explotaciones.js';
import './Style/Explotaciones.css';
import Btn1 from './buttons/Btn1.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import './Style/busqueda1.css';

const Explotaciones = () =>{

  const [numExplo, setNumExplo] = useState(0);//explotaciones
  
  
     useEffect(() => {
      explotacionService.getCount()
        .then(total => setNumExplo(total))
        .catch(err => console.error(err));//gestionar errores cunado la informacion no este disponible
    }, [])

return(
     <div>
        <h1>Explotaciones</h1>
          <div className='menuExplo'>
            <p>Gestiona tus fincas y propiedades</p>  
                <Btn1 
                  titulo="Crear Explotacion"
                  iconIng="./plusNegro.png"
                  className="btn-nueva-explotacion"
                />
            </div> 
      
      <div className="filtroExplo">
            <BarraBusqueda 
            iconImg="./lupa.png"
            altText="fotoLupa"/>
         </div>

         
       
      <div className="primeraSeccion">
        <Card
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Explotaciones"
          valor={numExplo}
          // comentario="Total de Fincas"
        />

        <Card
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hangadas"
          // valor={numParcelas}
          comentario="Cantidad de anegadas"
        />

        <Card
          altText="Total parcelas"
          iconImg="./menuKebab.png"
          texto="Total Parcelas"
          // valor="34"
          comentario="Cantidad de parcelas"
        />

      </div>

        </div>


    
)
} 

export default Explotaciones