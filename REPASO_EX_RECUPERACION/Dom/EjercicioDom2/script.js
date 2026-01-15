let contador=0;
let intervalo;

const bIniciar=document.getElementById('btnIniciar');

bIniciar.addEventListener('click',()=>{
    const estado=document.getElementById('estado');
    estado.innerText="Estado: En ejecución";
     intervalo=setInterval(() => {
        contador++;
        const cont=document.getElementById('contador');
        cont.innerText="Tiempo: "+contador
    }, 1000);
});

const bPausa= document.getElementById('btnPausar');

bPausa.addEventListener('click',()=>{

    clearInterval(intervalo);
    const estado= document.getElementById('estado');
    estado.innerText="Estado : Pausa"
    intervalo = null

})

const bReanudar=document.getElementById('btnReanudar');
bReanudar.addEventListener('click',()=>{
    const estado= document.getElementById('estado');
    estado.innerText="Estado : En ejecucion"
     intervalo=setInterval(()=>{console.log('seguimos');
        contador++;
        const re=document.getElementById('contador');
        re.innerText="Tiempo: "+ contador;
    },1000);
})

const bFin=document.getElementById('btnFinalizar');

bFin.addEventListener('click',()=>{
    
    clearInterval(intervalo);
    const estado= document.getElementById('estado');
    estado.innerText="Estado: Finalizada"
    const fin=document.getElementById('contador');
    contador=0;
    fin.innerText="Tiempo: "+contador;
   clearInterval(intervalo);
   intervalo = null

})







function incrementa(){
     contador++;

}