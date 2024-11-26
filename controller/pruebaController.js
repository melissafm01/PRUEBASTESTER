const Prueba = require('../models/prueba');
const pruebaInstancia = new Prueba();

exports.traerPruebas = async (req, res) => {
    try {
        const resultado = await pruebaInstancia.listarTodos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al traer pruebas: ' + error });
    }
};

exports.adicionarPrueba = async (req, res) => {
    try {
        const resultado = await pruebaInstancia.guardar(req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al adicionar prueba: ' + error });
    }
};

exports.actualizarPrueba = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const resultado = await pruebaInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar prueba: ' + error });
    }
};

exports.eliminarPrueba = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pruebaInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar prueba: ' + error });
    }
};
