const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const path= require('path');
//const dirname = require('path');
//const { fileURLToPath } = require('url');
const route = require('./routes/index');
const db = require('./config/db');
//App Config
const app = express();
const port = 3000;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
console.log(__dirname)
//Middleware
//app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.use(express.json());
//Template Engine
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//DB Config
db.connect();
//Routes init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

