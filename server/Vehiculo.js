const fs = require('fs');
const {v4:uuid} = require('uuid')

class Vehiculo{
    constructor(id, marca, modelo, asientos){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.asientos = asientos;
    }
    findAllObj(){
        let resultadoJson = fs.readFileSync(__dirname+'/data.json', 'utf8')
        let resultado = JSON.parse(resultadoJson)
        return resultado
    }
    findAll(){
        return this.findAllObj().autos
    }
    findById(id){
        let autos = this.findAll()
        console.log(autos)
        return autos.find(a => a.id == id)
    }
    findByMarca(marca){
        let autos = this.findAll()
        return autos.filter(auto => auto.marca.toLowerCase() == marca.toLowerCase())
    }
    save(){
        let objAuto = {
            id: uuid().slice(0,6),
            marca: this.marca,
            modelo: this.modelo,
            asientos: this.asientos
        }
        let resultado = this.findAllObj()
        resultado.autos.push(objAuto)
        fs.writeFileSync(__dirname+'/data.json', JSON.stringify(resultado, null, 4), 'utf8')
        return objAuto
    }
    delete(id){
        let resultado = this.findAllObj()
        let encontrado = this.findById(id)
        if(encontrado){
            resultado.autos = resultado.autos.filter(auto => auto.id != id)
            fs.writeFileSync(__dirname+'/data.json', JSON.stringify(resultado, null, 4), 'utf8')
            return resultado
        }else{
            return {message:`El id: ${id} no fue necontrado`}
        }
    }
    update(){
        let resultado = this.findAllObj()
        let filtrado = resultado.autos.find(auto => auto.id == this.id)
        if(filtrado){
            filtrado.marca = this.marca || filtrado.marca
            filtrado.modelo = this.modelo || filtrado.modelo
            filtrado.asientos = this.asientos || filtrado.asientos
            fs.writeFileSync(__dirname+'/data.json', JSON.stringify(resultado, null, 4), 'utf8')
            return filtrado
        } else {
            return {message:`El id: ${this.id} no fue necontrado`}
        }
    }
}

module.exports = {
    Vehiculo
}

/* let auto = new Vehiculo()
console.log(auto.findById('65d0be')) */

/* console.log(auto.findAll())
console.log(auto.findByMarca('chiripas'))
let auto2 = new Vehiculo(1, 'Ferrari', 'F40', 3)
let resultado = auto2.update()
console.log(resultado)
console.log(auto2.findAll()) */