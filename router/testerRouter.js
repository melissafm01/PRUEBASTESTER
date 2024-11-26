const express = require("express");
const router = express.Router();
const testerController = require("../controller/testerController");

router.get("/", testerController.traerTester);
router.post("/", testerController.adicionarTester);
router.put("/:id", testerController.actualizarTester);
router.delete("/:id", testerController.eliminarTester);

module.exports = router;
