import express from 'express'; // Importa o módulo express.
import servicoBuscarFatoPorAno from './servico/servico.js'; // Importa função da camada de serviço

const app = express(); // Cria uma instância do módulo express.

import cors from 'cors';

app.use(cors());

app.get('/', (req, res) => { // Cria uma rota com tratamento de requisições e reposta.
    let ano_fato = Number(req.query.fato);

    let fato_encontrado = servicoBuscarFatoPorAno(ano_fato);

    if(fato_encontrado != ''){
        res.json({fato: fato_encontrado})       
    }else{
        res.status(400).json({Erro: 'Verifique o dados enviados!'});
    }
})

// app.listen(8080, () =>{ // Inicia servidor Express e faz com que ele escute as conexões na porta 8080.
//     console.log('Servidor node iniciado');
// })

export default app;