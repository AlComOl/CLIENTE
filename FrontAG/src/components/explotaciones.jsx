import { useEffect , useState } from 'react';
import CardInfo from './InfoPanel/InfoPanel1.jsx'
import explotacionService from '../services/explotaciones.js';
import parcelasService from '../services/parcelas.js';
import './Style/Explotaciones.css';
import Btn1 from './buttons/Btn1.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import './Style/busqueda1.css';
import ExplotacionCard from './InfoPanel/ExplotacionCard .jsx'


const Explotaciones = () =>{
// useState es un hook que permite crear y manejar estado (datos que pueden cambiar) en un componente funcional.
  const [numExplo, setNumExplo] = useState(0);//explotaciones
  const [numParcelas, setNumParcelas] = useState(0);
  const [totalHng,setTotalHng] = useState(0);
  const [nomExplo ,setnomExplo] = useState([]);


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
          

        })

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
        <CardInfo
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Explotaciones"
          valor={numExplo}
          comentario="Total de Fincas"
        />

        <CardInfo
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hangadas"
          valor={totalHng}
          comentario="Cantidad de hanegadas"
        />

        <CardInfo
          altText="Total parcelas"
          iconImg="./menuKebab.png"
          texto="Total Parcelas"
          valor={numParcelas}
          comentario="Cantidad de parcelas"
        />

      </div>

      <div className="seccionExplo">
        {nomExplo.map((explotacion,index) => (
        <ExplotacionCard 
        key={index} 
           nombre={explotacion}
        />
          ))}
      </div>

        </div>


    
)
} 

export default Explotaciones