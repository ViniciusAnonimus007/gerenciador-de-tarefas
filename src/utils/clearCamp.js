export function clearCamp (camp) {
  if(!camp) return;
  
  if(camp instanceof NodeList || Array.isArray(camp)) {
    camp.forEach((c) => {
      c.value = '';
    });
  }
  
  else {
    camp.value = '';
  }
};