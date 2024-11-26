const express = require('express');
const router = express.Router();
const proyectoEstadisticasController = require('../controller/proyectoEstadisticasController');


router.get('/proyecto-mas-pruebas', proyectoEstadisticasController.proyectoConMasPruebas);

module.exports = router;


//http:localhost:2006/api/estadisticas/proyecto-mas-pruebas