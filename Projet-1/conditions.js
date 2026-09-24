// Exemple 1: Vérification de l'âge pour la majorité
//var age = 17;

//if (age < 18) { //SI
    //console.log("Mineur");
//} else { //SINON
  //  console.log("Majeur");
//}

//var a = 20;
//var b = "20";

// Exemple 2: Comparaison avec == et ===
//if (a == b) { // VRAI car les valeurs sont égales
    //console.log("a est égal à b avec ==");
//}

//if (a === b) { // FAUX car les types sont différents
    //console.log("a est égal à b avec ===");
//} else {
    //console.log("a n'est pas égal à b avec ===");
//}
//const age = 20;
//const permis = true;

//if (age >= 18 && permis) {
 // console.log("Tu peux conduire");
//} else {
 // console.log("Tu ne peux pas conduire");
//}
//const estEtudiant = false;
//const estSenior = true;

//if (estEtudiant || estSenior) {
 // console.log("Tu as droit à une réduction");
//}
//} else {
  //console.log("Pas de réduction");
//}   
// EXERCICE 1: Vérification de l'âge pour la majorité
nom = "Esat";
age = 19
// Condition 1 : Age inférieur à 18
//if (age >= 18) {
//    //console.log("Tu es majeur et tu as " + age + " ans");
//}
//Condition 2 : Nom différent de "Esat"
//if (nom != "Esat") {
    //console.log("Acces inacessible");

// Condition 3 : Nom différent de "Esat" et Age inférieur à 18}
//if (nom == "Esat" && age >= 18) {
  //  console.log("tu es majeur et tu as " + age + " ans et ton nom est " + nom);
//}
// Exemple 4: Jour de la semaine

//var day = 6; 
//var dayName;    
//switch (day) {
//    case 1:
//        dayName = "Lundi";
//        break;
//    case 2:
//        dayName = "Mardi";
//        break;
//    case 3:
//        dayName = "Mercredi";   
//        break;
//    case 4:
//        dayName = "Jeudi";
//        break;
//    case 5:
 //       dayName = "Vendredi";
 //       break;
 //   case 6:
 //       dayName = "Samedi";
 //       break;
  //  case 7:
  //      dayName = "Dimanche";       
  //      break;
  //  default:
  //      dayName = "Jour invalide";
//}




// EXERCICE 2: Affichage si c'est le week-end ou pas 


var day = 7; // 1 = Lundi, 2 = Mardi, . .., 7 = Dimanche

switch (day) {
    case 1: 
        console.log("C'est pas le weekend c'est : Lundi");
        break;
    case 2:
        console.log("C'est pas le weekend c'est : Mardi");
        break;
    case 3:
        console.log("C'est pas le weekend c'est : Mercredi");
        break;
    case 4:
        console.log("C'est pas le weekend c'est : Jeudi");
        break;
    case 5:
        console.log("C'est pas le weekend c'est : Vendredi");
        break;
    case 6:
        console.log("C'est le week-end : Samedi");
        break;
    case 7:
        console.log("C'est le week-end : Dimanche");
        break;
    default:
        console.log("Jour invalide");
}
