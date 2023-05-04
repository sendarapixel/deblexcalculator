// Función para cargar el archivo XML
function loadXMLDoc(filename) {
  let xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else { // code for IE5 and IE6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", filename, false);
  xhttp.send();
  return xhttp.responseXML;
}

// Función para obtener el costo por libra
function getCosto() {
  const xmlDoc = loadXMLDoc("db.xml");
  const costo = xmlDoc.getElementsByTagName("price")[0].getElementsByTagName("costo")[0].childNodes[0].nodeValue;
  return costo;
}

// Función para realizar el cálculo del costo total
function calcularCostoTotal() {
  const precioUnitario = parseFloat(document.getElementById("precio-unitario").value);
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  if (xmlDoc !== null) {
  
  const costoPorLibra = parseFloat(getCosto());
  const costoTotal = (precioUnitario * cantidad) + ((cantidad / 16) * costoPorLibra);
  return costoTotal.toFixed(2);
   } else {
    alert("La base de datos aún no se ha cargado, por favor espera unos momentos antes de hacer el cálculo.");
  }
}
