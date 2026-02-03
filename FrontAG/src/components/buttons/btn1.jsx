
import '../Style/buttons.css';

const BtnCard =({titulo,texto}) => {

  return(
      <div>
      <div className="BtnCardHeader">
        <h5>{titulo}</h5>
        <button>Ver</button>
      </div>
      <p>{texto}</p>
    </div>
  )

}

export default BtnCard