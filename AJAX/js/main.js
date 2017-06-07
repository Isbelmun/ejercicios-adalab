'use strict';
var userToSearch = document.querySelector('.userInput');
var buttonElement = document.querySelector('.btn');
var avatar = document.querySelector('.avatar');
var userName = document.querySelector('.user-name');
var repositorios = document.querySelector('.repositorios');
var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/' + input, true); // use true to make the request async

function sendRequest(){
  var request = new XMLHttpRequest();
  var userInput = userToSearch.value;

request.onload = function() {

  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.response);
    avatar.src = user.avatar_url ;
    userName.innerText = user.login;
    repositorios.innerText = user.public_repos;

  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
};

request.onerror = function() {
  console.log('Error al tratar de conectarse con el servidor');
};

request.send();

buttonElement.addEventListener("click", sendRequest);
}
