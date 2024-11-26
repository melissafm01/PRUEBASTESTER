const Proyecto = require('../models/proyecto');
const proyectoInstancia = new Proyecto();

exports.traerProyectos = async (req, res) => {
    try {
        const resultado = await proyectoInstancia.listarTodos();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al traer proyectos: ' + error });
    }
};

exports.adicionarProyecto = async (req, res) => {
    try {
        const resultado = await proyectoInstancia.guardar(req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al adicionar proyecto: ' + error });
    }
};

exports.actualizarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const resultado = await proyectoInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proyecto: ' + error });
    }
};

exports.eliminarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await proyectoInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar proyecto: ' + error });
    }
};
