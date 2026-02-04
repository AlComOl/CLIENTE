import Card from './cards/card.jsx'
import Btn2 from './buttons/btn2.jsx'
import './Style/buttons.css';

const parcelas = () => {

    return (
        <div>
      <h1>Parcelas</h1>
         <p>Gestiona las parcelas de tus explotaciones</p>
       
        <Btn2
        className="BtnParcelaNew"
        titulo="Nueva Parcela"
        iconIng="./mas.png"
        />

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