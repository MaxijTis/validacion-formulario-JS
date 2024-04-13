const firebaseConfig = {
    apiKey: "AIzaSyDSDvsnYpIGYr8ylg5WgTGWcNcQhsFeV_c",
    authDomain: "datos-de-formulario-eab6f.firebaseapp.com",
    projectId: "datos-de-formulario-eab6f",
    storageBucket: "datos-de-formulario-eab6f.appspot.com",
    messagingSenderId: "321653879408",
    appId: "1:321653879408:web:b2204a3b2d2664d90d3ab5",
    measurementId: "G-4K802GFHQQ"
  };

//Iniialize Firebase
firebase.initializeApp(firebaseConfig);

//inicialize cloud firestore y tome el servcio de referencia
const db = firebase.firestore();



document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //Validar nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //validar correo
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //patron de validacion basico
    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introducí un mail válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //validar contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'Por favor, introducí una contraseña válida. Debe tener mas de 8 caracteres, mayusculas, minusculas, numeros y caracteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //si todos los campos son validos enviar formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        //Backend que reciba la info
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        alert('El formuario se ha enviado con exito.')
        document.getElementById('formulario').reset();
    }
});