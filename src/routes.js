const express = require('express');

const OngControlers = require('./controlers/OngControlers');
const incidentesControles = require('./controlers/IncidenteControlers');
const ProfileControles = require('./controlers/ProfileControles');
const sessionControler = require('./controlers/sessionControler');


const routes = express.Router(); 

routes.post('/sessions',sessionControler.create);

routes.get('/ongs', OngControlers.index);
routes.post('/ongs', OngControlers.create);

routes.get('/profile',ProfileControles.index);

routes.get('/incidents', incidentesControles.index); 
routes.post('/incidents', incidentesControles.create); 
routes.delete('/incidents/:id',incidentesControles.delete);


module.exports = routes;