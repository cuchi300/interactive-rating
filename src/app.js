// Variables
const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const cardSubmit = document.querySelector('#card-submit');
const lista = document.querySelectorAll('li');


const valor = {
    numero: ''
}

// Event Listeners
eventListeners();
function eventListeners() {
    lista.forEach( li => {
        li.addEventListener('click', () => {
            valor.numero = li.textContent;
            li.classList.add('bg-gris-claro');
        });
    });


    formulario.addEventListener('submit', validarFormulario);
    
}


// Funciones
function validarFormulario(e) {
    e.preventDefault();

    if(valor.numero === '') {
        mostrarError('Selecciones un valor');
    } else {
        
        crearHTML();
    }
}

function crearHTML() {
    // const selected = document.createElement('DIV');
    cardSubmit.innerHTML = `
    <div class="card-submit p-6 bg-azul-muy-oscuro rounded-3xl text-center" id="card-submit">
    
        <img class="mx-auto my-5" src="../images/illustration-thank-you.svg" alt="imagen thanks">
        <p class="rounded-3xl bg-azul-oscuro max-w-max px-3 text-naranja py-1 mx-auto">You selected ${valor.numero} out of 5</p>
        <h3 class="pt-5 text-3xl font-bold">Thank you!</h3>

        <p class="my-8 text-gris-medio ">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

    </div>
    `;

    setTimeout(() => {
        valor.numero = '';

        formulario.reset();
        
        window.location.reload();
    }, 5000);
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('bg-red-600', 'rounded-3xl', 'p-3', 'text-blanco', 'text-center', 'uppercase', 'mt-3');
    mensajeError.textContent = mensaje;

    formulario.appendChild(mensajeError);

    setInterval(() => {
        mensajeError.remove();
    }, 2000);
}
