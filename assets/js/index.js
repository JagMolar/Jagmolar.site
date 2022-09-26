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

				alert("Gracias "+nombre+" por usar mi área de contacto. \nSu mensaje ha sido redirigido para el envío con exito.")
				  
				document.getElementById("contacto").reset();
			
			}
} 

function sendingEmail() {
	
	var nombre = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var m = document.getElementById("message").value;
	var robot = document.getElementById("demo-human").checked;
	var texto = m;
	// console.log(nombre);
	// console.log(texto);
	// console.log(robot);
	if (nombre.length<1 || email.length<1 || m.length<1 || robot == false) {
			alert("Review the form.\nCheck the fields and check.");  
		} else {
			alert("There is a problem from the server.\To avoid errors, we will redirect you to your mail client.");  

			let link = document.createElement('a')

			link.href="mailto:juangmuelas@gmail.com?subject=Email from my Personal website&body=Hi, I'm  "+nombre+
			" and my email: "+email+
			"\n. \nSubject: "+texto
			link.click()

			alert("Thank you "+nombre+" for using my contact area. \nYour message has been successfully forwarded.")
			  
			document.getElementById("contacto").reset();
		
		}
} 

function test(){
console.log("funciona");
}

/* Title focus START */
/* Changing the title text when the focus is out */
  var title = document.title;
  var lang = document.getElementById("title");

  var blurMessage = "Soy Juan, sigo aquí!!";
  window.addEventListener("blur", function(){
    document.title = blurMessage;
  });
  window.addEventListener("focus", function(){
    document.title = title;
  });

  if(lang){
	var blurMessage = "I'm Juan, I still here!!";
  window.addEventListener("blur", function(){
    document.title = blurMessage;
  });
  window.addEventListener("focus", function(){
    document.title = title;
  });
  }
/* Title focus END */



