/* var maDiv = document.createElement("div");
var monTitre = document.createElement("h1");
var monParagraphe = document.createElement("p");
monTitre.innerText = "Bienvenue !";
monParagraphe.innerText = "Bienvenue sur mon site ! Plein de lorem ipsum...";
maDiv.appendChild(monTitre);
maDiv.appendChild(monParagraphe);
document.body.appendChild(maDiv);

var maDiv1 = document.createElement("div");
var monTitre1 = document.createElement("h1");
var monParagraphe1 = document.createElement("p");
monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
monParagraphe1.innerText = "Paragraphe chapitre 1";
maDiv1.appendChild(monTitre1);
maDiv1.appendChild(monParagraphe1);
document.body.appendChild(maDiv1);

var maDiv3 = document.createElement("div");
var monTitre3 = document.createElement("h1");
var monParagraphe3 = document.createElement("p");
monTitre3.innerText = "Chapitre 2 : un autre chapitre";
monParagraphe3.innerText = "Paragraphe chapitre 2";
maDiv3.appendChild(monTitre3);
maDiv3.appendChild(monParagraphe3);
document.body.appendChild(maDiv3);

var maDiv4 = document.createElement("div");
var monTitre4 = document.createElement("h1");
var monParagraphe4 = document.createElement("p");
monTitre4.innerText = "Chapitre 3 : encore un chapitre";
monParagraphe4.innerText = "Paragraphe chapitre 3";
maDiv4.appendChild(monTitre4);
maDiv4.appendChild(monParagraphe4);
document.body.appendChild(maDiv4);
*/
// Mon code

/* function create_block(headrs, parag) {
  let mon_titre = document.createElement("h1");
  let mon_parag = document.createElement("p");
  let ma_div = document.createElement("div");
  mon_titre.innerText = headrs;
  mon_parag.innerText = parag;
  ma_div.appendChild(mon_titre);
  ma_div.appendChild(mon_parag);
  return ma_div;
} */

/* class NouveauChapitre {
  constructor(i, mon_h1, mon_para, clr1, clr2, x, klass) {
    let mon_titre = document.createElement("h1");
    let mon_paragraphe = document.createElement("p");
    let ma_section = document.createElement("section");
    mon_titre.innerText = "Chapitre " + (i + 1) + " : " + mon_h1;
    mon_paragraphe.innerText = "Chapitre " + (i + 1) + " : " + mon_para;
    ma_section.appendChild(mon_titre);
    ma_section.appendChild(mon_paragraphe);
    if (i == x || i == 15 || i == 19 || i == 89 ) {
      ma_section.style.color = clr1;
    }
    else {
      ma_section.style.color = clr2;
    }
    ma_section.setAttribute("class", klass);
    document.body.appendChild(ma_section);
  }
} */

// let tab_fonts = ["'Sedgwick Ave Display';", "'Shadows Into Light';", "'Architects Daughter';", "'Grand Hotel';", "'Lobster';", "'Mali';"];

// let tab_fonts = ["\'Sedgwick Ave Display\', \'Shadows Into Light\';", "\'Shadows Into Light\',\'Architects Daughter\';", "\'Architects Daughter\', \'Grand Hotel\';", "\'Grand Hotel\', \'Lobster\';", "\'Lobster\', \'Mali\';", "'Mali', \'Patrick Hand\';", "\'Patrick Hand\', cursive;"];

// Déclaration de mes tableaux fonts et couleur background que je vais appeler en random dans la fonction "execution" en bas de page
let tab_fonts = ["Sedgwick Ave Display", "Shadows Into Light", "Architects Daughter", "Grand Hotel", "Lobster", "Mali", "Patrick Hand", "cursive", 'Roboto', 'Pacifico', "Orbitron", "Langar", "Fredoka One", 'Dancing Script', 'Courgette', 'Bungee', 'Anton', 'Amatic SC'];
let tab_couleur = ["#F24957", "#BF3F61", "#8C3264", "#281B59", "#010326", "#090F29", "#203F5C", "#8F437A", "#C21657", "#F54333", "#27615F", "#090F29", "#F50604", "#32005C", "#C21657", "#5C17A8", "#6F068F", "#20029C", "#9C023D"];
// Tableau que je vais incrémenter pour afficher le prénom des étudiants dans l'ordre, dans la lopp en bas de page avec i++
let tab_etudiants = ["Numa", "Nabil", "Ruddy", "Kheira", "Clara", "RomainG", "Pierre", "Mohammed", "RomainD", "Stephane", "Sonia", "Loic", "Priscille", "Tiffany", "Khalil", "Straydine", "Nicolas", "Veronica", "Francisco", "Nawal", "Colin", "Thomas"];

// console.log(tab_fonts[Math.floor(Math.random() * tab_fonts.length)]);



