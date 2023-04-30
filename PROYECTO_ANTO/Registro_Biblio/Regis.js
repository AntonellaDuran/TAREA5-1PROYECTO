const REGISTRO = document.querySelector('form-regis');

function Registrate()
{

  const Nombres = document.getElementById('Nombres').value;
  const Telefono = document.getElementById('Telefono').value;
  const Correo= document.getElementById('Correo').value;
  const Contraseña = document.getElementById('Contraseña').value;
  const ConfirmarContraseña = document.getElementById('Confirmar Contraseña').value;
  
  // Vereficamos con un mensaje para ver si los datos se enviaron//

  alert('Felicidades te has registrado correctamente!!');

  window.location="Inicio.html";

}
