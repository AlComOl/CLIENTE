import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import operacionService from '../../services/operaciones'
import SubmitButton from '../buttons/SubmitButton'
import './formStyles.css'

const FormOperacion = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    parcela_id: '',
    usuario_id: '',
    tipo_operacion: 'riego',
    fecha: '',
    hora_inicio: '',
    duracion_minutos: '',
    producto: '',
    dosis: '',
    descripcion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    operacionService
      .create(formData)
      .then(() => {
        navigate('/operaciones')
      })
      .catch(err => {
        console.error('Error al crear operación:', err)
      })
  }

  return (
    <div className="form-container">
      <h1>Nueva Operación</h1>
      
      <form onSubmit={handleSubmit} className="form-grid">
        
        {/* Parcela */}
        <div className="form-group">
          <label htmlFor="parcela_id">Parcela</label>
          <select
            id="parcela_id"
            name="parcela_id"
            value={formData.parcela_id}
            onChange={handleChange}
          >
            <option value="">Selecciona una parcela</option>
            {/* Cargar parcelas desde la API */}
          </select>
        </div>

        {/* Usuario */}
        <div className="form-grupo">
          <label htmlFor="usuario_id">Usuario</label>
          <select
            id="usuario_id"
            name="usuario_id"
            value={formData.usuario_id}
            onChange={handleChange}
          >
            <option value="">Selecciona un usuario</option>
            {/* Cargar usuarios desde la API */}
          </select>
        </div>

        {/* Tipo de Operación */}
        <div className="form-grupo">
          <label htmlFor="tipo_operacion">Tipo de Operación *</label>
          <select
            id="tipo_operacion"
            name="tipo_operacion"
            value={formData.tipo_operacion}
            onChange={handleChange}
            required
          >
            <option value="riego">Riego</option>
            <option value="poda">Poda</option>
            <option value="abonado">Abonado</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="fumigar">Fumigar</option>
          </select>
        </div>

        {/* Fecha */}
        <div className="form-grupo">
          <label htmlFor="fecha">Fecha *</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        {/* Hora de Inicio */}
        <div className="form-grupo">
          <label htmlFor="hora_inicio">Hora de Inicio *</label>
          <input
            type="time"
            id="hora_inicio"
            name="hora_inicio"
            value={formData.hora_inicio}
            onChange={handleChange}
            required
          />
        </div>

        {/* Duración en Minutos */}
        <div className="form-grupo">
          <label htmlFor="duracion_minutos">Duración (minutos) *</label>
          <input
            type="number"
            id="duracion_minutos"
            name="duracion_minutos"
            value={formData.duracion_minutos}
            onChange={handleChange}
            placeholder="Ej: 120"
            required
          />
        </div>

        {/* Producto */}
        <div className="form-grupo">
          <label htmlFor="producto">Producto</label>
          <input
            type="text"
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </div>

        {/* Dosis */}
        <div className="form-grupo">
          <label htmlFor="dosis">Dosis</label>
          <input
            type="text"
            id="dosis"
            name="dosis"
            value={formData.dosis}
            onChange={handleChange}
            placeholder="Ej: 2L/ha"
          />
        </div>

        {/* Descripción */}
        <div className="form-grupo full-width">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="4"
            placeholder="Detalles de la operación..."
          />
        </div>

        {/* Botones */}
        <div className="form-actions full-width">
          <button 
            type="button" 
            onClick={() => navigate('/operaciones')}
            className="btn-cancel"
          >
            Cancelar
          </button>
          <SubmitButton texto="Crear Operación" />
        </div>
      </form>
    </div>
  )
}

export default FormOperacion