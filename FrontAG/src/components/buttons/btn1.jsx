
import '../Style/buttons.css';

const Btn1 =({titulo,texto,iconIng,altText,className}) => {

  return(
      <div>
      <div className="BtnCardHeader">
        <button className={className}>
           <img src={iconIng} alt={altText}/>{titulo}
        </button>
      </div>
      <p>{texto}</p>
    </div>
  )

}

export default Btn1