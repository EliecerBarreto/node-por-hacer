const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}




const argv = require('yargs')
    .command('crear', 'crea una tarea', { descripcion })
    .command('actualizar', 'actualiza el estatus de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}