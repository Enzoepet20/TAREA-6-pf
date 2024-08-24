fetch('estudiantes.json')
.then(response => response.json())
.then(data => {
    const tbody = document.querySelector('#tablaEstudiantes tbody');
    data.forEach(estudiante => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${estudiante.id}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.casa}</td>
        `;
        tbody.appendChild(fila);
    });
})
.catch(error => console.error('Error al cargar los datos:', error));