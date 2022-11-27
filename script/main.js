//Boucler sur les nouvelles
/*let nouvelles = document.querySelector(".nouvelle");

//Quand tu click sur une image ou un bouton d'une nouvelle dans les nouvelles: Afficher la page de la nouvelle
let btnlienItem = document.querySelector(".lienItem");
let btnLienItemP = document.querySelector(".lienItemP");

nouvelles.forEach((nouvelle) => {
  nouvelle.addEventListener("click", function () {
    console.log("hello");
  });
}); */

//code pour page single product
//arrays
let productsArr = document.querySelectorAll(".item");
let namesArr = document.querySelectorAll(".item__name");
let prixArr = document.querySelectorAll(".item__prix");
let imgItem = document.querySelectorAll(".imgItem");
//html
let nomSingle = document.querySelector(".single-product__nom");
let prixSingle = document.querySelector(".single-product__prix");
let descSingle = document.querySelector(".single-product__description");
let imgSingle = document.querySelector(".single-product__boite-image");
let num = -1;

namesArr.forEach(function (name) {
  num++;
  localStorage.setItem(`name${num}`, name.textContent);
});

let num2 = -1;
imgItem.forEach(function (img) {
  num2++;
  localStorage.setItem(`img${num2}`, img.src);
});

productsArr.forEach(function (product, index) {
  product.addEventListener("click", function () {
    localStorage.setItem("index", index);
    window.location.href = "single-product.html";
  });
});

nomSingle.innerHTML = localStorage.getItem(
  `name${localStorage.getItem("index")}`
);
imgSingle.innerHTML = `<img class="single-product__image" src="${localStorage.getItem(
  `img${localStorage.getItem("index")}`
)}">`;
