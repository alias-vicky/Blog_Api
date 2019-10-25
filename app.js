// Importation de modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



// Instanciation de l'application
const app = express();


// Connexion à la base données
const database = require('./config/database').database;
mongoose.connect(database, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log('Connection à la base mongodb...');
        })
        .catch((err) => console.log(err));


// Middleware du cors
app.use(cors());

// Middleware du body-parser
app.use(bodyParser.json());


// Definition de port
const port = process.env.port || 3000;

// Chemin d'accès
app.get('/', (req, res, next) => {
    res.send('<h1>Bienvenue sur mon blog</h1>');
});

// Middleware des routes
const postRoute = require('./routes/postRoute');
app.use('/api/posts', postRoute);

// Lancement de l'application
app.listen(port, () => {
    console.log('Serveur lancé au port', port);
});