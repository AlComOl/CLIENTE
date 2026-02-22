import '../Style/formStyles.css'
import { useState } from 'react';

const FormExplotacion = () => {

  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [usuario, setUsuario] = useState('');
  const [propietario, setPropietario] = useState('');

  const manejarNombre = (e) => setNombre(e.target.value);
  const manejarUbicacion = (e) => setUbicacion(e.target.value);
  const manejarDescripcion = (e) => setDescripcion(e.target.value);
  const manejarUsuario = (e) => setUsuario(e.target.value);
  const manejarPropietario = (e) => setPropietario(e.target.value);

  const enviarFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Nueva Explotación</h1>

      <form className="form-grid" onSubmit={enviarFormulario}>

        <div className="form-grupo">
          <label>Nombre Explotación</label>
          <input
            name="nombre"
            placeholder="Ej: Finca La Esperanza"
            value={nombre}
            onChange={manejarNombre}
          />
        </div>

        <div className="form-grupo">
          <label>Ubicación</label>
          <input
            name="ubicacion"
            placeholder="Ciudad o coordenadas"
            value={ubicacion}
            onChange={manejarUbicacion}
          />
        </div>

        <div className="form-grupo">
          <label>Usuario</label>
          <input
            name="usuario"
            value={usuario}
            onChange={manejarUsuario}
          />
        </div>

        <div className="form-grupo">
          <label>Propietario</label>
          <input
            name="propietario"
            value={propietario}
            onChange={manejarPropietario}
          />
        </div>

        <div className="form-grupo full-width">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            rows="4"
            placeholder="Detalles de la actividad..."
            value={descripcion}
            onChange={manejarDescripcion}
          />
        </div>

        <div className="form-actions full-width">
          <button type="submit">Guardar</button>
        </div>

      </form>
    </div>
  );
}

export default FormExplotacion;