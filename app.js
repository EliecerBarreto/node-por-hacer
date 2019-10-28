//const argv = require('yargs').argv;

const color = require('colors');
const argv = require('./config/yargs').argv;
const option = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log(argv.descripcion);
        let tarea = option.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = option.getListado();
        console.log('=======Listado de Tareas======'.green);
        for (let tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Por Hacer:', tarea.completado);
            console.log('==========================');
        }

        break;
    case 'actualizar':
        let actualizado = option.actualizarListado(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = option.borrar(argv.descripcion);
        console.log(borrado);
}