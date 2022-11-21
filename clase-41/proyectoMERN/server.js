/*============================[Modulos]============================*/
import express from 'express';
import cors from 'cors';
import config from './src/utils/config.js';

import RouterNoticias from './src/routes/noticias.routes.js';

const app = express();

/*============================[Middlewares]============================*/
app.use(express.static('public'));
app.use(express.json());

/****  Configurando el cors de forma dinamica */
if(config.srv.entorno == 'development') {
    app.use(cors());
} else {
    app.use(cors({
        origin: 'http://localhost:5000',
        optionsSucessStatus: 200,
        methods: "GET, PUT, POST"
    }));
}
/*============================[Rutas]============================*/
app.use('/api/noticias', (new RouterNoticias()).start());

/*============================[Servidor]============================*/
const PORT = config.srv.port;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});