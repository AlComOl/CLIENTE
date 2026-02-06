import Card from './InfoPanel/InfoPanel2.jsx';
import Btn1 from './buttons/Btn1.jsx';
import BarraBusqueda from './BarraBusqueda/BarraBusqueda.jsx';
import './Style/buttons.css';
import './Style/Parcelas.css'


const parcelas = () => {

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
       
     

    
    <div className="primeraSeccion">
        <Card
          iconImg="./menuKebab.png"
          altText="menu"
          texto="Total Parcelas"
          // comentario="Total de Fincas"
        />

        <Card
          iconImg="./menuKebab.png"
          altText="Menu"
          texto="Total hectarias"
          // valor={numParcelas}
          // comentario="Total Parcelas"
        />

        <Card
          altText="Total Riego Manta"
          iconImg="./menuKebab.png"
          texto="Operaciones"
          // valor="34"
          // comentario="Total Operaciones"
        />
         <Card
          altText="Parcelas Riego Goteo"
          iconImg="./menuKebab.png"
          texto="Operaciones"
          // valor="34"
          // comentario="Total Operaciones"
        />

      </div>
    
    </div>
 
    )
}

export default parcelas