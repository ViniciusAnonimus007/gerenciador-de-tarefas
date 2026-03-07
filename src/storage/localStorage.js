export function load(key) {
  const res = localStorage.getItem(key);

  if(res != null) {
    return JSON.parse(res);
  }
  
  else {
    return [];
  };
  
};
 
export function save(key, data) {
  let database = load(key);
  
  database.push(data);
  database = JSON.stringify(database);
  
  localStorage.setItem(key, database);
};

export function sessionUser(key, userID, token) {
  localStorage.setItem(key, JSON.stringify({userID: userID, token: token}));
  console.log(`Operação feita com sucesso`);
  const session = localStorage.getItem('session');
  console.log(session);

  setTimeout(() => { localStorage.setItem(key, 'sem sessão'); console.log('sessão finalizada')}, 10000);
};