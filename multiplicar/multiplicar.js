//require's
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (Number(base) && Number(limite)) {
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`);
                }
            });
        } else {
            reject(`${base} o ${limite} no es un número`);
            return;
        }
    });

}

let listarTabla = (base, limite) => {
    console.log('================'.blue);
    console.log(`==Tabla de ${base}===`.blue);
    console.log('================'.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}