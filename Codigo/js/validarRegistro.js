function validar(){

	var nombre, apellido, usuario, cedula, contraseña, pregunta, codigo;

	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	cedula = document.getElementById("cedula").value;
	contraseña = document.getElementById("contraseña").value;
	pregunta = document.getElementById("pregunta").value;
	codigo = document.getElementById("codigo").value;


	if (nombre === "" || apellido === "" || 
		cedula === "" || contraseña === "" ||
		pregunta === "" || codigo === ""){
	// statement
alert("Todos los Campos son Obligatorios");
return false;
}else if (nombre.length > 20) {
	alert("El Nombre es muy Largo");
	return false;
}else if (apellido.length > 40) {
	alert("Los Apellidos es muy Largo");
	return false;
}else if (cedula.length > 8) {
	alert("La Cedula es muy Largo");
	return false;
}else if (contraseña.length < 8) {
	alert("La Contraseña es muy Corta");
	return false;
}else if (pregunta.length > 20) {
	alert("La Pregunta es muy Largo");
	return false;
}else if (codigo.length > 20) {
	alert("El Codigo es muy Largo");
	return false;
}else if (isNaN(cedula)) {
	alert("La Cedula Ingresada no es un número");
	return false;
}


}