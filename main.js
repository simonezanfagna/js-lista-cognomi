var cognome = prompt("Inserisci il tuo cognome");
var lista_cognomi = ['Rossi', 'Ferrari', 'Russo', 'Bianchi'];


// Metodo 1

// lista_cognomi.push(cognome);
// var lista_aggionata = lista_cognomi.sort();
// console.log(lista_aggionata);
// //console.log(cognome + ' posizione = ' + (parseInt(lista_cognomi.indexOf(cognome)) + 1));
// console.log(cognome + ' indice = ' + lista_aggionata.indexOf(cognome));



// Metodo 2
var c = 0;
while (c <= 0){
  lista_cognomi.push(cognome);
  var lista_aggionata = lista_cognomi.sort();
  console.log(lista_aggionata);

  for (i = 0; i < lista_aggionata.length; i++) {

    if (lista_aggionata[i] == cognome) {
      console.log(cognome + ' indice = ' + i);
    }
  }

  c = 1;
}
