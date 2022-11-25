
//Boucler sur les nouvelles
let nouvellesArr = document.querySelector(".nouvelle");

//Quand tu click sur une image ou un bouton d'une nouvelle dans les nouvelles: Afficher la page de la nouvelle
let btnlienItem = document.querySelector(".lienItem");
let btnLienItemP = document.querySelector(".lienItemP");

nouvellesArr.array.forEach(nouvelle => {
    nouvelle.addEventListener('click', function() {
        console.log("hello");
    });
});
    