import * as storage from '../storage/localStorage.js';

const defaultUser = { user_name: 'admin', password: 'adm' };

function saveUser(user) {
    if (!user) return [];

    storage.save('users', user);
};

saveUser(defaultUser)
console.log(storage.load('users'));