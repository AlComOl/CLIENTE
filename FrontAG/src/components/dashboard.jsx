import './StyleComponents/ComponetsNavStyle.css';

const Card = ({texto,iconImg,altText,valor,comentario}) =>{
  return(

    <div className="card1">
      <div className="texto">
        <p>{texto}</p>
        <img src={iconImg} alt={altText} />
      </div>
        <h5 className="value">{valor}</h5>
          <div>
            <p className ="texto">{comentario}</p>
          </div>
    </div>

  )
}
const dashboard = () =>{
return(
     <div>
      <p>Resumen general de la gestión agrícola</p>

      <div className='primeraSeccion' >
        <Card
        iconImg="./iconExplotacion.svg"
        altText="Explotaciones"
        texto="Explotaciones"
        valor="9"
        comentario="Total de Fincas"/>

         <Card
        iconImg="./iconParcelas.svg"
        altText="parcelas"
        texto="Parcelas"
        valor="35"
        comentario="Total de Fincas"/>

         <Card
        iconImg="./iconOperaciones.svg"
        altText="operaciones"
        texto="Operaciones"
        valor="34"
        comentario="Total Operaciones"/>

         <Card
        iconImg="./iconAlmacen.svg"
        altText="Almacen"
        texto="Productos"
        valor="9"
        comentario="En almacén"/>

        
      </div>
      



    </div>

)
}



export default dashboard 