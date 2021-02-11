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

let tab = ["a", "b", "c", "d", "e"];
tab[0] = "z";

console.log(tab)

console.log(tab.length)

tab.sort();
console.log(tab);

let tab1 = tab[tab.length - 1];
console.log(tab1)

let points = [4,95,87,16,12]
 
console.log(Math.max(4,95,87,16,12))

let date1 = new Date();
console.log(date1.getMonth()+1) // - index de 0 à 11 (mois)