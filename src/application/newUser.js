import * as storage from '../storage/localStorage.js';
import { clearCamp } from '../utils/clearCamp.js';
import { defaultUsers } from '../storage/default.js';

const KEY_USERS = 'users';
const $message = document.querySelector('#message');

function newUser() {
  const user = document.querySelector('#user').value;
  const password = document.querySelector('#password').value;
  
  let users = storage.load(KEY_USERS);
}