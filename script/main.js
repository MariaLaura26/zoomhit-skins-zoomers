const btnNouvelles = document.querySelector(".btnNouvelles");


//code pour page console, single product
//arrays
let productsArr = document.querySelectorAll(".item");
let namesArr = document.querySelectorAll(".item__name");
let prixArr = document.querySelectorAll(".item__prix");
let imgItem = document.querySelectorAll(".imgItem");
let descArr = [
  "Autocollants Ipad Skin - Astral - Wrap Vinyl Sticker * Skin 3M en matériau de haute qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance * Protégez votre Ipad des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus",
  "Autocollants Ipad Skin - Astral - Wrap Vinyl Sticker * Skin 3M en matériau de haute qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance * Protégez votre Ipad des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus",
  "ANTIDÉRAPANT : revêtement en TPU + microfibre, la finition en silicone offre une prise en main douce et confortable et les empreintes digitales sont facilement essuyées DURABLE : le revêtement en caoutchouc de silicone amortit et protège votre iPhone contre les chocs, les chutes, les chutes, les rayures et les chocs ACCÈS FACILE : des découpes précises sur la coque du téléphone permettent un accès facile à tous les boutons, ports et appareil photo Étui de haute qualité, fabriqué en Amérique du Nord ! Iphone Case TPU: Happy Spring $18.95 Description:",
  "ANTIDÉRAPANT : revêtement en TPU + microfibre, la finition en silicone offre une prise en main douce et confortable et les empreintes digitales sont facilement essuyées DURABLE : le revêtement en caoutchouc de silicone amortit et protège votre iPhone contre les chocs, les chutes, les chutes, les rayures et les chocs ACCÈS FACILE : des découpes précises sur la coque du téléphone permettent un accès facile à tous les boutons, ports et appareil photo Étui de haute qualité, fabriqué en Amérique du Nord !",
  "ANTIDÉRAPANT : revêtement en TPU + microfibre, la finition en silicone offre une prise en main douce et confortable et les empreintes digitales sont facilement essuyées DURABLE : le revêtement en caoutchouc de silicone amortit et protège votre iPhone contre les chocs, les chutes, les chutes, les rayures et les chocs ACCÈS FACILE : des découpes précises sur la coque du téléphone permettent un accès facile à tous les boutons, ports et appareil photo Étui de haute qualité, fabriqué en Amérique du Nord !",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Décalcomanies 3M en matériau de haute qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement * Installation facile, design élégant et tendance * Protégez votre Macbook des rayures et de la poussière * Peut être facilement et complètement retiré sans laisser de résidus *Appareil non inclus Macbook",
  "* Décalcomanies 3M en matériau de haute qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement * Installation facile, design élégant et tendance * Protégez votre Macbook des rayures et de la poussière * Peut être facilement et complètement retiré sans laisser de résidus *Appareil non inclus Macbook",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "* Skin 3M en matériau de haute technologie de qualité, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus *Console et contrôleur non inclus",
  "*Matériau de haute qualité Autocollant 3M, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus * La console et tous les appareils ne sont pas inclus *",
  "*Matériau de haute qualité Autocollant 3M, vinyle adhésif prédécoupé pour s'adapter parfaitement *Installation facile, design élégant et tendance *Protégez votre console et votre contrôleur des rayures et de la poussière *Peut être facilement et complètement retiré sans laisser de résidus * La console et tous les appareils ne sont pas inclus *",
];
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

let num3 = -1;
prixArr.forEach(function (prix) {
  num3++;
  localStorage.setItem(`prix${num3}`, prix.textContent);
});

productsArr.forEach(function (product, index) {
  product.addEventListener("click", function () {
    localStorage.setItem("index", index);
    window.location.href = "single-product.html";
  });
});
//innerHTML page single
nomSingle.innerHTML = localStorage.getItem(
  `name${localStorage.getItem("index")}`
);
imgSingle.innerHTML = `<img class="single-product__image" src="${localStorage.getItem(
  `img${localStorage.getItem("index")}`
)}">`;

prixSingle.innerHTML = localStorage.getItem(
  `prix${localStorage.getItem("index")}`
);
