
'user strict'
const axios = require('axios')
const db = require('../models');
const mouses = db.mouses;
const telfonos = db.telefonos;
const llaves = db.llaves;
const camaras = db.camaras;

module.exports = {
    async getCountry(req, res){
        try {      
            const respuesta = await axios.get('https://restcountries.com/v3.1/region/europe') 
            
            res.send(respuesta.data);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("Error");
        }
    }
} 