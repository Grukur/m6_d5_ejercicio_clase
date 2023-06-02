const express = require('express');
const cors = require('cors');

const app = express();

//middlewares - para poder hacer put y post
app.use(express.json());
app.use(cors()); //evitar bloqueos por uso de puertos en el navegador

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});

