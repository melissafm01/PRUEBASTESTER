const express = require('express');
const router = express.Router();
const pruebaController = require('../controller/pruebaController');

router.get('/', pruebaController.traerPruebas);
router.post('/', pruebaController.adicionarPrueba);
router.put('/:id', pruebaController.actualizarPrueba);
router.delete('/:id', pruebaController.eliminarPrueba);

module.exports = router;
