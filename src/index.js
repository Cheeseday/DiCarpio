console.log('Hello world');

// Import our custom CSS
import './stylesheets/main.scss'

//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// let items = document.querySelectorAll('.bottom_menu .carousel-item')

// const screenWidth = window.screen.width;
// if(screenWidth >= 1200){
//     items.forEach((el) => {
//         const minPerSlide = 5
//         let next = el.nextElementSibling
//         for (var i=1; i<minPerSlide; i++) {
//             if (!next) {
//                 // wrap carousel by using first child
//                 next = items[0]
//             }
//             let cloneChild = next.cloneNode(true)
//             el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     })
// }
// if(screenWidth >= 992){
//     items.forEach((el) => {
//         const minPerSlide = 4
//         let next = el.nextElementSibling
//         for (var i=1; i<minPerSlide; i++) {
//             if (!next) {
//                 // wrap carousel by using first child
//                 next = items[0]
//             }
//             let cloneChild = next.cloneNode(true)
//             el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     })
// }
// else {
//     items.forEach((el) => {
//         const minPerSlide = 3
//         let next = el.nextElementSibling
//         for (var i=1; i<minPerSlide; i++) {
//             if (!next) {
//                 // wrap carousel by using first child
//                 next = items[0]
//             }
//             let cloneChild = next.cloneNode(true)
//             el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     })
// }

const ON_ACTION = document.querySelector("#on_action_label");
const NEW = document.querySelector("#new_product_label");
const COMMEND = document.querySelector("#commend_label");
const ON_ACTION_CAROUSEL = document.querySelector(".products_for_shares");
const NEW_CAROUSEL = document.querySelector(".new_products");
const COMMEND_CAROUSEL = document.querySelector(".commend_products");
console.log(ON_ACTION, NEW, COMMEND, ON_ACTION_CAROUSEL, NEW_CAROUSEL, COMMEND_CAROUSEL);
//TEMPLATE.hidden = true;


if (document.querySelector("#carousels_module") !== null){
    const newActive = () => {
        NEW.classList.add("active");
        ON_ACTION.classList.remove("active");
        COMMEND.classList.remove("active");
        //ABOUT.classList.add("active");
        //ABOUT_CONTENT.classList.add("active");
        //ABOUT_CONTENT.classList.remove("inactive");

        //HOW_TO_COOK.classList.remove("active");
        //HOW_TO_COOK_CONTENT.classList.add("inactive");
        NEW_CAROUSEL.classList.remove("inactive");
        ON_ACTION_CAROUSEL.classList.add("inactive");
        COMMEND_CAROUSEL.classList.add("inactive");
    }
    const onActionActive = () => {
        ON_ACTION.classList.add("active");
        NEW.classList.remove("active");
        COMMEND.classList.remove("active");

        ON_ACTION_CAROUSEL.classList.remove("inactive");
        NEW_CAROUSEL.classList.add("inactive");
        COMMEND_CAROUSEL.classList.add("inactive");
    }
    const commendActive = () => {
        COMMEND.classList.add("active");
        ON_ACTION.classList.remove("active");
        NEW.classList.remove("active");

        COMMEND_CAROUSEL.classList.remove("inactive");
        NEW_CAROUSEL.classList.add("inactive");
        ON_ACTION_CAROUSEL.classList.add("inactive");
    }

    ON_ACTION.addEventListener("click", onActionActive);
    NEW.addEventListener("click", newActive);
    COMMEND.addEventListener("click", commendActive);
}




/* Product page additional information block */
if(document.querySelector("#how_to_cook") !== null){

    const ABOUT = document.querySelector("#about_product");
    const HOW_TO_COOK = document.querySelector("#how_to_cook");
    const ABOUT_CONTENT = document.querySelector("#additional_content_wrapper");
    const HOW_TO_COOK_CONTENT = document.querySelector("#how_to_cook_wrapper");

    const aboutActive = () => {
        ABOUT.classList.add("active");
        ABOUT_CONTENT.classList.add("active");
        ABOUT_CONTENT.classList.remove("inactive");

        HOW_TO_COOK.classList.remove("active");
        HOW_TO_COOK_CONTENT.classList.add("inactive");
        HOW_TO_COOK_CONTENT.classList.remove("active");
    }

    const howToCookActive = () => {
        HOW_TO_COOK.classList.add("active");
        HOW_TO_COOK_CONTENT.classList.add("active");
        HOW_TO_COOK_CONTENT.classList.remove("inactive");

        ABOUT.classList.remove("active");
        ABOUT_CONTENT.classList.add("inactive");
        ABOUT_CONTENT.classList.remove("active");
    }

    ABOUT.addEventListener("click", aboutActive);
    HOW_TO_COOK.addEventListener("click", howToCookActive);
}


