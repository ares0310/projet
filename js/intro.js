/*const x = 10;
const t = 80;
let y = 20;
y = 41;
z = y % 4

y += 22;
m=50

var

console.log(x)
console.log(y)
console.log(t)
console.log(z)
         
console.log("hahaha" + x)
console.log(y)*/

// let chaine = "premiere ligne \n deuxieme ligne"
// let dossier = "dossier\\images\\image.png"
// console.log(chaine);

// console.log(dossier);

// let person = {
//     firstName: "John",
//     lastName : "Doe",
//     age : 35,
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName + " " + this.age + " years";
//     }
//   };

//   console.log(person.lastName);

//   console.log(person.id);

//   console.log(person.fullName())

//   function afficherMessage() {
//       console.log("un message");
// }

// afficherMessage()

// function somme (a,b)
// {
//     console.log(a+b);
// }

// somme(2,3)

// somme(6,12)

// function somme1 (a,b)
// {return (a + b);
// }

// let x;
// x = somme1(5, 6545);

// console.log(x)

// function somme2(a,b)
// {
//     return (a+b);
// }

// let k;
// k = somme2(5, 7)

// console.log(k);

// let val1
// val1 = Math.random() * 10;
// console.log(val1);

// let val2
// val2 = Math.random() * 10
// console.log(val2)

// function sommeRandom(a,b)
//     {return a+b;
//     }

// let s;
// s = sommeRandom(val1, val2)

// console.log(s);

// let l;
// l = Math.floor(Math.random() * 10)

// console.log(l)

// function difference(a, b) {
//   return a == b;
// }

// console.log(difference(40, 10));

// let chaine2;
// chaine2 = "";
// console.log(chaine2);

// let j = 0;
// let u = "";
// while (j <= 9) {
//   u += "*";
//   j++;
//   console.log(u);
// }

// console.log(1 === "1");

// ressemble a condition ----> ternaire
// let a = 15;
// let b = 10;
// a < b ? (x = "inferieur") : (x = "superieur");

// console.log(x);

// Condition

// if (condition) {
//     // traitement
// }

// else (condition) {
//     //traitement
// }

// let hour = 19;
// let salutation = "";
// if (hour < 18) {
//     salutation = "Bonjour";
// } else {
//     salutation = "Bonsoir";
// }
// console.log(salutation)

// function salutation2(hour) {
//   let salutation = "";
//   if (hour < 18) {
//     salutation = "Bonjour";
//   } else {
//     salutation = "Bonsoir";
//   }
//   console.log(salutation);
// }

// salutation2(19);

// let number1 = 6;
// switch (number1) {
//   case 1:
//     console.log("The number is 1");
//     break;
//   case 2:
//     console.log("The number is 2");
//     break;
//   default:
//     console.log("The number is undefined");
// }

// function age(annee) {
//   let number2 = "";
//   if (annee <= 10) {
//     number2 = "kid";
//   } else if (annee <= 15) {
//     number2 = "teen";
//   } else if (annee <= 20) {
//     number2 = "young";
//   } else if (annee <= 45) {
//     number2 = "adult";
//   } else {
//     number2= "senior";
//   }
//   console.log(number2)
// }

// age(16)

// let str = "";
// let result = "";
// for (let i = 0; i < 9; i++) {
//     str = str + "*";
//     result += str + "\n";
// }
// console.log(result)

// function ageSwitch(ans) {
//     let message = "";
//     switch (true){       // cas particulier
//         case (ans < 10):
//             message = "kid";
//             break;
//         case (ans < 18):
//             message = "teen";
//             break;
//         default:
//             message = "old";
//     }
//     console.log(message)
//     return message;
// }
// ageSwitch(45)

// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];     // exemple sur w3school
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// function entiers(tab) {
//   var num1;
//   var text1 = "";
//   for (num1 = 0; num1 < tab.length; num1++) {
//     text1 += "K-" + tab[num1] + "\n";
//   }
//   return text1;
// }
// let tab1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(entiers(tab1));

// break / continue
// var text = "";
// var i;
// for (i = 0; i < 10; i++) {
//   if (i === 3) { continue; } // on peut remplacer par break
//   text += "The number is " + i + "\n";
// }
// console.log(text)

