// Les fonctions

//Déclaration de la fonction ancienne version
function faireQuelqueChose() {
  console.log("je fais un truc");
}

//Appel de la fonction
faireQuelqueChose();

//Déclaration d'une fonction flèchée avec un paramètre
//nfn->
const faireUneTache = (type) => {
  console.log("Je fais " + type);
};

//Appel de la fonction flèchée avec le paramètre
faireUneTache("la vaisselle");
faireUneTache("les courses");