/* Carousel for product page "you may be interested in" */
const productsArray = [
    {
        image: 'assets/images/product_categories/fresh_frozen_fish/sea_bass/sea_bass_1.jpeg',
        title: 'Сибас н/р 300-400', 
        price: '23.60 руб / кг', 
        subtitle: 'за упаковку 750 гр - 17,70 руб', 
        link: 'sea_bass.html',
    },
    {
        image: 'assets/images/product_categories/fresh_frozen_fish/dorado/dorado.jpeg',
        title: 'Дорадо н/р 300-400', 
        price: '27.35 руб / кг', 
        subtitle: 'цена за упаковку 0,7 кг - 19,15 руб', 
        link: 'dorado.html',
    },
    {
        image: 'assets/images/product_categories/fresh_frozen_fish/sea_perch/red-sea-perch.jpg',
        title: 'Окунь морской 300-500 ПБГ', 
        price: '21.55 руб / кг', 
        subtitle: 'за упаковку 850 гр - 18,32 руб', 
        link: 'red_sea_perch.html',
    },
    {
        image: 'assets/images/product_categories/fillets_and_steaks/tuna_steaks/tuna_steaks_1.jpeg',
        title: 'Стейки тунца 50+', 
        price: '16.50 руб / уп', 
        subtitle: 'цена за упаковку 0,5 кг', 
        link: 'tuna_steaks.html',
    },
    {
        image: 'assets/images/product_categories/fillets_and_steaks/sockeye_steaks/sockeye_1.jpeg',
        title: 'Стейки нерки 150-250', 
        price: '38.50 руб / кг', 
        subtitle: 'цена за упаковку 600 гр - 23,10 руб', 
        link: 'sockeye_steaks.html',
    },
];

const TEMPLATE = document.querySelector("#related_product_slider > div");
//document.querySelector("#related_product_slider > div")
//const TEMPLATE = document.querySelector("#card_template");
const CARD = TEMPLATE.firstElementChild;

let numOfCards = 6;
let cardsArray = [];

function cardsGenerator(array){
    for(let i = 0; i < array.length; i++){
        let elem = TEMPLATE.cloneNode(true);
        elem.setAttribute('id', `card_${i}`);
        //elem.setAttribute('class', 'item col px-1 py-2 px-sm-2 py-sm-3');
        let children;
        if (elem.hasChildNodes()) {
            children = elem.getElementsByTagName('*');
            //console.log(children)
            for(let child of children){
                if(child.nodeName === 'A'){
                    child.setAttribute('href', `${array[i].link}`);
                }
                if(child.nodeName === 'IMG'){
                    child.setAttribute('src', `${array[i].image}`);
                }
                if(child.nodeName === 'H5'){
                    child.firstElementChild.textContent = array[i].title;
                }
                if(child.nodeName === 'SPAN' && child.getAttribute('class') === 'catalog_card__price fw-bolder fs-md-5 my-0'){
                    child.textContent = array[i].price;
                }
                if(child.nodeName === 'SPAN' && child.getAttribute('class') === 'product__correction_info'){
                    child.textContent = array[i].subtitle;
                }
            }
        }
        cardsArray.push(elem);
    }
    cardsArray;
}
cardsGenerator(productsArray);
TEMPLATE.after(...cardsArray);

window.addEventListener("resize", function() {
    console.log(innerWidth);
}, false);
//const screenWidth = window.innerWidth;
let amountOfSlides = (screenWidth >= 1200) ? 5 : (screenWidth >= 992) ? 4 : (screenWidth >= 768) ? 3 : 2;
document.querySelector("#card_0");
TEMPLATE.hidden = true;


// function createCarousel (startElement, amountOfSlides, array){
//     for(let i = 0; i < array.length; i++){
//         startElement.after(array[i]);
//     }
//     // for(let i = 0; i < amountOfSlides; i++){
//     //     array[i].classList.add("active")
//     // }
// }


// Useful block for product card carousel
// let set = new Set();         
// while(set.size < cardsArray.length) {
//     set.add(Math.floor(Math.random()*(cardsArray.length-0.1)));
// }
// let arr = [];
// for(let index of set.keys()){
//     arr.push(cardsArray[index]);
// }
// TEMPLATE.after(...arr);
// TEMPLATE.hidden = true;


//document.querySelector(`#card_1 > div > div > span`).getAttribute('class')



const CAR= {src: "assets/images/product_categories/fresh_frozen_fish/halibut_gwh/halibut-gwh.jpeg",}
let card_title = document.querySelector('.card_title');
card_title.innerHTML = "Dorado";

let catalog_card__price = document.querySelector('.catalog_card__price');
catalog_card__price.innerHTML = "18.20";

let card_image = document.querySelector('#card_image');
card_image.setAttribute('src', `${CAR.src}`);