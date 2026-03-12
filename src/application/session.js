import { load } from '../storage/localStorage.js'; // Importe sua função load

export function startAuthWatcher(key) {
  console.log("Monitoramento de sessão iniciado...");

  const interval = setInterval(() => {
    const session = load(key);

    // Verifica se o retorno é o array vazio do seu load() ou a string 'sem sessão'
    if (!session || session === 'sem sessão' || Array.isArray(session) && session.length === 0) {
      console.warn("Sessão inválida ou expirada. Redirecionando...");
      
      // Para o intervalo para não entrar em loop de erro
      clearInterval(interval);
      
      // Ação de logout (ex: redirecionar para login)
      window.location.href = '../index.html'; 
    } else {
      console.log("Token verificado: Usuário ainda autenticado.");
    }
  }, 5000); // 5000ms = 5 segundos
}

startAuthWatcher();
// Para iniciar o monitoramento:
// startAuthWatcher('session');
