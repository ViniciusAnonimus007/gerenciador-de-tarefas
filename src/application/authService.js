import * as storage from '../storage/localStorage.js';
import { defaultUsers } from '../storage/default.js';
defaultUsers();

const KEY_USERS = 'users';
const $message = document.querySelector('#message');

console.log(storage.load(KEY_USERS));


function auth() {
  try {
    const userLog = document.querySelector('#user').value;
    const passLog = document.querySelector('#password').value;
    const users = storage.load(KEY_USERS);
  

    const foundUser = users.find((u) => {
    return u.user == userLog && u.password == passLog;
    });
    
    if(!foundUser) {
      $message.textContent = 'Usuario ou senha incorretos ou não cadastrados';
      return;
    };
    
    
    const {user: userName, password, userID: id} = foundUser;
    
    $message.textContent = `Usuario: ${userName} Senha: ${password}`;
      storage.sessionUser('session', id, self.crypto.randomUUID());
      window.location.href = './tasks.html';
  }
  
  catch(error) {
    console.error(`Erro tentar logar: ${error.message}`);
  };
};


const $send = document.querySelector('#send');

$send.addEventListener('click', (e) => {
  e.preventDefault();

  auth();
  console.log(storage.load(KEY_USERS));
})