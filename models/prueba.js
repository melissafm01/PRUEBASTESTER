const conn = require('../database/database');

class Prueba {
    async listarTodos() {
        const [rows] = await conn.query('SELECT * FROM prueba');
        return rows;
    }

    async guardar(datos) {
        const { nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto } = datos;
        const [result] = await conn.query(
            'INSERT INTO prueba (nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto) VALUES (?, ?, ?, ?, ?)',
            [nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto]
        );
        return { id: result.insertId, nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto };
    }

    async actualizar(id, datos) {
        const { nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto } = datos;
        await conn.query(
            'UPDATE prueba SET nombre_prueba = ?, fecha_inicio = ?, fecha_final = ?, id_tester = ?, id_proyecto = ? WHERE id_prueba = ?',
            [nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto, id]
        );
        return { id, nombre_prueba, fecha_inicio, fecha_final, id_tester, id_proyecto };
    }

    async eliminar(id) {
        await conn.query('DELETE FROM prueba WHERE id_prueba = ?', [id]);
        return { mensaje: `Prueba con ID ${id} eliminada` };
    }
}

module.exports = Prueba;
