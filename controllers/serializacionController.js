
'user strict'
const axios = require('axios')
const db = require('../models');
const telfonosdb = db.telefonos;
const camarasdb = db.camaras;
const llavesdb = db.llaves;
const mousesdb = db.mouses;

module.exports = {
    async getJsonTelefono(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/datos')
            const telefono = respuesta.data

            const marca = telefono.marca
            const modelo = telefono.modelo
            const pantalla = telefono.pantalla
                const tipoPantalla= pantalla.tipo
                const tamanoPantalla = pantalla.tamaño
            const bateria = telefono.bateria
                const capacidadBateria = bateria.capacidad_mAh
            const placa_base = telefono.placa_base
                const modeloPlaca = placa_base.modelo
            const camara = telefono.camara
                const resolucionCamara = camara.resolucion
            const altavoz = telefono.altavoz
                const potenciaAltavoz = altavoz.potencia
            const microfono = telefono.microfono
                const tipoMicrofono = microfono.tipo

            console.log("Marca :"+marca)
            console.log("modelo :"+modelo) 
            console.log("Tipo Pantalla :"+tipoPantalla)
            console.log("Tamaño Pantalla :"+tamanoPantalla)
            console.log("Capacidad Bateria :"+capacidadBateria)
            console.log("Modelo Placa :"+modeloPlaca)
            console.log("Resolucion Camara :"+resolucionCamara) 
            console.log("Potencia Altavoz :"+potenciaAltavoz)
            console.log("Tipo Microfo :"+tipoMicrofono)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }
    },
    async createJsonTelefono(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/datos')
            const telefono = respuesta.data

            const marca = telefono.marca
            const modelo = telefono.modelo
            const pantalla = telefono.pantalla
                const tipoPantalla= pantalla.tipo
                const tamanoPantalla = pantalla.tamaño
            const bateria = telefono.bateria
                const capacidadBateria = bateria.capacidad_mAh
            const placa_base = telefono.placa_base
                const modeloPlaca = placa_base.modelo
            const camara = telefono.camara
                const resolucionCamara = camara.resolucion
            const altavoz = telefono.altavoz
                const potenciaAltavoz = altavoz.potencia
            const microfono = telefono.microfono
                const tipoMicrofono = microfono.tipo

            const crear_telefono= {
               marca: marca,
               modelo: modelo,
               pantalla: tipoPantalla +", "+ tamanoPantalla,
               bateria: capacidadBateria,
               placa_base:modeloPlaca,
               camara: resolucionCamara, 
               altavoz: potenciaAltavoz,
               microfono: tipoMicrofono
            }
            
            telfonosdb.create(crear_telefono).then(telefono => {
                res.send("Telefono Creado Exitosamente, Nombre: "+telefono.dataValues.marca + " con ID: " + telefono.dataValues.id)
            })
        } catch (error) {
            console.error("Error al crear telefono:", error);
            res.status(500).send("Error al crear telefono");
        }
    },
    async getJsonCamara(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/camara')
            
            const camara = respuesta.data
            const marca = camara.marca
            const modelo = camara.modelo
            const lente = camara.lente
                const tipoLente = lente.tipo
            const sensor = camara.sensor
                const tipoSensor = sensor.tipo
                const resolucionSensor = sensor.resolucion
            const pantalla = camara.pantalla_LCD
                const tamanoPantalla = pantalla.tamaño
            const carcasa = camara.carcasa
                const materialCarcasa = carcasa.material
            const botones = camara.botones
                const cantidadBotones = botones.cantidad

            console.log("Marca :"+marca)
            console.log("modelo :"+modelo) 
            console.log("Tipo Lente :"+tipoLente)
            console.log("Tipo Sensor :"+tipoSensor)
            console.log("Resolucion Sensor :"+resolucionSensor)
            console.log("Tamano Pantalla :"+tamanoPantalla)
            console.log("Material Carcasa :"+materialCarcasa) 
            console.log("Cantidad Botones :"+cantidadBotones)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }
    },
    async createJsonCamara(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/camara')
            
            const camara = respuesta.data
            const marca = camara.marca
            const modelo = camara.modelo
            const lente = camara.lente
                const tipoLente = lente.tipo
            const sensor = camara.sensor
                const tipoSensor = sensor.tipo
                const resolucionSensor = sensor.resolucion
            const pantalla = camara.pantalla_LCD
                const tamanoPantalla = pantalla.tamaño
            const carcasa = camara.carcasa
                const materialCarcasa = carcasa.material
            const botones = camara.botones
                const cantidadBotones = botones.cantidad

            const crearCamara = {
                marca: marca,
                modelo: modelo,
                lente: tipoLente,
                sensor: tipoSensor+", "+resolucionSensor,
                tamanioPantalla: tamanoPantalla,
                materialCarcasa: materialCarcasa,
                cantidadBotones: cantidadBotones
            }

            camarasdb.create(crearCamara)
            .then(camara => {
                res.send("Cámara Creada Exitosamente, Marca: " + camara.marca + " con ID: " + camara.id);
            })
            .catch(error => {
                console.error("Error al crear cámara:", error);
                res.status(500).send("Error al crear cámara");
            });
        
            
        } catch (error) {
            console.error("Error al crear camara:", error);
            res.status(500).send("Error al crear camara");
        }
    },

    async getJsonLlave(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/llaveRemota')
            const llave = respuesta.data

            const marca = llave.marca
            const modelo = llave.modelo
            const carcasa = llave.carcasa
                const materialCarcasa = carcasa.material
            const placa = llave.placa_circuito_impreso
                const tipoPlaca = placa.tipo
            const bateria = llave.bateria
                const tipoBateria = bateria.tipo
                const voltajeBateria = bateria.voltaje
            const transmisor = llave.transmisor_radiofrecuencia
                const frecuencia = transmisor.frecuencia

            console.log("Marca :"+marca)
            console.log("modelo :"+modelo) 
            console.log("Material Carcasa :"+materialCarcasa) 
            console.log("Tipo Placa :"+tipoPlaca) 
            console.log("Tipo Bateria :"+tipoBateria)
            console.log("Voltaje Bateria :"+voltajeBateria) 
            console.log("Frecuencia Transmisor :"+frecuencia)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }
    },
    async createJsonLlave(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/llaveRemota')
            const llave = respuesta.data

            const marca = llave.marca
            const modelo = llave.modelo
            const carcasa = llave.carcasa
                const materialCarcasa = carcasa.material
            const placa = llave.placa_circuito_impreso
                const tipoPlaca = placa.tipo
            const bateria = llave.bateria
                const tipoBateria = bateria.tipo
                const voltajeBateria = bateria.voltaje
            const transmisor = llave.transmisor_radiofrecuencia
                const frecuencia = transmisor.frecuencia

            const createLlave={
                marca: marca,
                modelo: modelo, 
                material: materialCarcasa, 
                tipoPlaca: tipoPlaca, 
                bateria: tipoBateria+", "+voltajeBateria,
                transmisorHz: frecuencia
            }

            llavesdb.create(createLlave).then(llave=>{
                res.send("LLave Creada Exitosamente, Marca: " + llave.marca + " con ID: " + llave.id);
            }).catch(error=>{
                console.error("Error al crear llave:", error);
                res.status(500).send("Error al crear llave");
            })
        } catch (error) {
            console.error("Error al crear llave:", error);
            res.status(500).send("Error al crear llave");
        }
    },
    async getJsonMouse(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/mouse')
            const mouse = respuesta.data

            const marca = mouse.marca
            const modelo = mouse.modelo
            const carcasa = mouse.carcasa
                const materialCarcasa = carcasa.material
            const botones = mouse.botones
                const cantidadBtns = botones.cantidad
            const rueda = mouse.rueda_desplazamiento
                const tipoRueda = rueda.tipo
            const sensor = mouse.sensor_optico
                const dpiSensor = sensor.dpi
            const cable = mouse.cable_USB
                const longitud = cable.longitud

            console.log("Marca :"+marca)
            console.log("modelo :"+modelo) 
            console.log("Material Carcasa :"+materialCarcasa) 
            console.log("Cantidad Botones :"+cantidadBtns) 
            console.log("Tipo Rueda :"+tipoRueda)
            console.log("DPI Sensor :"+dpiSensor) 
            console.log("Longitud Cable :"+longitud)
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }
    },
    async createJsonMouse(req, res){
        try {      
            const respuesta = await axios.get('http://localhost:5001/mouse')
            const mouse = respuesta.data

            const marca = mouse.marca
            const modelo = mouse.modelo
            const carcasa = mouse.carcasa
                const materialCarcasa = carcasa.material
            const botones = mouse.botones
                const cantidadBtns = botones.cantidad
            const rueda = mouse.rueda_desplazamiento
                const tipoRueda = rueda.tipo
            const sensor = mouse.sensor_optico
                const dpiSensor = sensor.dpi
            const cable = mouse.cable_USB
                const longitud = cable.longitud

            const crearMouse ={
                marca: marca,
                modelo: modelo, 
                materialCarcasa: materialCarcasa, 
                cantidadBotones: cantidadBtns,
                tipoRueda: tipoRueda,
                dpiSensor: dpiSensor,
                longCable: longitud
            }
            mousesdb.create(crearMouse).then(mouse=>{                
                res.send("LLave Creada Exitosamente, Marca: " + mouse.marca + " con ID: " + mouse.id);
            })
        } catch (error) {
            console.error("Error al obtener totales:", error);
            res.status(500).send("Error al obtener totales");
        }
    }
} 