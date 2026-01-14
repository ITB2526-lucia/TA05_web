const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

function validarCampo(input, condicion) {
    const errorMsg = input.parentElement.querySelector(".error-msg");

    if (condicion) {
        input.classList.remove("input-error");
        input.classList.add("input-valid");
        errorMsg.style.display = "none";
        return true;
    } else {
        input.classList.remove("input-valid");
        input.classList.add("input-error");
        errorMsg.style.display = "block";
        return false;
    }
}

function validarFormulario() {
    const nombre = form.nombre;
    const apellidos = form.apellidos;
    const email = form.email;
    const asunto = form.asunto;
    const mensaje = form.mensaje;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    const v1 = validarCampo(nombre, nombre.value.trim() !== "");
    const v2 = validarCampo(apellidos, apellidos.value.trim() !== "");
    const v3 = validarCampo(email, emailValido);
    const v4 = validarCampo(asunto, asunto.value.trim() !== "");
    const v5 = validarCampo(mensaje, mensaje.value.trim() !== "");

    submitBtn.disabled = !(v1 && v2 && v3 && v4 && v5);
}

form.addEventListener("input", validarFormulario);
