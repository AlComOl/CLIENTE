const express = require('express');
const app = express();
const cors = require('cors'); // Importar CORS

const PORT = 3003;

// Habilitar CORS para todas las rutas y orígenes
app.use(cors());

app.use(express.raw({ type: '*/*', limit: '10mb' })); // Captura cualquier tipo de datos sin procesar

app.post('/foo', (req, res) => {
  console.log("🔥 Datos recibidos:");

  const data = req.body.toString();

  // Si los datos contienen saltos de línea o son muy grandes, mostrar solo los primeros 100 caracteres
  if (data.length > 1000) {
    console.log(data.substring(0, 1000) + '... [truncado]');
  } else {
    console.log(data);
  }

  //res.send("Datos recibidos");
  res.json({
    status: "success",
    message: "Datos recibidos"
    
    
  })

});


app.listen(PORT, () => {
  console.log(`👽👽👽 Servidor escuchando en http://localhost:${PORT}`);
});