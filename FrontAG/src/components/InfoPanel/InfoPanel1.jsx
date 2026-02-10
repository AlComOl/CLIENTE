
const CardInfo = ({ texto, iconImg, altText, valor, comentario}) => {
  return (
    <div className="card1">
      <div className="texto">
        <p>{texto}</p>
        <img className="cardinfo-icon" src={iconImg} alt={altText} />
      </div>

      <h5 className="value">{valor}</h5>

      <div>
        <p className="texto">{comentario}</p>
      </div>

    </div>
  );
};

export default CardInfo