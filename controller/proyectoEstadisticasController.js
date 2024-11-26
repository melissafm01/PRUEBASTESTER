const conn = require('../database/database');

//proyecto con mas pruebas
exports.proyectoConMasPruebas = async (req, res) => {
    try {
        const [resultado] = await conn.query(`
            SELECT p.nombre AS proyecto, COUNT(pr.id_prueba) AS total_pruebas
            FROM proyecto p
            LEFT JOIN prueba pr ON p.id_proyecto = pr.id_proyecto
            GROUP BY p.id_proyecto, p.nombre
            ORDER BY total_pruebas DESC
            LIMIT 5
        `);
        res.json(resultado); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el proyecto con más pruebas: ' + error });
    }
};
