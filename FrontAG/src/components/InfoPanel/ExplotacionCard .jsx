import '../Style/ExplotacionCard.css';
const ExplotacionCard = ({nombre,iconImg,altText,ubicacion,TotalHngExplo,numParcelas,children}) =>{

    return(
        <div>
            <div className="explotacionCard ">
                <div clasName="cabecera-cardExplo">
                    <h3>{nombre}</h3>
                    <img src={iconImg} alt={altText} />
                    <p>{ubicacion}</p>
                </div>
                <div className="datos-cardExplo">
                    <p>Hectáreas: {TotalHngExplo}hng</p>
                    <p>Parcelas: {numParcelas}</p>
                    {/* Psamos al boton hijo para  */}
                    {children}
                </div>
            </div>
        </div>

    )
}

export default ExplotacionCard