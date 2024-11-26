const conn = require('../database/database');

// tester que ha realizado más pruebas
exports.testerConMasPruebas = async (req, res) => {
    try {
        const [resultado] = await conn.query(`
            SELECT t.nombre AS tester, t.apellido, t.telefono, COUNT(pr.id_prueba) AS total_pruebas
            FROM tester t
            LEFT JOIN prueba pr ON t.id_tester = pr.id_tester
            GROUP BY t.id_tester, t.nombre, t.apellido, t.telefono
            ORDER BY total_pruebas DESC
            LIMIT 1
        `);
        res.json(resultado);  
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el tester con más pruebas: ' + error });
    }
};