// var text = "";
// var i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// }

// function tableau1(tab) {
//   var i;
//   let message = "";
//   for (i = 0; i < tab.length; i++) {
//     if (tab[i] === "non") {continue; }
//     message += tab[i] + " ";
//   }
//   return message;
// }

// let tab1 = ["oui", "haha", "lol", "xD", "non", "ici", "mdr"]

// console.log(tableau1(tab1))

// function tableau2(tab) {
//   var i = 0;
//   let message = "";
//   while (i < tab.length) {
//     if (tab[i] === "non") {i++; continue; } // --> i++ important pour que la condition s'exécute en boucle
//     message += tab[i] + " ";
//     i++;
//   }
//   return message;
// }

// console.log(tableau2(tab1))

// function tableau3(tab) {
//   var i = 0;
//   let message = "";
//   while (i < tab.length) {
//     message += tab[i] + " ";
//     i++;
//   }
//   return message;
// }

// console.log(tableau3(tab1))

// AUTRE SOLUTION (moins fiable)
// function tableau2(tab) {
//   var i = -1;
//   let message = "";
//   while (i < tab.length -1) {
//     i++;
//     if (tab[i] === "non") { continue; } // --> i++ important pour que la condition s'exécute en boucle
//     message += tab[i] + " ";
//   }
//   return message;
// }

// console.log(tableau2(tab1))

// let tab = ["a", "b", "c", "d", "e"];
// tab[0] = "z";

// console.log(tab)

// console.log(tab.length)

// tab.sort();
// console.log(tab);

// let tab1 = tab[tab.length - 1];
// console.log(tab1)

// let points = [4,95,87,16,12]

// console.log(Math.max(4,95,87,16,12))

// let date1 = new Date();
// console.log(date1.getMonth()+1) // - index de 0 à 11 (mois)

// function moyenne(tab) {
//   if (tab.length === 0) {
//     return 0;
//   }
//   let i;
//   let somme = 0;
//   for (i = 0; i < tab.length; i++) {
//     somme = somme + tab[i];
//   }
//   return somme / tab.length;
// }
// let tab1 = [16, 12, 8, 7, 3, 12];
// console.log(moyenne(tab1));

// function moyenne(tab){
//   let somme = 0;
//   let i;
//   for(i = 0; i < tab.length; i++){
//       somme = somme + tab[i]
//   }
//   return (somme / tab.length);            // --->>> return, toujours avant la derniere accolade
// }

// console.log(moyenne(tab1))

// function maximum(tab){
//   let maxi = 0;
//   for (i=0; i < tab.length; i++){
//       if (tab[i] > maxi) {
//           maxi = tab[i];
//       }
//   }
//   return maxi                             // -->>>>> return, toujours avant la derniere accolade
// }
// console.log(maximum(tab1))

let tab2 = [18, 2, 14, 11, 8, 13, 8];

// trouver la moyenne
// function moyenne2(tab) {
//   let result = 0;
//   let n = 0;
//   while (n < tab.length) {
//     result += tab[n];
//     n++;
//   }
//   return result / tab.length;
// }

// console.log(moyenne2(tab2 ));

// trouver plus grand nombre
// function highestNum(tab) {
//     let maximum = 0;
//     for (i=0; i < tab.length; i++){
//         if (tab[i] > maximum) {
//             maximum = tab[i];
//         }
//     }
//     return maximum
// }
// console.log(highestNum(tab2))

// function highestNum(tab) {
//     let maximum = 0;
//     for (i=0; val = tab[i]; i++){
//         if (val > maximum) {
//             maximum = val;
//         }
//     }
//     return maximum
// }
// console.log(highestNum(tab2))

//BONNE METHODE
// function position(tab, a) {
//   for (i=0; i < tab.length; i++){
//     if (tab[i] == a){
//       return i + 1;               // --- >>>> compteur (i) suffit car compte deja la poisition, +1 renvoie la position algo.

//     }
//   }
// }

