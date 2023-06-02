const fs = require('fs');

class Vehiculo{
    constructor(id, marca, modelo, asientos){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
    }
    findAll(){
        let resultadoJson = fs.readFileSync(__dirname+'/data.json', 'utf8')
        let resultado = JSON.parse(resultadoJson)
        return resultado.autos
    }
    findById(id){
        let autos = this.findAll()
        return autos.find(auto => auto.id == id)
    }
    findByMarca(marca){
        let autos = this.findAll()
        return autos.filter(auto => auto.marca.toLowerCase() == marca.toLowerCase())
    }
}
let auto = new Vehiculo()
console.log(auto.findAll())
console.log(auto.findById(4))
console.log(auto.findByMarca('ferrari'))