import { load } from '../storage/localStorage.js';

export function startAuthWatcher(key) {
  console.log("Monitoramento de sessão iniciado...");

  const interval = setInterval(() => {
    const session = load(key);

    if (!session || session === 'sem sessão' || Array.isArray(session) && session.length === 0) {
      console.warn("Sessão inválida ou expirada. Redirecionando...");
      
      clearInterval(interval);
      
      
      window.location.href = '../index.html'; 
    } else {
      console.log("Token verificado: Usuário ainda autenticado.");
    }
  }, 5000);
}

startAuthWatcher('session');