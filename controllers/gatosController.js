
'user strict'
const axios = require('axios')
const db = require('../models');
const telefonos = db.telefonos;
const camaras = db.camaras;
const llaves = db.llaves;
const mouses = db.mouses;

module.exports = {
    async getGatos(req, res){
        try {      
            const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search') 
            
            res.send(respuesta.data);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("Error");
        }
    }
} 