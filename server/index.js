const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.get('/api/v1/movie', (req,res)=>{
        return res.json({message:'Hello world'});
    });

    server.post('/api/v1/movie', (req,res)=>{
        const body = req.body;
        return res.json({...body, 'created':'today','author':'filip'});
    });

    server.patch('/api/v1/movie/:id', (req,res)=>{
        const {id} = req.params;
        return res.json({message:`Updating movie id: ${id}` });
    });

    server.delete('/api/v1/movie/:id', (req,res)=>{
        const {id} = req.params;
        return res.json({message:`Deleting movie id: ${id}` });
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
