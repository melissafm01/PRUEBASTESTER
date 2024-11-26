const express = require('express');
const router = express.Router();
const testerEstadisticasController = require('../controller/testerEstadisticasController');


router.get('/tester-mas-pruebas', testerEstadisticasController.testerConMasPruebas);

module.exports = router;


//http:localhost:2006/api/estadisticas/tester-mas-pruebas