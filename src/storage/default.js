import * as storage from './localStorage.js';

export async function usersDefault() {
  try {
    const users = storage.load('users');
    const res = await fetch('../src/storage/default.json');
    let defaultUsers = await res.json();
    
    console.log(defaultUsers)
    if(!users || users.length === 0) {
      
      let dataUsers = [];
      defaultUsers.users.forEach((user) => {
        dataUsers.push(user);
      })
      
      storage.setDefault('users', dataUsers);
      console.log('novos usuários');
      console.log(storage.load('users'))
      return;
    }
  }
  
  catch (err) {
    console.error(err.message);
  }
}