// MA MANIERE DE TROUVER POSITION/INDEX avec fonction predefini indexOf
// function position(tab, a) {
//   let pos1;
//   for (i=0; i < tab.length; i++){
//     if (tab[i] == a){
//       pos1 = tab.indexOf(a);
//     }
//   }
//   return pos1
// }
// console.log("l'index numero ", position(tab2, 11))

// function indexPosition(tab, a) {
//   let i = 0;
//   while (i < tab.length) {
//     if (tab[i] == a){
//       return i + 1;
//     }
//     i++;                                // ----------> derniere instruction du while
//   }
// }
// console.log(indexPosition(tab2, 11))



// ANNEE BISSEXTILE

// function jours(mois, annee) {
//   if (mois == 2) {
//     if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
//       return 29;
//     }
//   }
//   let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return month[mois - 1];
// }
// console.log(jours(3, 2001));

// tab1 = [5, 16, 12, 7, 13, 6, 8];

// 17.02.2021
// VERSION LONGUE MOIS et ANNEE BISSEXTILE
// function jourAnnee(mois, annee) {
//   let days = 0;
//     switch(mois){
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         days = 31;
//         return days;            // return remplace le break; sinon return fait deja le boulot
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         days = 30;
//         return days;            // return remplace le break; sinon return fait deja le boulot
//       case 2:
//         if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
//         days = 29;
//         return days;
//         }
        
//         return 28;
//   }
//   return days;
// }
// console.log(jourAnnee(2, 1995))

// // VERSION COURTE
// function daysYear(mois, annee) {
//   mois-=1
//   let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   switch (true) {
//     case 2:
//       (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) ;
//       return 29; 
//     default:
//       return month[mois];
//   }
    
// }
// console.log(daysYear(5,2000))


// INVERSER CHAINE DE CARACTERE
// function inversement(chaine){
//   let ch = "";
//   for (i=chaine.length-1; i >= 0; i--) { 
//     ch += chaine[i];
//   }
//   return ch; 
// }
// console.log(inversement("abcd"))

// COMPTER NOMBRE DE MOTS DANS CH DE CARACTERE
function nbMots(mot) {
  let nb = 0;
  for (i = 0; i < mot.length; i++) {
    if (mot[i] == " ") {
      nb+=1
    }
  }
  return nb + 1;
}
// console.log(nbMots("je suis la"))



// function nbMotsSplit(mot) {
//   return mot.split(" ").length;
// }
// console.log(nbMotsSplit("je suis ici"))




// COMPARAISON DE DEUX PHRASES --- FONCTION DANS FONCTION 
// function comparePhrase(mot1, mot2) {
//   let comp = "";
//   if (nbMots(mot1) > nbMots(mot2)) {
//     comp = "phrase1 est plus grande"
//   } else if (nbMots(mot1) == nbMots(mot2)){
//     comp = "les 2 phrases sont égales"
//   } else {
//     comp = "la phrase 2 est plus grande"
//   }
//   return comp;
// }
// console.log(comparePhrase("je suis la", "kk ll kk non"))


//COMPARAISON DE DEUX PHRASES -- FONCTION DANS FONCTION --- PLUS SIMPLE
// function compPhrase(mot1, mot2) {
//   if (nbMots(mot1) == nbMots(mot2)) {
//   return true
//   } else {
//     return false
//   }
// }
// console.log(compPhrase("haha lol kk kkk", "kk kk kkkk lolol"))

//COMPARAISON DE DEUX PHRASES -- FONCTION DANS FONCTION --- ENCORE PLUS SIMPLE
// function comparaisonPhrase(mot1, mot2) {
//   return (nbMots(mot1) == nbMots(mot2));
// }
// console.log(comparaisonPhrase("je suis la", "ici"))





// RACINE CARRE exercice
function racineCarre(nombre) {
  return Math.sqrt(nombre)
}
console.log(racineCarre(30))








// FREECODECAMP
// Objets:

// let dog = {
//   "name": "Rex",                 -----> (:) pour designer des proprietes a linterieur de lobjet
//   "friends": ["me", "food"]      ------>: array peut etre cree a linterieur de lobjet
// }

// Pour acceder dans proprietes d'un objet
// 2 manieres de faire =
// 1) .
// 2) []
