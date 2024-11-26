const conn = require('../database/database');

class Proyecto {
    async listarTodos() {
        const [rows] = await conn.query('SELECT * FROM proyecto');
        return rows;
    }

    async guardar(datos) {
        const { nombre } = datos;
        const [result] = await conn.query('INSERT INTO proyecto (nombre) VALUES (?)', [nombre]);
        return { id: result.insertId, nombre };
    }

    async actualizar(id, datos) {
        const { nombre } = datos;
        await conn.query('UPDATE proyecto SET nombre = ? WHERE id_proyecto = ?', [nombre, id]);
        return { id, nombre };
    }

    async eliminar(id) {
        await conn.query('DELETE FROM proyecto WHERE id_proyecto = ?', [id]);
        return { mensaje: `Proyecto con ID ${id} eliminado` };
    }
}

module.exports = Proyecto;
