import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import parcelaService from '../../services/parcelas'
import BntSubmit from '../buttons/BtnSubmit'
import '../Style/formStyles.css'

const FormParcela = () => {
  // const navigate = useNavigate()
  
  // const [formData, setFormData] = useState({
  //   explotacion_id: '',
  //   propietario_id: '',
  //   riego: 'manta',
  //   pol_parcela: '',
  //   variedad: '',
  //   dimension_hanegadas: '',
  //   num_arboles: '',
  //   fecha_plantacion: '',
  //   descripcion: ''
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
    
  //   parcelaService
  //     .create(formData)
  //     .then(() => {
  //       navigate('/parcelas')
  //     })
  //     .catch(err => {
  //       console.error('Error al crear parcela:', err)
  //     })
  // }

  return (
    <div className="form-container">
      <h1>Nueva Parcela</h1>
      
      <form  className="form-grid">
        
        {/* Explotación */}
        <div className="form-grupo">
          <label htmlFor="explotacion_id">Explotación *</label>
          <select
            id="explotacion_id"
            name="explotacion_id"
            // value={formData.explotacion_id}
            // onChange={handleChange}
            required
          >
            <option value="">Selecciona una explotación</option>
            {/* Aquí cargarías las explotaciones desde la API */}
          </select>
        </div>

        {/* Propietario */}
        <div className="form-grupo">
          <label htmlFor="propietario_id">Propietario *</label>
          <select
            id="propietario_id"
            name="propietario_id"
            // value={formData.propietario_id}
            // onChange={handleChange}
            required
          >
            <option value="">Selecciona un propietario</option>
            {/* Aquí cargarías los propietarios desde la API */}
          </select>
        </div>

        {/* Tipo de Riego */}
        <div className="form-grupo">
          <label htmlFor="riego">Tipo de Riego *</label>
          <select
            id="riego"
            name="riego"
            // value={formData.riego}
            // onChange={handleChange}
            required
          >
            <option value="manta">Manta</option>
            <option value="goteo">Goteo</option>
          </select>
        </div>

        {/* Polígono/Parcela */}
        <div className="form-grupo">
          <label htmlFor="pol_parcela">Polígono/Parcela *</label>
          <input
            type="text"
            id="pol_parcela"
            name="pol_parcela"
            // value={formData.pol_parcela}
            // onChange={handleChange}
            placeholder="Ej: 12/45"
            required
          />
        </div>

        {/* Variedad */}
        <div className="form-grupo">
          <label htmlFor="variedad">Variedad *</label>
          <input
            type="text"
            id="variedad"
            name="caqui"
            // value={formData.variedad}
            // onChange={handleChange}
            placeholder="Ej: Rojo Brillante"
            required
          />
        </div>

        {/* Dimensión en Hanegadas */}
        <div className="form-grupo">
          <label htmlFor="dimension_hanegadas">Hanegadas *</label>
          <input
            type="number"
            step="0.001"
            id="dimension_hanegadas"
            name="dimension_hanegadas"
            // value={formData.dimension_hanegadas}
            // onChange={handleChange}
            placeholder="Ej: 2.5"
            required
          />
        </div>

        {/* Número de Árboles */}
        <div className="form-grupo">
          <label htmlFor="num_arboles">Número de Árboles</label>
          <input
            type="number"
            id="num_arboles"
            name="num_arboles"
            // value={formData.num_arboles}
            // onChange={handleChange}
            // placeholder="Ej: 250"
          />
        </div>

        {/* Fecha de Plantación */}
        <div className="form-grupo">
          <label htmlFor="fecha_plantacion">Fecha de Plantación</label>
          <input
            type="date"
            id="fecha_plantacion"
            name="fecha_plantacion"
            // value={formData.fecha_plantacion}
            // onChange={handleChange}
          />
        </div>

        {/* Descripción */}
        <div className="grupo full-width">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            // value={formData.descripcion}
            // onChange={handleChange}
            rows="4"
            placeholder="Descripción de la parcela..."
          />
        </div>

        {/* <div className="form-actions full-width">
          <button 
            type="button" 
            onClick={() => navigate('/parcelas')}
            className="btn-cancel"
          >
            Cancelar
          </button>
        
        </div> */}
      </form>
    </div>
  )
}

export default FormParcela