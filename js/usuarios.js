// Obtener todos los usuarios
async function obtenerTodosLosUsuarios() {
    try {
        const snapshot = await db.collection('usuarios').get();
        const usuarios = [];
        snapshot.forEach(doc => {
            usuarios.push({
                uid: doc.id,
                ...doc.data()
            });
        });
        return usuarios;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}

// Activar/Desactivar usuario
async function cambiarEstadoUsuario(userId, activar) {
    try {
        await db.collection('usuarios').doc(userId).update({
            activo: activar
        });
        return true;
    } catch (error) {
        console.error('Error al cambiar estado:', error);
        return false;
    }
}

// Cambiar rol de usuario (hacer admin o quitar admin)
async function cambiarRolUsuario(userId, hacerAdmin) {
    try {
        await db.collection('usuarios').doc(userId).update({
            esAdmin: hacerAdmin
        });
        return true;
    } catch (error) {
        console.error('Error al cambiar rol:', error);
        return false;
    }
}

// Obtener estadísticas de usuarios
async function obtenerEstadisticas() {
    try {
        const snapshot = await db.collection('usuarios').get();
        const usuarios = [];
        snapshot.forEach(doc => usuarios.push(doc.data()));
        
        return {
            total: usuarios.length,
            admins: usuarios.filter(u => u.esAdmin).length,
            adoptantes: usuarios.filter(u => !u.esAdmin).length,
            activos: usuarios.filter(u => u.activo).length,
            inactivos: usuarios.filter(u => !u.activo).length
        };
    } catch (error) {
        console.error('Error al obtener estadísticas:', error);
        return {
            total: 0,
            admins: 0,
            adoptantes: 0,
            activos: 0,
            inactivos: 0
        };
    }
}