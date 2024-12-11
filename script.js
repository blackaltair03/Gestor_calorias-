document.addEventListener("DOMContentLoaded", function() {

    const categoriaComida = document.getElementById("categoriaComida");
    const caloriasComida = document.getElementById("caloriasComida");
    const guardarComida = document.getElementById("guardarComida");
    
    const categoriaEjercicio = document.getElementById("categoriaEjercicio");
    const caloriasEjercicio = document.getElementById("caloriasEjercicio");
    const guardarEjercicio = document.getElementById("guardarEjercicio");

    const totalComida = document.getElementById("totalComida");
    const totalEjercicio = document.getElementById("totalEjercicio");
    const diferencia = document.getElementById("diferencia");

    let caloriasTotalesComida = 0;
    let caloriasTotalesEjercicio = 0;

    // Función para activar el botón de guardar comida
    function activarBotonComida() {
        if (categoriaComida.value && caloriasComida.value) {
            guardarComida.disabled = false;
        } else {
            guardarComida.disabled = true;
        }
    }

    // Función para activar el botón de guardar ejercicio
    function activarBotonEjercicio() {
        if (categoriaEjercicio.value && caloriasEjercicio.value) {
            guardarEjercicio.disabled = false;
        } else {
            guardarEjercicio.disabled = true;
        }
    }

    // Actualizar el resumen de calorías
    function actualizarResumen() {
        const balance = caloriasTotalesComida - caloriasTotalesEjercicio;
        totalComida.textContent = caloriasTotalesComida;
        totalEjercicio.textContent = caloriasTotalesEjercicio;
        diferencia.textContent = balance;
    }

    // Evento para guardar comida
    guardarComida.addEventListener("click", function() {
        const calorias = parseInt(caloriasComida.value);
        caloriasTotalesComida += calorias;
        actualizarResumen();
        caloriasComida.value = "";
        categoriaComida.value = "";
        guardarComida.disabled = true;
    });

    // Evento para guardar ejercicio
    guardarEjercicio.addEventListener("click", function() {
        const calorias = parseInt(caloriasEjercicio.value);
        caloriasTotalesEjercicio += calorias;
        actualizarResumen();
        caloriasEjercicio.value = "";
        categoriaEjercicio.value = "";
        guardarEjercicio.disabled = true;
    });

    // Activar los botones cuando se llenen los campos
    categoriaComida.addEventListener("change", activarBotonComida);
    caloriasComida.addEventListener("input", activarBotonComida);
    
    categoriaEjercicio.addEventListener("change", activarBotonEjercicio);
    caloriasEjercicio.addEventListener("input", activarBotonEjercicio);

});
