import * as storage from '../storage/localStorage.js';
import { usersDefault } from '../storage/default.js';


const $message = document.querySelector('#message');

console.log(storage.load('users'));

function auth() {
  try {
    const userLog = document.querySelector('#user').value;
    const passLog = document.querySelector('#password').value;
    const usersList = storage.load('users')
  

    const user = usersList.find((_user) => {
    return _user.user == userLog && _user.password == passLog;
    })

    console.log(user)

    if(!user) {
      $message.textContent = 'Usuario ou senha incorretos ou não cadastrados';
    }

    else {
      $message.textContent = `Usuario: ${user.user} Senha: ${user.password}`;
      storage.sessionUser('session', user.userID, self.crypto.randomUUID());

    
      setTimeout(() => {
      window.location.href = './tasks.html';
      }, 1000);
    }
  }
  
  catch(error) {
    console.log('error')
  }

  
}


const $send = document.querySelector('#send');

$send.addEventListener('click', (e) => {
  e.preventDefault();
  
  auth();
  usersDefault();
})