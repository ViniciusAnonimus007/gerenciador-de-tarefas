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