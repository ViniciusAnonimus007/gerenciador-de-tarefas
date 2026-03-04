import * as storage from '../storage/localStorage.js';

const defaultUser = { user: 'admin', password: 'admin' };

storage.save('users', defaultUser);

console.log(storage.load('users'));

function auth() {
  const user = document.querySelector('#user');
  const password = document.querySelector('#password');
  const usersList = storage.load('users')
  
  usersList.forEach((_user) => {
    console.log(`usuario: ${_user.user} senha: ${_user.password}`)
  })
  
}


auth();

const $send = document.querySelector('#send');

$send.addEventListener('click', (e) => {
  
  e.preventDefault();
  
  console.log('a função é chamada')
  
  
})