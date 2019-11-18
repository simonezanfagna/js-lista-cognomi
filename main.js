var cognome = prompt("Inserisci il tuo cognome");
var lista_cognomi = ['Rossi', 'Ferrari', 'Russo', 'Bianchi'];
lista_cognomi.push(cognome);
var lista_aggionata = lista_cognomi.sort();
console.log(lista_aggionata);
//console.log(cognome + ' posizione = ' + (parseInt(lista_cognomi.indexOf(cognome)) + 1));
console.log(cognome + ' indice = ' + lista_aggionata.indexOf(cognome));
