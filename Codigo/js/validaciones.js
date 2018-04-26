var nombre, apellido, usuario, cedula, contraseña, pregunta, correo, codigo, expresion;
expresion = /\w+@\w+\.+[a-z]/ //para corrreo


function validarInicio(){
	usuario = document.getElementById("usuario").value;
	contraseña = document.getElementById("contraseña").value;
	if (usuario.length < 15) {
	// statement
	alert("El Usuario es muy corto")
	return false;
}else if (contraseña.length < 15) {
	alert("El Usuario es muy corto")
	return false;
}

}
