
document.getElementById('btnNuevoCliente').addEventListener('click',()=>{
const nombre= document.getElementById('nombre-cliente');
const prioridad= document.getElementById('tipo-servicio');

nuevaIncidencia(nombre,prioridad)
});










function nuevaIncidencia(nombre,prioridad){
   const inputNombre=nombre.value;
   const inputPrioridad=prioridad.value;

   const div=document.createElement('div');
   div.classList.add('cliente-card');
   div.append('Nombre :'+ inputNombre +"----"+ "Prioridad :"+ inputPrioridad);
   const bAtender=document.createElement('button');
   bAtender.classList.add('btn-atender');
   bAtender.innerText="Atender";
   const bCancelar=document.createElement('button');
    bCancelar.classList.add('btn-cancelar');
    bCancelar.innerText="Cancelar";
    div.append(bAtender,bCancelar);

    const addCola=document.getElementById('cola-espera');
    addCola.appendChild(div);

    bAtender.addEventListener('click',()=>{
    
        const espera= document.getElementById('clientes-atendidos');
        espera.appendChild(div);
        bAtender.remove();
        bCancelar.remove();

    })
  


}