const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Mongoose = require('./databases/mongo');
const Router = require('./routes/productRoutes');
const port = 1200;

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//leitura de json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//arquivos static
app.use(express.static('public'));


//rotas
app.use('/', Router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
