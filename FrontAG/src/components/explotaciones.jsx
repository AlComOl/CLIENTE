import { useEffect , useState } from 'react';
import CardInfo from './InfoPanel/InfoPanel1.jsx'
import explotacionService from '../services/explotaciones.js';
import parcelasService from '../services/parcelas.js';
import './Style/Explotaciones.css';
import BtnCrear from './buttons/BtnCrear.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import './Style/barraBusqueda.css';
import ExplotacionCard from './InfoPanel/ExplotacionCard .jsx'



const Explotaciones = () =>{
// useState es un hook que permite crear y manejar estado (datos que pueden cambiar) en un componente funcional.
  const [numExplo, setNumExplo] = useState(0);//explotaciones
  const [numParcelas, setNumParcelas] = useState(0);
  const [totalHng,setTotalHng] = useState(0);
  const [parcelaGot,setParGot] = useState(0);
  const [parcelaMan,setParMan] = useState(0);

  const [nomExplo ,setnomExplo] = useState([]);

  const [resumen,setResumen] = useState([]);


  //useEffect es un hook que ejecuta código cuando el componente se monta, actualiza o desmonta.
  
     useEffect(() => {
      
      explotacionService.getCount()
        .then(data => {
          setNumExplo(data.total)
          setnomExplo(data.nom)
     })

      parcelasService.getCount()
        .then(data => {
          setNumParcelas(data.total)
          setTotalHng(data.totalHng)
          setParGot(data.parcelasgoteo)
          setParMan(data.parcelasmanta)
          
        })

        explotacionService.getResumen()
         .then(data => {
           setResumen(data)
         })
         .catch(err => console.error('Error al obtener resumen:', err))
    }, [])

return(

       <div>
        {/* <h1>Explotaciones</h1> */}
          <div className='menuExplo'>
            {/* <p>Gestiona tus fincas y propiedades</p>   */}


      
            
                <BtnCrear
                  to='/nueva-explotacion'
                  titulo="Crear Explotacion"
                  iconIng="./plusNegro.png"
                  className="btn-nueva-explotacion"
                />
        
            </div> 

       
      
      

         
       
      <div className="primeraSeccion">
        <CardInfo
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Explotaciones"
          valor={numExplo}
        />

        <CardInfo
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hangadas"
          valor={totalHng}
        />

        <CardInfo
          altText="Total parcelas"
          iconImg="./menuKebab.png"
          texto="Parcelas Riego Manta"
          valor={parcelaMan}

        />
        <CardInfo
          altText="Parcelas Riego Goteo"
          iconImg="./menuKebab.png"
          texto="Total Parcelas"
          valor={parcelaGot}

        />

      </div>

      <div className="filtroExplo">
            <BarraBusqueda 
            texto="Filtra las Explotaciones"
            iconImg="./lupa.png"
            altText="fotoLupa"
            />
         </div>



      <div className="seccion-explo">
        
        {resumen.map((explotacion,index) => (
          <div className='seccion-explo-part' key={index}>
        <ExplotacionCard 
    
           nombre={explotacion.nombre}
           iconImg="./iconUbicacion.svg" altText="Ubicacion"  
           ubicacion={explotacion.ubicacion}
           TotalHngExplo={explotacion.parcelas_sum_dimension_hanegadas}
           numParcelas={explotacion.parcelas_count}


        />
        </div>
          ))}
      </div>

        </div>


    
)
} 

export default Explotaciones