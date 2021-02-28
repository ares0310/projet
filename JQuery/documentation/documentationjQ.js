// $ ("selecteur") function(); --> les guillemets au sélecteurs important

// Plusieurs events JQuery

// $("p").on({
//     mouseenter: function(){
//       $(this).css("background-color", "lightgray");
//     },
//     mouseleave: function(){
//       $(this).css("background-color", "lightblue");
//     },
//     click: function(){
//       $(this).css("background-color", "yellow");
//     }
//   });

// Jquery selector = CSS selector






// $.each(response, function(){                            
//    tab.push(this.userId)
// parcours tableau Jquery

// sinon

// $("selector").each()


// ENLEVER LES DOUBLONS
// indexOf 
//exemple:

// function elimineDoublon(tab) {                    // pour eviter de faire une fonction en plus, dans l'autre fichier "ajax exercice" Array.from new set fait l'affaire
//         let tab2 = [];
//         for (i = 0; i < tab.length; i++) {       // creer une boucle
//           if (tab2.indexOf(tab[i]) === -1) {
//             tab2.push(tab[i]);
//          }
//        }
//          return tab2;
//      }