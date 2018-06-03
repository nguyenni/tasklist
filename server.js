// references for the whole project
// https://codehandbook.org/creating-a-web-app-using-angular-4/
// https://codehandbook.org/creating-a-web-app-using-angular-4-mongodb/
// https://coursetro.com/posts/code/84/Setting-up-an-Angular-4-MEAN-Stack-(Tutorial)
// https://www.youtube.com/watch?v=PFP0oXNNveg


// https://ng-bootstrap.github.io/#/components/datepicker/examples
// https://ng-bootstrap.github.io/#/components/modal/examples
// https://ng-bootstrap.github.io/#/components/rating/examples

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/tasklist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/tasklist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));