import { Link } from 'react-router-dom'
import '../Style/buttons.css';

const BtnCrear=({to,titulo,texto,iconIng,altText,className}) => {

  return(
      <div>
      <Link to={to} className="router-link">
      <div className="BtnCardHeader">
        <button className={className}>
           <img src={iconIng} alt={altText}/>{titulo}
        </button>
      </div>
      <p>{texto}</p>
      </Link>
    </div>
  )

}

export default BtnCrear