import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormParcela = () => {

  const regexPoligono = /^\d{1,12}$/;
  const regexParcela = /^\d{1,4}$/;
  const regexVariedad = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,10}$/;
  const regexDimension = /^\d{1,2}(\.\d{1,2})?$/;
  const regexNumArboles = /^([1-9]\d{0,2}|[12]\d{3}|3000)$/;
  const regexDescripcion = /^(\S+\s*){1,50}$/;


  const navigate = useNavigate();

  const [formData,setFormData] = useState ({
    explotacion_id :"",
    propietarios_id : "",
    rol:"manta",
    parcela:"",
    variedad:"",
    dimension_hanegadas:"",
    num_arboles:"",
    fecha_plantacion:"",
    descripcion:""

  })
//maneja los errores cuando no hacen regex ok
  const [errors, setErrors] = useState({
    parcela:"",
    variedad:"",
    dimension_hanegadas:"",
    num_arboles:"",
    fecha_plantacion:"",
    descripcion:""


});


  const actualizaEstado = (e) =>{

    const {name, value} = e.target
    setFormData({...formData , [name] : value})
    validarCampos();

  }




  const enviarFormulario = (e) => {
    e.preventDefault();

    parcelaService.postCrear(formData)
     .then((response) => {
      navigate('/parcelas')
     })
     .catch(err => console.error(err))
   }


   const validarCampos=(name,value) =>{

        let mensaje = '';
        let comprobar=true;

      if(name==='poligono' && !regexPoligono.test(value)){
          mensaje = 'Número de 2 cifras';
          comprobar=false;
      }

      if(name==='parcela' && !regexParcela.test(value)){
          mensaje = 'Número de 2 cifras';
          comprobar=false;
      }

      if(name==='variedad' && !regexVariedad.test(value)){
        mensaje = 'Palabra de 8 letras máximo'; 
        comprobar=false;
      }

      if(name==='dimensiones' && !regexDimension.test(value)){
        mensaje = 'Número decimal ejemplo 2,34 no mas decimáles'; 
        comprobar=false;
      }

      if(name==='num_arboles' && !regexNumArboles.test(value)){
        mensaje = 'Número entero max 3000'; 
        comprobar=false;
      }

      if(name==='descripcion' && !regexDescripcion.test(value)){
        mensaje = 'Mínimo 50 caracteres'; 
        comprobar=false;
      }


      setErrors({ ...errors, [name]: mensaje });

    return comprobar;

  }




  return(

     <div className="form-container">
      <h1>Nueva Parcela</h1>
      
      <form  className="form-grid">
        
        {/* Explotación */}
        <div className="form-grupo">
          <label htmlFor="explotacion_id">Explotación *</label>
          <select
            id="explotacion_id"
            name="explotacion_id"
            value={formData.explotacion_id}
            onChange={actualizaEstado}
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
            value={formData.propietarios_id}
            onChange={actualizaEstado}
            required
          >
            <option value="">Selecciona un propietario</option>
            
          </select>
        </div>

        {/* Tipo de Riego */}
        <div className="form-grupo">
          <label htmlFor="riego">Tipo de Riego *</label>
          <select
            id="riego"
            name="riego"
            value={formData.riego}
            onChange={actualizaEstado}
            required
          >
            <option value="manta">Manta</option>
            <option value="goteo">Goteo</option>
          </select>
        </div>
        <div>
                {/* Polígono */}
                <div className="form-grupo">
                  <label htmlFor="pol_parcela">Polígono*</label>
                  <input
                    type="text"
                    id="poligono"
                    name="poligono"
                    value={formData.poligono}
                    onChange={actualizaEstado}
                    placeholder="Ej: 12"
                    required
                  />
                </div>
                  {/*Parcela */}
                <div className="form-grupo">
                  <label htmlFor="parcela">Parcela*</label>
                  <input
                    type="text"
                    id="parcela"
                    name="parcela"
                    value={formData.pol_parcela}
                    onChange={actualizaEstado}
                    placeholder="Ej: 45"
                    required
                  />
                </div>
        </div>
        {/* Variedad */}
        <div className="form-grupo">
          <label htmlFor="variedad">Variedad *</label>
          <input
            type="text"
            id="variedad"
            name="caqui"
            value={formData.variedad}
            onChange={actualizaEstado}
            placeholder="Ej: Rojo Brillante"
            required
          />
        </div>

        {/* Dimensión en Hanegadas */}
        <div className="form-grupo">
          <label htmlFor="dimension_hanegadas">Hanegadas *</label>
          <input
            type="number"
            step="0.01"
            id="dimension_hanegadas"
            name="dimension_hanegadas"
            value={formData.dimension_hanegadas}
            onChange={actualizaEstado}
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
            value={formData.num_arboles}
            onChange={actualizaEstado}
            placeholder="Ej: 250"
          />
        </div>

        {/* Fecha de Plantación */}
        <div className="form-grupo">
          <label htmlFor="fecha_plantacion">Fecha de Plantación</label>
          <input
            type="date"
            id="fecha_plantacion"
            name="fecha_plantacion"
            value={formData.fecha_plantacion}
            onChange={actualizaEstado}
          />
        </div>

        {/* Descripción */}
        <div className="form-grupo full-width">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            rows="4"
            placeholder="Descripción de la Explotación"
            value={formData.descripcion}
            onChange={actualizaEstado}
            className={errors.descripcion ? 'input-error' : ''} 
          />
          {errors.descripcion && <span className="mensaje-error">{errors.descripcion}</span>}
        </div>

        <div className="form-actions full-width">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  )
}


  export default FormParcela;