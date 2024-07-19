const { Router } = require('express');
const router = Router();

const XMLController = require('../controllers/XMLController')
const XMLGatosCont = require('../controllers/XMLGatosCont');
const totalesController = require('../controllers/totalesCont');
const registrosController = require('../controllers/registrosController');
const serializacionController = require('../controllers/serializacionController');
const countriesController = require('../controllers/countriesController');
const gatosController = require('../controllers/gatosController');

module.exports = (app) => {
     router.get('/xml/get', XMLController.get)
     router.get('/xml/getGatos', XMLGatosCont.getGatos)
     router.get('/xml/getAllGatos', XMLGatosCont.getAllGatos)

     router.get('/getTelefono', serializacionController.getJsonTelefono)
     router.post('/createTelefono', serializacionController.createJsonTelefono)
     router.get('/getCamara', serializacionController.getJsonCamara)
     router.post('/createCamara', serializacionController.createJsonCamara)
     router.get('/llaveRemota', serializacionController.getJsonLlave)
     router.post('/createllaveRemota', serializacionController.createJsonLlave)
     router.get('/mouse', serializacionController.getJsonMouse)
     router.get('/createMouse', serializacionController.createJsonMouse)

     router.get('/getTotales', totalesController.getTotales)
     router.post('/create', totalesController.create)
     router.put('/update/:id', totalesController.update)

     router.get('/registros', registrosController.getAll)
     router.post('/ingresar', registrosController.ingreso)
     router.put('/salir/:id', registrosController.salida)
     router.get('/activos', registrosController.personasActivas)


     
     router.get('/getCountry', countriesController.getCountry)
     router.get('/getGatos', gatosController.getGatos)

     app.use('/', router);
}