const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const collection1 = require('./mongodb');
const bcrypt = require('bcrypt');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/login", async (req, res) => {
    
     const { login, password } = req.body;

     const user = await collection1.findOne({login: req.body.name});
     console.log(user);
        
        if (!user) {
            return res.json({ error: "User Not found" });
        }

        if (user.password === req.body.password) {            
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` });
        }

        else {
            res.send("incorrect password")
        }
        });

app.use('/', routes);

module.exports = app;