document.body.style.backgroundColor = "black";
class NouveauChapitre {
  constructor(index, mon_h1, mon_para, couleur_txt, couleur_bg, police, klass) {
    this.index = index;
    this.mon_h1 = mon_h1;
    this.mon_para = mon_para;
    this.couleur_txt = couleur_txt;
    this.couleur_bg = couleur_bg;
    this.klass = klass;
    this.police = police;
  }
  afficher() {
    let mon_titre = document.createElement("h1");
    let mon_paragraphe = document.createElement("p");
    let ma_section = document.createElement("section");
    //                                            0 + 1 = 1
    mon_titre.innerText = "Chapitre " + (this.index + 1) + " : " + this.mon_h1 + " et j'ai la couleur " + this.couleur_bg + " en background et la police " + this.police;
    mon_paragraphe.innerText = "Étudiant " + (this.index + 1) + " : " + this.mon_para;
    mon_titre.style.fontSize = "7em";
    ma_section.appendChild(mon_titre);
    ma_section.appendChild(mon_paragraphe);
    ma_section.setAttribute("class", this.klass);
    ma_section.style.color = this.couleur_txt;
    ma_section.style.backgroundColor = this.couleur_bg;

    /*  if (this.clr1 == this.couleur_bg) {
        this.change_color("white");
      }*/
    if (this.police == 'Bungee') {
      mon_titre.style.fontSize = "1.8em";
      mon_paragraphe.style.fontSize = "1.8em";
    }
    else if (this.mon_para == "Clara") {
      mon_paragraphe.style.fontStyle = "italic";
      mon_paragraphe.style.fontSize = "3.5em";
      mon_paragraphe.style.color = "gold";
    }
    else if (this.mon_para == "Nabil") {
      mon_paragraphe.style.fontWeight = "bold";
      mon_paragraphe.style.fontSize = "3.5em";
      mon_paragraphe.style.color = "lightblue";
    }
    else {
      mon_paragraphe.style.fontSize = "3.5em";
      mon_titre.style.fontSize = "2em";
    }


    mon_titre.style.padding = "1%";
    ma_section.style.float = "left";
    ma_section.style.width = "32.5%";
    ma_section.style.height = "300px";
    ma_section.style.border = "2px solid white";
    ma_section.style.textAlign = "center";
    mon_titre.style.fontFamily = this.police;
    mon_paragraphe.style.fontFamily = this.police;
    container_section.appendChild(ma_section);
  }
  change_color(une_couleur) {
    this.couleur_txt = une_couleur;
  }
}



let un_h1 = "Bonjour je suis un h1";
let un_para = "Salut je suis un paragraphe";

function execution() {
  //    compteur a 0; compteur plus petit que 22 tu m'augmente le compteur de 1
  for (let i = 0; i < tab_etudiants.length; i++) {
    let chapo = new NouveauChapitre(i, un_h1, tab_etudiants[i], "white", tab_couleur[Math.floor(Math.random() * tab_couleur.length)], tab_fonts[Math.floor(Math.random() * tab_fonts.length)], "ma_classe_css" + (i + 1));
    chapo.afficher();
  }
}

function just_one() {
  let chapi = new NouveauChapitre(0, un_h1, tab_etudiants[Math.floor(Math.random() * tab_couleur.length)], "white", tab_couleur[Math.floor(Math.random() * tab_couleur.length)], tab_fonts[Math.floor(Math.random() * tab_fonts.length)], "ma_classe_css" + (0 + 1));
  chapi.afficher();
}

/* function removeChildren(params) {
  let parentId = params.parentId;
  let childName = params.childName;

  let childNodes = document.getElementById(parentId).childNodes;
  for (let i = childNodes.length - 1; i >= 0; i--) {
    let childNode = childNodes[i];
    if (childNode.name == 'foo') {
      childNode.parentNode.removeChild(childNode);
    }
  }
} */


function delete_child() {
  let e = document.getElementById("container_section");

  //e.firstElementChild can be used. 
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

  let bouton_clean = document.createElement("div");
  bouton_clean.textContent = "¡Clean!";
  bouton_clean.style.fontSize = "4em";
  bouton_clean.style.color = "white";
  bouton_clean.style.float = "left";
  bouton_clean.style.border = "2px solid white";
  bouton_clean.style.width = "33%";
  bouton_clean.style.textAlign = "center";
  bouton_clean.style.height = "80px";
 
  bouton_clean.addEventListener("click", delete_child);








let bouton_div = document.createElement("div");
bouton_div.textContent = "¡Liste étudiants Simplon!";
bouton_div.style.fontSize = "3.5em";
bouton_div.style.color = "white";
bouton_clean.style.float = "left";
bouton_div.style.border = "2px solid white";
bouton_div.style.width = "33%";
bouton_div.style.float = "left";
bouton_div.style.textAlign = "center";

bouton_div.style.height = "80px";

document.body.appendChild(bouton_div);
bouton_div.addEventListener("click", execution);

let bouton_one = document.createElement("div");
bouton_one.textContent = "¡Lotterie!";
bouton_one.style.fontSize = "4em";
bouton_one.style.color = "white";
bouton_one.style.float = "left";
bouton_one.style.border = "2px solid white";
bouton_one.style.width = "33%";
bouton_one.style.height = "80px";
bouton_one.style.textAlign = "center";
document.body.appendChild(bouton_one);
bouton_one.addEventListener("click", just_one);

document.body.appendChild(bouton_clean);





/* let bouton_clean = document.createElement("div");
bouton_clean.textContent = "¡Lotterie!";
bouton_clean.style.fontSize = "4em";
bouton_clean.style.color = "white";
bouton_clean.style.float = "right";
bouton_clean.style.border = "2px solid white";
bouton_clean.style.width = "46%";
bouton_clean.style.textAlign = "center";
document.body.appendChild(bouton_clean);
bouton_clean.addEventListener("click", cleaning);*/

let container_section = document.createElement("div");
container_section.setAttribute("id", "container_section");
document.body.appendChild(container_section);



/*  let test_chapitre = new NouveauChapitre(4, "Hello hello", "Numa", "pink", "white", " ");
test_chapitre.change_color("red");
test_chapitre.afficher(); */

