// SYNTAXE

// Variables - déclaration
// let a = 1
// var b = 1

// booléen
// true
// false --> 


// console.log() // --> resultat dans console du fichier html

// Fonction
// function somme1(a,b){
//     return a+b
// }
// console.log(5,8)



//Condition
// if () {
// } else (){
// }
// 
// if
// else if --> comme le elif sur python
// else

// Condition dans fonction
// function var1(par1){ -----> (parametre sert à appliquer la même fonction avec une autre valeur)
//     let var2 = "";
//     if(par1 <= 10){
//         var2 = "premiere";
//     }   else if(par1 <= 20){
//         var2 = "deuxieme";
//     }   else {
//         var2 = "troisieme";
//     }
//     console.log(var2)
// }
// var1(5)

// Switch() --> entre () 
// case

// Switch dans function
// case, break, default

// for loop
// [] --> tableau commence à être compté à partir de 0. 
// lors des fonctions, ne jamais oublier le "return" entre les deux derniers }}

// for / in -- parcours tout le tableau sans condition
// ex: var person = {} --> objet

// JS break - continue
// break - quitte la boucle quand une condition est atteinte
// continue - continue la boucle, mais saute l'ittération

// while loop
// le compteur, il faut le mettre à la main, pas comme dans for

// array 
// myArray = ["a", "b", "c"]; ---- 3 elements, indexé de 0 à 2.
// tab[4] --> affiche 5ème élément avec index 4

// method JS ARRAY
// toString() --> affiche array en string
// pop() --> supprime element
// push() --> ajoute en dernier
// shift() --> ajoute en premier


// date ----> yyyy - mm - dd (format standard)
// set - ajuste - change date
// get - récupère - montre la date actuelle





    // 15.02.21 depuis dossier partage
/* <h1>Mon H1 <b>est en gras</b></h1>
    <h2>Mon H2</h2>

    <button onclick="modifTexteH1()">changer le texte du H1</button>
    <button onclick="modifHtmlH1()">changer le HTML du H1</button>
    <button onclick="hidebouton()">cacher le Bouton</button>
    
    <h3>A demonstration of the :in-range selector.</h3>
    <form onsubmit="valid()">
      <input type="number" required />
      <input type="submit" value="valider" />
    </form>

    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/all.min.js"></script>

    <script>
      function modifTexteH1() {
        $("h1").text("texte du H1 changé");
      }

      function modifHtmlH1() {
        $("h1").html("<p>html du H1 changé </p>");
        alert($("h1").html());
      }
      function valid() {
        alert($("input[type=number]").val());
      }

      $(document).ready(function () {
        $("h1").click(function () {
          alert("h1 va disparaitre");
          $(this).hide();
        });
      });

      function hidebouton() {
        let bouton = $("button");
        console.log($(this));
      }
    </script> */