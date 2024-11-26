const Tester = require('../models/tester');
const testerInstancia = new Tester();

exports.traerTester = async (req, res) => {
    try {
        const resultado = await testerInstancia.listarTodos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al traer testers: ' + error });
    }
};

exports.adicionarTester = async (req, res) => {
    try {
        const resultado = await testerInstancia.guardar(req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al adicionar tester: ' + error });
    }
};

exports.actualizarTester = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const resultado = await testerInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar tester: ' + error });
    }
};

exports.eliminarTester = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await testerInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar tester: ' + error });
    }
};
