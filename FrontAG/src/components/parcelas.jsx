import {useEffect,useState} from 'react';
import CardInfo from './InfoPanel/InfoPanel1.jsx';
import Btn1 from './buttons/BtnCrear.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import parcelasService from '../services/parcelas.js';
import './Style/buttons.css';
import './Style/Parcelas.css'



const Parcelas = () => {
//  console.log( COMPONENTE PARCELAS RENDERIZANDO') 
   const [numParcelas, setNumParcelas] = useState(0);
   const [totalHng,setTotalHng] = useState(0);

   useEffect (() => {
     
     parcelasService.getCount()
     .then(data =>{
      setNumParcelas(data.total)
      setTotalHng(data.totalHng)

     })
   },[])

    return (
   
      <div>
        
        <h1>Parcelas</h1>
          <div className='menuExplo'>
            <p>Gestiona las parcelas de tus explotaciones</p> 
                  <Btn1 
                    titulo="Crear Parcela"
                    iconIng="./plusNegro.png"
                    className="btn-nueva-explotacion"
                  />
          </div> 

      <div className="filtroExplo">
            <BarraBusqueda 
            iconImg="./lupa.png"
            altText="fotoLupa"/>
         </div>
       
     
<p>{numParcelas}</p>
    
    <div className="primeraSeccion">
        
        <CardInfo
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Total Parcelas"
          valor={numParcelas}
          // comentario="Total de Fincas"
        />

        <CardInfo
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hectarias"
          valor={totalHng}
          // comentario="Total Parcelas"
        />

        <CardInfo
          altText="Total Riego Manta"
          iconImg="./menuKebab.png"
          texto="Riego Manta"
          // valor="34"
          // comentario="Total Operaciones"
        />
         <CardInfo
          altText="Parcelas Riego Goteo"
          iconImg="./menuKebab.png"
          texto="Riego Goteo"
          // valor="34"
          // comentario="Total Operaciones"
        />

      </div>
    
    </div>
 
    )
}

export default Parcelas