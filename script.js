const productoSelect = document.getElementById('producto');
const cantidadInput = document.getElementById('cantidad');
const totalInput = document.getElementById('total');

productoSelect.addEventListener('change', calcularTotal);
cantidadInput.addEventListener('input', calcularTotal);

function calcularTotal() {
    const precio = productoSelect.options[productoSelect.selectedIndex].dataset.precio;
    const cantidad = cantidadInput.value;
    const total = precio * cantidad;
    totalInput.value = total.toFixed(2);
}