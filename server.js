const express = require('express');
const routes = require('./controllers');
const path = require('path');
require('dotenv').config();

const session = require('express-session');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const hbs = exphbs.create({});

const sess = {
  secret: 'Hello',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Sync Seeds
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening!'));
});