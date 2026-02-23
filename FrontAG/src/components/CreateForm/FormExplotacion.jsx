import '../Style/formStyles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import explotacionService from '../../services/explotaciones'

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
  user_id: '',
  ubicacion: '',
  descripcion: '',
  propietario_id: '',


});

 //con un solo UseState

const [errors, setErrors] = useState({
  nombre: '',
  user_id: '',
  ubicacion: '',
  descripcion: '',
  propietario_id: '',


});


 
const navigate = useNavigate();

//validar con regex

  const regexNombre= /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,20}$/;
  const regexUsuario = /^\d+$/; 
  const regexUbicacion = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/; 
  const regexDescripcion = /^.{10,}$/; 
  const regexPropietario = /^\d+$/;
   
 

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

  if(name==='user_id' && !regexUsuario.test(value)){
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

   if(name==='propietario_id' && !regexPropietario.test(value)){
      mensaje = 'Solo letras, mínimo 3 caracteres';
      comprobar=false;
  }
  

  setErrors({ ...errors, [name]: mensaje });

return comprobar;

}




  const enviarFormulario = (e) => {
    e.preventDefault();
     console.log('formulario enviado');
     console.log('formData:', formData);
//validamos los campos
    const nombreOk = validarCampos('nombre', formData.nombre);
    const ubicacionOk = validarCampos('ubicacion', formData.ubicacion);
    const usuarioOk = validarCampos('user_id', formData.user_id);
    const propietarioOk = validarCampos('propietario_id', formData.propietario_id);
    const descripcionOk = validarCampos('descripcion', formData.descripcion);

  console.log('nombreOk:', nombreOk);
  console.log('ubicacionOk:', ubicacionOk);
  console.log('usuarioOk:', usuarioOk);
  console.log('propietarioOk:', propietarioOk);
  console.log('descripcionOk:', descripcionOk);
//validamos que no esten vacios
    if(nombreOk && ubicacionOk && usuarioOk && propietarioOk && descripcionOk &&
       formData.nombre !=="" && formData.ubicacion !=="" && formData.user_id !=="" && formData.propietario_id !==""){
        //llamamos al servicio
        explotacionService.postCrear(formData)
            .then(() => {
              navigate('/explotaciones')
            })
            .catch(err => console.error(err))
      

   

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
            name="user_id"
            placeholder="L'Alcudia"
            value={formData.user_id}
            onChange={handleChange}
            className={errors.usuario ? 'input-error' : ''} 
          />
          {errors.usuario && <span className="mensaje-error">{errors.usuario}</span>}
        </div>

        <div className="form-grupo">
          <label>Propietario</label>
          <input
            name="propietario_id"
            placeholder="Álvaro Comenge"
            value={formData.propietario_id}
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