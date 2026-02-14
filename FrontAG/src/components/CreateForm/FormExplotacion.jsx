import '../buttons/BtnSubmit';
import '../Style/formStyles.css'
import { useState } from 'react';

const FormExplotacion = () => {

 
  const [nombre,setNombre] = useState ();
  const [ubicacion, setUbicacion] = useState ();
  const [descripcion, setDescripcion] = useState ();
  const [usuario, setUsuario] = useState ();
  const [propietario, setPropietario] = useState ();
 


  const manejarNombre = (e) =>setNombre(e.target.value);
   const manejarUbicacion = (e) =>setUbicacion(e.target.value);
    const manejarDescripcion = (e) =>setDescripcion(e.target.value);
     const manejarUsuario = (e) =>setUsuario(e.target.value);
      const manejarPropietario = (e) =>setPropietario(e.target.value);

  const enviarFormulario = (e) => {
  
   
  };

    return(

    <div>

        

      <div className="contenedor-formulario">

  

        <form className="formulario-explotacion" onSubmit={enviarFormulario}>
            <h2>Registro de Explotación</h2>
            
            <div className="grupo-input">
            <label>Nombre Explotación:</label>
            <input 
                name="nombre" 
                placeholder="Ej: Finca La Esperanza"
                value={nombre} 
                onChange={manejarNombre} 
            />
            </div>

            <div className="grupo-input">
            <label>Ubicación Explotación:</label>
            <input 
                name="ubicacion" 
                placeholder="Ciudad o coordenadas"
                value={ubicacion} 
                onChange={manejarUbicacion} 
            />
            </div>

            <div className="grupo-input">
            <label>Descripción Explotación:</label>
            <textarea 
                name="descripcion" 
                rows="4" 
                placeholder="Detalles de la actividad..."
                value={descripcion} 
                onChange={manejarDescripcion} 
            />
            </div>

            <div className="fila-doble">
            <div className="grupo-input">
                <label>Usuario:</label>
                <input name="usuario" value={usuario} onChange={manejarUsuario} />
            </div>

            <div className="grupo-input">
                <label>Propietario:</label>
                <input name="propietario" value={propietario} onChange={manejarPropietario} />
            </div>
    </div>

    <button type="submit" className="boton-guardar">Guardar Cambios</button>
  </form>
 </div>
</div>            
          
    )
}
export default FormExplotacion;