import '../Style/ExplotacionCard.css';
const ParcelaCard = ({pol_parcela,iconImg,altText,variedad,explotacion,dimension_hanegadas,rol,children}) =>{

    return(
        <div>
            <div className="explotacionCard ">
                <h4>Poligono-parcela{pol_parcela}</h4>
                    <div className="cabecera-cardExplo">
                    <img className="explo-icon" src={iconImg} alt={altText} />
                    {/* <p>{ubicacion}</p> */}
                </div>
                <div className="datos-cardExplo">
                    <p>Dimensión Parcela: {dimension_hanegadas}</p>
                     <p>Rol: {rol}</p>
                    <p>Variedad: {variedad}</p>
                    <p>Explotacion: {explotacion}</p>
                    {/* Psamos al boton hijo para  */}
                    {children}
                </div>
            </div>
        </div>

    )
}

export default ParcelaCard