function abrirVentana() {
    // Abrir ventana no redimensionable
    let nuevaVentana = window.open('', '', 'width=900,height=700,resizable=no');

    // Escribir contenido directamente en la ventana
    nuevaVentana.document.body.innerHTML = `
        <h3>Ejemplo de Ventana Nueva</h3>
        <p>URL Completa: ${window.location.href}</p>
        <p>Protocolo utilizado: ${window.location.protocol}</p>
        <p>Nombre en código del navegador: ${navigator.appCodeName}</p>
        <p>${navigator.javaEnabled() ? 'Java SI disponible en esta ventana' : 'Java NO disponible en esta ventana'}</p>
        <iframe src="https://marcosruiz.github.io/posts/tarea-objetos-predefinidos-javascript/" width="800" height="600"></iframe>
    `;
}