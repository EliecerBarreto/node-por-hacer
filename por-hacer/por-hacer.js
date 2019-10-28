const fs = require('fs');

let listarPorHacer = [];

const guardarTarea = () => {
    let data = JSON.stringify(listarPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const cargarBD = () => {
    try {
        listarPorHacer = require('../db/data.json');
    } catch (error) {
        listarPorHacer = [];
    }


}

const getListado = () => {
    cargarBD();
    return listarPorHacer;
}


const crear = (descripcion) => {

    cargarBD();


    let porHacer = {
        descripcion,
        completado: false
    }

    listarPorHacer.push(porHacer);
    guardarTarea();
    return porHacer;

}

const actualizarListado = (descripcion, completado = true) => {
    cargarBD();
    let index = listarPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listarPorHacer[index].completado = completado;
        guardarTarea();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarBD();
    let nuevoListado = listarPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listarPorHacer.length) {
        return false;
    } else {
        listarPorHacer = nuevoListado;
        guardarTarea();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizarListado,
    borrar
}