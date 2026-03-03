export function load(key) {
  const res = localStorage.getItem(key);
  
  if(!res) {
    return JSON.parse(res);
  }
  
  else {
    return [];
  };
  
};

export function save(key, data) {
  const database = load(key);
  
  database.push(JSON.stringify(data));
  
  localStorage.setItem(key, database);
}