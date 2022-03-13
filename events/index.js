//Accès via l'id en passant par le DOM
const btn = document.querySelector("#btn");

//Accès via l'id en sélectionnant directement l'id
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  //Ajouter une classe à l'élément img (soit l'id btn) si l'element ne  la possède pas
  // sinon la retirer (toggle)
  //  cette classe à un css qui rend visible
  img.classList.toggle("show");
});

//--------------------------------------------------------------------------------
// Evenement de la souris

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.y;
  vertical.innerHTML = e.x;

  //Cette fois le css est injecté directement sans passer par une classe
  // on aurait pu faire mouseEvent.classListe.add(ou toggle).MaNouvelleClasse
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  // Ne fonctionne pas car pour le moment je ne sais pas comment utiliser toute la page
  mouseEvent.style.right = (e.y / window.innerHeight) * 100 + "%";

  //blur = flou
  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

//--------------------------------------------------------------------------------
// Evenements sur input

//Accèder à l'input sans créer une varaible d'accès
document.getElementById("input").addEventListener("input", (e) => {
  vertical.innerHTML = e.target.value;
});

//--------------------------------------------------------------------------------
//

//Pointeur vers les trois boutons
const theme = document.querySelectorAll(".theme");

//Ajour de l'écouteur sur chaque boutons
theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.body.classList.remove("darkTheme");
    document.body.classList.remove("salmonTheme");
    document.body.classList.remove("yellowTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      default:
        null;
    }
  });
});
