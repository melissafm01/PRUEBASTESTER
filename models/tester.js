const conn = require('../database/database');

class Tester {
    async listarTodos() {
        const [rows] = await conn.query('SELECT * FROM tester');
        return rows;
    }

    async guardar(datos) {
        const { nombre, apellido, telefono } = datos;
        const [result] = await conn.query(
            'INSERT INTO tester (nombre, apellido, telefono) VALUES (?, ?, ?)',
            [nombre, apellido, telefono]
        );
        return { id: result.insertId, nombre, apellido, telefono };
    }

    async actualizar(id, datos) {
        const { nombre, apellido, telefono } = datos;
        await conn.query(
            'UPDATE tester SET nombre = ?, apellido = ?, telefono = ? WHERE id_tester = ?',
            [nombre, apellido, telefono, id]
        );
        return { id, nombre, apellido, telefono };
    }

    async eliminar(id) {
        await conn.query('DELETE FROM tester WHERE id_tester = ?', [id]);
        return { mensaje: `Tester con ID ${id} eliminado` };
    }
}

module.exports = Tester;
