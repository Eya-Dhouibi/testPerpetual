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
const hideBespokeContent = document.getElementById("hideBespokeContent");
const hideProductContent = document.getElementById("hideProductContent");
const imgBlocLeft = document.getElementById("imgBlocLeft");
const imgBlocRight = document.getElementById("imgBlocRight");
const menu = document.getElementById('menu');

// Toggle menu
function toggleMenu() {
    menu.classList.toggle('active');
}

// Show bloc
function showElement(element) {
    element.style.display = "block";
}

//Hide bloc
function hideElement(element) {
    element.style.display = "none";
}

//Flex bloc
function flexElement(element) {
    element.style.display = "flex";
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
    flexElement(hideBespoke);
}

// show Bespoke
function showBespoke() {
    showElement(rightContent);
    hideElement(blocLeft);
    flexElement(hideProduct);
    rightContent.style.paddingBottom = "2rem";
}

// show bloc3 Bespoke
function handleBespokeActions() {
    showBespoke();
    showElement(blocRight);
    hideElement(hideBespoke);
    document.getElementById("blocLeft").classList.add('d-flex-row-reverse');
    blocRight.classList.remove('opacityTranslationTop');
    replaceImage('.image-left', 'img/image-bloc3.png', 'rotateY(180deg)');
    replaceImage('.image-right', 'img/image-bloc3.png', 'none');
}

// Fonction de réinitialisation de l'état initial
function resetState() {
    showElement(blocLeft);
    showElement(blocRight);
    hideProductResetAnimate();
    hideBespokeResetAnimate();
    replaceImage('.image-left', 'img/image-bloc2.png', 'none');
    replaceImage('.image-right', 'img/image-bloc3.png', 'none');
    blocRight.classList.remove('opacityTranslationTop');
    hideBespokeBtn.classList.remove('fadeRightRotate');
    rightContent.style.paddingBottom = "0";
}

function hideBespokeAnimate(){
    hideBespoke.classList.add('hideBespokeAnimate'); 
    hideBespokeContent.classList.add('fadeLeftRotate'); 
}

function hideBespokeResetAnimate(){
    hideBespoke.classList.add('hideBespokeResetAnimate');
    hideBespokeContent.classList.add('fadeLeftRotate'); 
}

function hideProductAnimate(){
    hideProduct.classList.add('hideProductAnimate'); 
    hideProductContent.classList.add('fadeRightRotate');
}

function hideProductResetAnimate(){
    hideProduct.classList.add('hideProductResetAnimate');
    hideProductContent.classList.remove('fadeRightRotate');
    hideProductContent.classList.add('fadeLeftRotate');
}

// Événements
discoverBtn.addEventListener("click", function() {
   showProduct();
   this.classList.add('fadeDown'); 
    blocRight.classList.add('opacityTranslationTop');
    hideBespokeAnimate();
    replaceImage('.image-right', 'img/image-bloc2.png', 'rotateY(180deg)');
});



hideProductBtn.addEventListener("click", function() {
    replaceImage('.image-left', 'img/image-bloc2.png', 'none');
    replaceImage('.image-right', 'img/image-bloc2.png', 'rotateY(180deg)');
    showProduct();
    showElement(blocLeft);
    document.getElementById("blocLeft").classList.remove('d-flex-row-reverse');
    hideProductContent.classList.add('fadeRightRotateEnd');
    blocRight.classList.add('opacityTranslationTop');
    hideProductResetAnimate();
    hideBespokeAnimate();
});

learnBtn.addEventListener("click", function(){
    handleBespokeActions();
    hideProductAnimate();
    this.classList.add('fadeDown');  

});
hideBespokeBtn.addEventListener("click", function(){
    handleBespokeActions();
    hideProductAnimate();
});

[imgBlocLeft, imgBlocRight].forEach(function(element) {
    element.addEventListener("click", function() {
        resetState();
        leftContent.classList.add('opacityTranslationDown');
        rightContent.classList.add('opacityTranslationDown');
        document.getElementById("blocLeft").classList.remove('d-flex-row-reverse');
    });
});
