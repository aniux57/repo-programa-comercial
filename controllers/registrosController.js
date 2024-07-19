
'user strict'

const Sequelize = require('sequelize');
const db = require('../models')
const dbRegistros = db.registros;

module.exports = {
    async getAll(req, res){
        try {            
            const registros = await dbRegistros.findAll();
            res.send(registros)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }

        
    },
    async personasActivas(req, res){
        try {     
            const countActivos = await dbRegistros.count({ where: { estado: 1 } });       
            const registros = await dbRegistros.findAll({
                where: {estado: 1}
            });
            
            const respuesta = {
                totalActivos: countActivos,
                registros: registros
            };
        
            res.send(respuesta);

        } catch (error) {
            console.error("Error al obtener Activos:", error);
            res.status(500).send("Error al obtener Activos");
        }

        
    },
    async ingreso(req, res){
        try {          
            const ahora = new Date();
            const horaActual = ahora.toLocaleTimeString();

            const registro = await dbRegistros.create({
                nombre: req.body.nombre,
                estado: 1,
                entrada: horaActual,
                salida: null
            });
            res.send(registro)
        } catch (error) {
            console.error("Error al registrar:", error);
            res.status(500).send("Error al registrar");
        }
    },
    async salida(req, res){
        try {          
            const ahora = new Date();
            const horaActual = ahora.toLocaleTimeString();

            const registro = await dbRegistros.update({
                estado: 0,
                salida: horaActual
            },
            {
                where: {id: req.params.id}
            });
            res.send("Salida Registrad, Afectado:" + registro)
        } catch (error) {
            console.error("Error al registrar:", error);
            res.status(500).send("Error al registrar");
        }
    }
} 