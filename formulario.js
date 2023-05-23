let data = [];

function solicitarInformacion() {

    //debugger; punto de parada
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;

    data.push({ nombre: nombre, origen: origen, destino: destino, cantidad: cantidad, fecha: fecha });

    console.log(data);
}

/*
 función en JavaScript que cada vez que se pulse el botón "filtrar", nos
muestre por consola la información de las solicitudes recibidas que tengan como destino
Canarias, Mallorca o Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
mayuscula o minuscula). */
function filtrar() {
    const result = data.filter(dataForm =>
        dataForm.destino.toLowerCase() === 'galicia' ||
        dataForm.destino.toLowerCase() === 'canarias' ||
        dataForm.destino.toLowerCase() === 'mallorca');

    const tbody = document.getElementById('data');
    let dataForm = [];
    result.forEach(info => {
        dataForm += 
            '<tr>' +
                '<td>' + info.nombre + '</td>' +
                '<td>' + info.origen + '</td>' +
                '<td>' + info.destino + '</td>' +
                '<td>' + info.cantidad + '</td>' +
                '<td>' + info.fecha + '</td>' +
            '</tr>';
    });

    tbody.innerHTML = dataForm;
}