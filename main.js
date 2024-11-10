// Récupération des éléments DOM
const discoverBtn = document.getElementById("discoverBtn");
const hideBespokeBtn = document.getElementById("hideBespokeBtn");
const hideProductBtn = document.getElementById("hideProductBtn");
const learnBtn = document.getElementById("learnBtn");
const blocRight = document.getElementById("contenu-bloc-right");
const blocLeft = document.getElementById("contenu-bloc-left");
const leftContent = document.querySelector(".productList");
const rightContent = document.querySelector(".bespokeList");
const hideBespoke = document.getElementById("hideBespoke");
const hideProduct = document.getElementById("hideProduct");
const gridBloc = document.querySelector(".mainContent");
const imgBlocLeft = document.getElementById("imgBlocLeft");
const imgBlocRight = document.getElementById("imgBlocRight");
const menu = document.getElementById('menu');

// Fonction pour afficher/masquer le menu
function toggleMenu() {
    menu.classList.toggle('active');
}

// Affichage et masquage d'éléments
function showElement(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}


// remplace image
function replaceImage(containerSelector, imageLink, transformStyle = "none") {
    const container = document.querySelector(containerSelector);
    if (container && container.querySelector('img')) {
        const img = container.querySelector('img');
        img.src = imageLink;
        img.style.transform = transformStyle;
    }
}

// show product
function showProduct() {
    showElement(leftContent);
    //hideElement(blocRight);
    showElement(hideBespoke);
    hideBespoke.style.display = "flex";
}

// show Bespoke
function showBespoke() {
    showElement(rightContent);
    hideElement(blocLeft);
    showElement(hideProduct);
    rightContent.style.marginBottom = "2rem";
}

// show bloc3 Bespoke
function handleBespokeActions() {
    showBespoke();
    showElement(blocRight);
    hideElement(hideBespoke);
    replaceImage('.image-left', 'img/image-bloc3.png', 'rotateY(180deg)');
    replaceImage('.image-right', 'img/image-bloc3.png', 'none');
    document.getElementById("blocLeft").classList.add('d-flex-row-reverse');
    blocRight.classList.remove('opacityTranslationTop');
}

// Événements
discoverBtn.addEventListener("click", function() {
    replaceImage('.image-right', 'img/image-bloc2.png', 'rotateY(180deg)');
    showProduct();
    this.classList.add('fadeDown');
    hideBespokeBtn.classList.add('fadeRightRotate');
    blocRight.classList.add('opacityTranslationTop');
    hideBespoke.classList.add('fadeLeftBesboke');
    
    
});

hideProductBtn.addEventListener("click", function() {
    replaceImage('.image-right', 'img/image-bloc2.png', 'rotateY(180deg)');
    showProduct();
    showElement(blocLeft);
    hideElement(hideProduct);
    document.getElementById("blocLeft").classList.remove('d-flex-row-reverse');
});

learnBtn.addEventListener("click", handleBespokeActions);
hideBespokeBtn.addEventListener("click", handleBespokeActions);

[imgBlocLeft, imgBlocRight].forEach(function(element) {
    element.addEventListener("click", function() {
        showElement(blocLeft);
        showElement(blocRight);
        hideElement(rightContent);
        hideElement(hideProduct);
        hideElement(hideBespoke);
        replaceImage('.image-left', 'img/image-bloc2.png', 'none');
        replaceImage('.image-right', 'img/image-bloc3.png', 'none');
        leftContent.style.paddingBottom = "0";
        leftContent.classList.add('opacityTranslationDown');
        leftContent.style.height = "0";
        document.getElementById("blocLeft").classList.remove('d-flex-row-reverse');
        blocRight.classList.add('fadeLeft');
        imgBlocRight.classList.add('fadeRight');
        blocRight.classList.remove('opacityTranslationTop');
  
    });
});
