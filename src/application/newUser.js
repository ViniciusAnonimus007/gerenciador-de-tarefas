import * as storage from '../storage/localStorage.js';
import { clearCamp } from '../utils/clearCamp.js';
import { defaultUsers } from '../storage/default.js';

defaultUsers();

const KEY_USERS = 'users';
const $message = document.querySelector('#message');
const $send = document.querySelector('#send');

function newUser() {
  try {
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
  
    let users = storage.load(KEY_USERS);
    if(!user || !password) {
      $message.textContent = 'preencha todos os campos'; 
      return;
    };
    
    users.push({
      user: user, 
      password: password,
      userID: self.crypto.randomUUID(),
      role: 'user',
      task: []
    });
    window.location.href = './tasks.html';
  }
  
  catch(error) {
    console.error(`Error: ${error.message}`);
  }
}


$send.addEventListener('click', (e) =>{
  e.preventDefault();
  
  newUser();
})