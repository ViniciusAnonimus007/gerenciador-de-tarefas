import * as storage from '../storage/localStorage.js';
import { clearCamp } from '../utils/clearCamp.js';
import { defaultUsers } from '../storage/default.js';

defaultUsers();
const KEY_SESSION = 'session';
const KEY_USERS = 'users';
const $message = document.querySelector('#message');
const $send = document.querySelector('#send');

function newUser() {
  try {
    const userName = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
  
    let users = storage.load(KEY_USERS);
    if(!userName || !password) {
      $message.textContent = 'preencha todos os campos'; 
      return;
    };
    const user = {
      user: userName, 
      password: password,
      userID: self.crypto.randomUUID(),
      role: 'user',
      tasks: []
    };
    
    users.push(user);
    
    storage.sessionUser(KEY_SESSION, user.userID, self.crypto.randomUUID());
    
    window.location.href = './pages/tasks.html';
  }
  
  catch(error) {
    console.error(`Error: ${error.message}`);
  }
}


$send.addEventListener('click', (e) =>{
  e.preventDefault();
  
  newUser();
})