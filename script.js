document.getElementById('formulario').addEventListener('submit'),(event) => {
    event.preventDefault()

    //Validar nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.ariaValueMax.trim() === ''){
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //validar correo

    //validar contraseña

    //si todos los campos son validos enviar formulario





}