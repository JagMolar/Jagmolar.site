// Envio correo con js
function sendEmail() {
	
		var nombre = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var m = document.getElementById("message").value;
		var robot = document.getElementById("demo-human").checked;
		var texto = m;
		// console.log(nombre);
		// console.log(texto);
		// console.log(robot);
		if (nombre.length<1 || email.length<1 || m.length<1 || robot == false) {
				alert("Revise el formulario.\nCompruebe los campos y el check.");  
			} else {
				alert("Hay un problema desde el servidor.\nPara evitar errores, vamos a redirigirle a su cliente de correo.");  

				let link = document.createElement('a')

				link.href="mailto:juangmuelas@gmail.com?subject=Correo desde mi web personal&body=Hola, soy  "+nombre+
				" y mi Email es: "+email+
				"\n. \nAsunto: "+texto
				link.click()

				alert("Gracias "+nombre+". Su mensaje ha sido enviado con exito.")
				  
				document.getElementById("contacto").reset();
			
			}
	} 

function test(){
console.log("funciona");
}

/* Title focus START */
/* Changing the title text when the focus is out */
  var title = document.title;
  var blurMessage = "Soy Juan, sigo aquí!!";
  window.addEventListener("blur", function(){
    document.title = blurMessage;
  });
  window.addEventListener("focus", function(){
    document.title = title;
  });
/* Title focus END */

