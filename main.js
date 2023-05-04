// Event listener para el botón "Calcular"
document.getElementById("calcular-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const precioUnitario = parseFloat(document.getElementById("precio-unitario").value);
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const costoTotal = calcularCostoTotal();

  // Mostramos el costo total en la página
  document.getElementById("costo-total").innerHTML = `$ ${costoTotal}`;

  // Creamos la tabla de la factura
  const tablaFactura = `
    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Costo Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Producto 1</td>
          <td>${cantidad}</td>
          <td>$ ${precioUnitario.toFixed(2)}</td>
          <td>$ ${costoTotal}</td>
        </tr>
      </tbody>
    </table>
  `;

  // Insertamos la tabla en la página
  document.getElementById("factura").innerHTML = tablaFactura;
});
