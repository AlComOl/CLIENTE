import {useEffect,useState} from 'react';
import CardInfo from './InfoPanel/InfoPanel1.jsx';
import BtnCrear from './buttons/BtnCrear.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import parcelasService from '../services/parcelas.js';
import './Style/buttons.css';
import './Style/Parcelas.css'



const Parcela = () => {
 
   const [numParcelas, setNumParcelas] = useState(0);
   const [totalHng,setTotalHng] = useState(0);
    const [parcelaGot,setParGot] = useState(0);
    const [parcelaMan,setParMan] = useState(0);

   useEffect (() => {
     
     parcelasService.getCount()
     .then(data =>{
      setNumParcelas(data.total)
      setTotalHng(data.totalHng)
      setParGot(data.parcelasgoteo)
      setParMan(data.parcelasmanta)

     })
   },[])

    return (
   
      <div>
       
        <h1>Parcelas</h1>
          <div className='menuExplo'>
            <p>Gestiona las parcelas de tus explotaciones</p> 


                  < BtnCrear 
                    to="/nueva-parcela"
                    titulo="Crear Parcela"
                    iconIng="./plusNegro.png"
                    className="btn-nueva-explotacion"
                  />
          </div> 

    <div className="primeraSeccion">
        
        <CardInfo
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Total Parcelas"
          valor={numParcelas}
     
        />

        <CardInfo
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hectarias"
          valor={totalHng}
         
        />

        <CardInfo
          altText="Total Riego Manta"
          iconImg="./menuKebab.png"
          texto="Riego Manta"
          valor={parcelaMan}
          
        
        />
         <CardInfo
          altText="Parcelas Riego Goteo"
          iconImg="./menuKebab.png"
          texto="Riego Goteo"
          valor={parcelaGot}
        
        />

      </div>

      <div className="filtroExplo">
            <BarraBusqueda 
            iconImg="./lupa.png"
            altText="fotoLupa"/>
         </div>
    
    </div>
 
    )
}

export default Parcela