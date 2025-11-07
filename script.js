document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de "Order Now"
    const orderButtons = document.querySelectorAll('#orderNowHero, #orderNowProduct');
    
    // ** NOTA: Los enlaces 'Learn more' ahora se gestionan directamente por HTML (href) y ya no necesitan JavaScript. **

    // Función para manejar el clic en "Order Now"
    function handleOrderNow(event) {
        event.preventDefault(); // Evita la acción por defecto si fuera un enlace
        alert('¡Genial! Serás redirigido a la página de pago para Order Now.');
        // Aquí podrías añadir la lógica para redirigir a una página de carrito/checkout
    }

    // Asigna el evento a todos los botones de "Order Now"
    orderButtons.forEach(button => {
        button.addEventListener('click', handleOrderNow);
    });
});