const {Vehiculo} = require('./Vehiculo.js');

const leerVehiculos = ()=>{
    let autos = new Vehiculo();
    console.log(autos.findAll())
};

const buscarVehiculoPorId = (id)=>{
    let autos = new Vehiculo()
    let resultado = autos.findById(id)
    if(resultado){
        console.log(resultado);
    } else {
        console.log(`vehiculo con id: ${id} no fue encontrado`);
    }
};

const buscarVehiculoPorMarca = (marca)=>{
    let autos = new Vehiculo()
    let resultado = autos.findByMarca(marca)
    if(resultado){
        console.log(resultado);
    } else {
        console.log(`vehiculo con la marca: ${marca} no fue encontrado`);
    }
};

const crearVehiculo = (marca, modelo, asientos)=>{
    let auto = new Vehiculo(undefined, marca, modelo, asientos)
    let resultado = auto.save()
    console.log('Vehiculo creado: ',resultado)     
};

const eliminarVehiculo = (id)=>{
    let auto = new Vehiculo()
    let resultado = auto.delete(id)
    console.log(resultado)    
};

const modificar = (id, marca, modelo, asientos)=>{
    console.log(id, marca, modelo, asientos)
    marca == 'undefined'? marca = undefined:marca=marca
    modelo == 'undefined'? modelo = undefined:modelo=modelo
    asientos == 'undefined'? asientos = undefined:asientos=asientos
    let auto = new Vehiculo(id, marca, modelo, asientos)
    let resultado = auto.update()
    console.log(resultado)
};

let argumentos = process.argv.slice(2);
let comando = argumentos[0].toLowerCase();

switch(comando){
    case 'leer':
        leerVehiculos()
        break;
    case 'buscarid':
        let id = argumentos[1]
        buscarVehiculoPorId(id)
        break;
    case 'buscarmarca':
        let marca = argumentos[1]
        buscarVehiculoPorMarca(marca)
        break;
    case 'crear':
        let marcaSave = argumentos[1]
        let modelo = argumentos[2]
        let asientos = argumentos[3]
        crearVehiculo(marcaSave, modelo, asientos)
        break;
    case 'eliminar':
        let idDelete = argumentos[1]
        eliminarVehiculo(idDelete)
        break;
    case 'modificar':
        let idMod = argumentos[1]
        let marcaMod = argumentos[2]
        let modeloMod = argumentos[3]
        let asientosMod = argumentos[4]
        modificar(idMod, marcaMod, modeloMod, asientosMod)
        break;
    default:
        console.log('Comando no reconocido')
};
