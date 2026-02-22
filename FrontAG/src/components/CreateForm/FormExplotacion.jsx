import '../Style/formStyles.css'
import { useState } from 'react';

const FormExplotacion = () => {

  //ORIGINARIO 
  //  const [nombre, setNombre] = useState('');
  // const [usuario, setUsuario] = useState('');
  // const [ubicacion, setUbicacion] = useState('');
  // const [descripcion, setDescripcion] = useState('');
  // const [propietario, setPropietario] = useState('');
  // const [dni, setDni] = useState('');
  // const [telefono, setTelefono] = useState('');

  // con un solo use useState
const [formData, setFormData] = useState({
  nombre: '',
  usuario: '',
  ubicacion: '',
  descripcion: '',
  propietario: '',
  dni: '',
  telefono: ''
});

 //con un solo UseEfect

const [errors, setErrors] = useState({
  nombre: '',
  usuario: '',
  ubicacion: '',
  descripcion: '',
  propietario: '',
  dni: '',
  telefono: ''
});


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]: value})
  }


//validar con regex

  const regexNombre= /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
  const regexUsuario=/ / ;
  const regexUbicacion=/ /;
  const regexDescripcion=/ /;
  const regexPropietario=/ /;
  const regexDni=/ /;
  const regexTelefono=/ /;


const validarCampos=(name,value) =>{

  if(name==='nombre' && !regexNombre.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
  }

  setErrors({ ...errors, [name]: mensaje });
}

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
            placeholder="Ej: Finca Casa del Pi"
            value={formData.nombre}
            onChange={handleChange}
             className={errors.nombre ? 'input-error' : ''}
          />
          {errors.nombre && <span className="mensaje-error">{errors.nombre}</span>}
        </div>

        <div className="form-grupo">
          <label>Ubicación</label>
          <input
            name="ubicacion"
            placeholder="Termino municipal"
            value={formData.ubicacion}
            onChange={handleChange}
          />
        </div>

        <div className="form-grupo">
          <label>Usuario</label>
          <input
            name="usuario"
            placeholder="L'Alcudia"
            value={formData.usuario}
            onChange={handleChange}
          />
        </div>

        <div className="form-grupo">
          <label>Propietario</label>
          <input
            name="propietario"
            placeholder="Álvaro Comenge"
            value={formData.propietario}
            onChange={handleChange}
          />
        </div>

         <div className="form-grupo">
          <label>Dni</label>
          <input
            name="dni"
            placeholder="22345696W"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>

        <div className="form-grupo">
          <label>Dni</label>
          <input
            name="telefono"
            placeholder="657898990"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-grupo full-width">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            rows="4"
            placeholder="Descripción de la Explotación"
            value={formData.descripcion}
            onChange={handleChange}
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