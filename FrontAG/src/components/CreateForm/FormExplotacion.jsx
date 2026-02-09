import '../buttons/BtnSubmit';
import '../Style/FormExplotacion.css';
import { useState } from 'react';

const FormExplotacion = () => {

    const [datos, setDatos] = useState({
    nombre: "",
    ubicacion: "",
    descripcion: "",
    usuario: "",
    propietario: ""
  });

  // 2. Función única para manejar todos los cambios
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,        // Mantiene los valores de los otros campos
      [name]: value    // Actualiza solo el campo que estás escribiendo
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", datos);
  };

    return(

    <div>

         <h1>Registrar Parcela</h1>
            <p>Completa los datos de la Explotación para añadirla a la base de datos</p>

      <div className="contenedor-formulario">

  

        <form className="formulario-explotacion" onSubmit={enviarFormulario}>
            <h2>Registro de Explotación</h2>
            
            <div className="grupo-input">
            <label>Nombre Explotación:</label>
            <input 
                name="nombre" 
                placeholder="Ej: Finca La Esperanza"
                value={datos.nombre} 
                onChange={manejarCambio} 
            />
            </div>

            <div className="grupo-input">
            <label>Ubicación Explotación:</label>
            <input 
                name="ubicacion" 
                placeholder="Ciudad o coordenadas"
                value={datos.ubicacion} 
                onChange={manejarCambio} 
            />
            </div>

            {/* Usamos textarea para la caja más grande */}
            <div className="grupo-input">
            <label>Descripción Explotación:</label>
            <textarea 
                name="descripcion" 
                rows="4" 
                placeholder="Detalles de la actividad..."
                value={datos.descripcion} 
                onChange={manejarCambio} 
            />
            </div>

            <div className="fila-doble">
            <div className="grupo-input">
                <label>Usuario:</label>
                <input name="usuario" value={datos.usuario} onChange={manejarCambio} />
            </div>

            <div className="grupo-input">
                <label>Propietario:</label>
                <input name="propietario" value={datos.propietario} onChange={manejarCambio} />
            </div>
    </div>

    <button type="submit" className="boton-guardar">Guardar Cambios</button>
  </form>
 </div>
</div>            
          
    )
}
export default FormExplotacion;