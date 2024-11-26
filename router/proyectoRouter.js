const express = require('express');
const router = express.Router();
const proyectoController = require('../controller/proyectoController');


router.get('/', proyectoController.traerProyectos);
router.post('/', proyectoController.adicionarProyecto);
router.put('/:id', proyectoController.actualizarProyecto);
router.delete('/:id', proyectoController.eliminarProyecto);

module.exports = router;
