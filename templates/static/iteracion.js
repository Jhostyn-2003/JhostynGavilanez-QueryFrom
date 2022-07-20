/**
 * En este caso lo que se hace es crear nuestra query en javascript para establecer las respectivas validaciones 
 * del formulario de contactos, es decir, mediante una funcion nos va a permitir poder establecer dichas leyes, tal como se 
 * ven a continuacion: 
*/

$().ready(function() {
    $("#formularioJJGS").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 5
            },
            apellido: {
                required: true,
                minlength: 5
            },
            edad: {
                required: true,
                minlength:2
            },
            email: {
                required: true,
                email: true
            },
            mensaje:{
                required: true,
                maxlength: 100
            },
            captcha: {
                required: true,
            }
        },

        /**
         * Aqui se muestran los mensajes de las validaciones para establecerse, 
         * en nuestro javascript.
         */
        messages: {
            nombre: {
                required: "Completa este campo",
                minlength: "Por favor, ingresa tu datos max. 5 o más Caract."
            },
            apellido :{
                required: "Completa este campo",
                minlength: "Por favor, ingresa tu datos  max. 5 o más Caract."
            },
            edad: {
                required: "Completa este campo",
                minlength: "Por favor, ingresar su edad solo se acepta 2 numeros"
            },
            email:{ 
                required:"Completa este campo",
             maxlength: "Ingresa correctamente tu datos con el @" ,
        },
            mensaje: {
                required: "Completa este campo",
            maxlength: "Completa este campo"
            },
            captcha: "Completa este campo",
            captcha: {
                required:"Ingresa los datos que se adjunta en el catchap",
                maxlength: "Ingresa correctamente los datos"
            }
        }
    });
  });

