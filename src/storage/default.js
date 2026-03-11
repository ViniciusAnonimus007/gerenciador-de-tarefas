import * as storage from './localStorage.js';

export async function defaultUsers() {
  try {
    const users = storage.load('users');
    const res = await fetch('../src/storage/default.json');
    let defaultUsers = await res.json();
    
    if(!users || users.length === 0) {
      
      let dataUsers = [];
      defaultUsers.users.forEach((user) => {
        dataUsers.push(user);
      });
      
      storage.setDefault('users', dataUsers);
      console.log('Usuarios Padrão');
      console.log(storage.load('users'))
      return;
    }
  }
  
  catch (err) {
    console.error(err.message);
  }
}

