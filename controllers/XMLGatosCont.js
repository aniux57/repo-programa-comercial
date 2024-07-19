'user strict'

const Sequelize = require('sequelize');
const db = require('../models')
const Gato = db.gato;
const xmlbuilder = require('xmlbuilder');
const gatosController = require('./gatosController');

module.exports = {
    async getGatos(req, res){
        const id = req.body.id;
        await Gato.findByPk(id).then( gatos => {

            const id = gatos.dataValues.id;
            const nombre = gatos.dataValues.nombre;
            const edad = gatos.dataValues.edad;
            const tipo = gatos.dataValues.tipo;

            const xml = xmlbuilder.create('gatos')
            .ele('gato', { id: id })
                .ele('nombre', nombre)
                .up()
                .ele('edad', edad)
                .up()
                .ele('tipo', tipo)
            .up()
            .up()
            .end({ pretty: true });

            res.send(xml)

        }).catch(error => res.status(400).send(error));
    },
    async getAllGatos(req, res){
        const gatos = await Gato.findAll();

            const xml = xmlbuilder.create('gatos')

            gatos.forEach(Gato => {
                const id = Gato.dataValues.id;
                const nombre = Gato.dataValues.nombre;
                const edad = Gato.dataValues.edad;
                const tipo = Gato.dataValues.tipo;
                xml.ele('Gato', { id: id })
                    .ele('nombre', nombre)
                    .up()
                    .ele('edad', edad)
                    .up()
                    .ele('tipo', tipo)
                    .up()
                    .up()
            });

            const xmlRes = xml.end({ pretty: true });
            res.send(xmlRes)

        
    }

}