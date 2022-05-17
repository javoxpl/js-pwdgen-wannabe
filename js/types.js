alert ("ciao, ora creiamo la tua password")
const nomeUtente = prompt(" qual'è il tuo nome?");
const cognomeUtente = prompt(" qual'è il tuo cognome?");
const colorePrefererito = prompt("qual'è il tuo colore preferito?");

const password = document.getElementById("password");

password.innerHTML = `<strong class="text-danger">
${nomeUtente}${cognomeUtente}${colorePrefererito}21</strong>`

alert (benvenuto + nomeUtente + cognomeUtente);