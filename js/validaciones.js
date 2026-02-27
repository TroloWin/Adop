// Validar email
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar contraseña (mínimo 6 caracteres)
function esPasswordValida(password) {
    return password.length >= 6;
}

// Verificar si el email está permitido
function esEmailPermitido(email) {
    const emailsPermitidos = [
        'samael@email.com',
        'ana.garcia@email.com'
    ];
    return emailsPermitidos.includes(email);
}

// Formatear fecha
function formatearFecha(fecha) {
    if (!fecha) return 'No disponible';
    
    if (fecha.toDate) {
        fecha = fecha.toDate();
    }
    
    return new Date(fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
    alert('❌ ' + mensaje);
}

// Mostrar mensaje de éxito
function mostrarExito(mensaje) {
    alert('✅ ' + mensaje);
}

// Confirmar acción
function confirmarAccion(mensaje) {
    return confirm(mensaje);
}