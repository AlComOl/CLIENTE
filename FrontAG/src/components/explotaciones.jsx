import Card from './InfoPanel/InfoPanel1.jsx'
import './StyleComponents/ComponetsNavStyle.css';

const explotaciones = () =>{
return(
     <div>
      <h1>Explotaciones</h1>
      <p>Gestiona tus fincas y propiedades</p>
        
        <div className="filtroExplo">
        
         </div>
       
      <div className="primeraSeccion">
        <Card
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Explotaciones"
          // valor={numExplo}
          // comentario="Total de Fincas"
        />

        <Card
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hangadas"
          // valor={numParcelas}
          // comentario="Total Parcelas"
        />

        <Card
          altText="Total parcelas"
          iconImg="./menuKebab.png"
          texto="Operaciones"
          // valor="34"
          // comentario="Total Operaciones"
        />

      </div>

        </div>


    
)
} 

export default explotaciones