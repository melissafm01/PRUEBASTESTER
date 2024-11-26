const express = require("express");
const app = express();
app.use (express.json());
require("dotenv").config();

const pruebaRouter = require("./router/pruebaRouter");
const proyectoRouter = require("./router/proyectoRouter");
const testerRouter = require("./router/testerRouter");
const proyectoEstadisticasRouter = require("./router/proyectoEstadisticasRouter"); // Ruta para proyectos
const testerEstadisticasRouter = require("./router/testerEstadisticasRouter");     // Ruta para testers

app.use("/api/proyecto", proyectoRouter);
app.use("/api/prueba", pruebaRouter);
app.use("/api/tester", testerRouter);
app.use("/api/estadisticas", proyectoEstadisticasRouter);  // Usamos las rutas de estadísticas de proyectos
app.use("/api/estadisticas", testerEstadisticasRouter);    // Usamos las rutas de estadísticas de testers

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("servidor corriendo" + PORT);
});


