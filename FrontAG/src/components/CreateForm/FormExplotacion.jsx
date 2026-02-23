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


  // con un solo use useState
const [formData, setFormData] = useState({
  nombre: '',
  usuario: '',
  ubicacion: '',
  descripcion: '',
  propietario: '',


});

 //con un solo UseState

const [errors, setErrors] = useState({
  nombre: '',
  usuario: '',
  ubicacion: '',
  descripcion: '',
  propietario: '',


});


 


//validar con regex

  const regexNombre= /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,20}$/;
  const regexUsuario = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/; 
  const regexUbicacion = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/; 
  const regexDescripcion = /^.{10,}$/; 
  const regexPropietario = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,8}$/; 
   
 

   const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]: value});
    validarCampos(name, value);
  }


const validarCampos=(name,value) =>{

    let mensaje = '';
    let comprobar=true;

  if(name==='nombre' && !regexNombre.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }

  if(name==='usuario' && !regexUsuario.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }

  if(name==='ubicacion' && !regexUbicacion.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }

  if(name==='descripcion' && !regexDescripcion.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }

   if(name==='propietario' && !regexPropietario.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }
  

  setErrors({ ...errors, [name]: mensaje });

return comprobar;

}




  const enviarFormulario = (e) => {
    e.preventDefault();
//validamos los campos
    const nombreOk = validarCampos('nombre', formData.nombre);
    const ubicacionOk = validarCampos('nombre', formData.ubicacion);
    const usuarioOk = validarCampos('nombre', formData.usuario);
    const propietarioOk = validarCampos('nombre', formData.propietario);
    const descripcionOk = validarCampos('nombre', formData.descripcion);
//validamos que no esten vacios
    if(nombreOk && ubicacionOk && usuarioOk && propietarioOk && descripcionOk ||
       formData.nombre !=="" || formData.ubicacion !=="" || formData.usuario !=="" || formData.propietario !==""){
        
    }
    

    

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
            className={errors.nombre ? 'input-error' : ''} // si no cumple regex pone la casa y sale el mensaje de bajo
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
            className={errors.ubicacion ? 'input-error' : ''} 
          />
          {errors.ubicacion && <span className="mensaje-error">{errors.ubicacion}</span>}
        </div>

        <div className="form-grupo">
          <label>Usuario</label>
          <input
            name="usuario"
            placeholder="L'Alcudia"
            value={formData.usuario}
            onChange={handleChange}
            className={errors.usuario ? 'input-error' : ''} 
          />
          {errors.usuario && <span className="mensaje-error">{errors.usuario}</span>}
        </div>

        <div className="form-grupo">
          <label>Propietario</label>
          <input
            name="propietario"
            placeholder="Álvaro Comenge"
            value={formData.propietario}
            onChange={handleChange}
            className={errors.propietario ? 'input-error' : ''} 
          />
          {errors.propietario && <span className="mensaje-error">{errors.propietario}</span>}
        </div>

        <div className="form-grupo full-width">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            rows="4"
            placeholder="Descripción de la Explotación"
            value={formData.descripcion}
            onChange={handleChange}
            className={errors.descripcion ? 'input-error' : ''} 
          />
          {errors.descripcion && <span className="mensaje-error">{errors.descripcion}</span>}
        </div>

        <div className="form-actions full-width">
          <button type="submit">Guardar</button>
        </div>

      </form>
    </div>
  );
}

export default FormExplotacion;