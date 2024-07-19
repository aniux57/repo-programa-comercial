'user strict'

const Sequelize = require('sequelize');
const db = require('../models')
const totales = db.totales;

module.exports = {
    async getTotales(req, res){
        try {            
            const total = await totales.findAll();
            res.send(total)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }

        
    },
    async create(req, res){
        try {            
            const nuevoTotal = await totales.create({
                total: req.body.total
            });
            res.send(nuevoTotal)
        } catch (error) {
            console.error("Error al crear total:", error);
            res.status(500).send("Error al creat total");
        }

        
    },
    async update(req, res){
        try {            
            const total = await totales.update({
                total: req.body.total
            },
            {
                where: {id: req.params.id}
            });

            const totalActualizado = await totales.findByPk(req.params.id);

            res.send(totalActualizado);
        } catch (error) {
            console.error("Error al actualizar total:", error);
            res.status(500).send("Error al actualizar total");
        }

        
    }
}