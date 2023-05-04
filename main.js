let xmlDoc;
let costoLibra;

// Cargar la base de datos XML
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        xmlDoc = this.responseXML;
        costoLibra = parseFloat(xmlDoc.getElementsByTagName("price")[0].getElementsByTagName("costo")[0].childNodes[0].nodeValue);
        procesarBaseDeDatos(xmlDoc);
    }
};
xhttp.open("GET", "db.xml", true);
xhttp.send();

// Procesar los datos del formulario y calcular el precio total
let form = document.querySelector("#formulario");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let precioUnitario = parseFloat(document.getElementById("precio-unitario").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let precioTotal = precioUnitario * cantidad * peso * costoLibra;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El precio total en libras es: ${precioTotal.toFixed(2)}`;
});

// Procesar la base de datos XML
function procesarBaseDeDatos(xmlDoc) {
    let precios = xmlDoc.getElementsByTagName("price");
    let tablaPrecios = document.getElementById("tabla-precios");
    for (let i = 0; i < precios.length; i++) {
        let id = precios[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        let peso = precios[i].getElementsByTagName("peso")[0].childNodes[0].nodeValue;
        let costo = precios[i].getElementsByTagName("costo")[0].childNodes[0].nodeValue;
        let fila = `
            <tr>
                <td>${id}</td>
                <td>${peso}</td>
                <td>${costo}</td>
            </tr>
        `;
        tablaPrecios.innerHTML += fila;
    }
}
