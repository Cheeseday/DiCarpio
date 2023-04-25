console.log('Hello world');

// Import our custom CSS
import './stylesheets/main.scss'

import { productDescription } from './js/productDescription';

import { carouselModule } from './js/carouselModule';

import forms from './js/forms'

//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


/* Product page additional information block */
productDescription();

/* Control element for carousel module (with new, commend and for_shares carousels) */
carouselModule();

/* Forms validation */
forms();

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

// const TEMPLATE = document.querySelector("#related_product_slider > div");
// //document.querySelector("#related_product_slider > div")
// //const TEMPLATE = document.querySelector("#card_template");
// const CARD = TEMPLATE.firstElementChild;

// let numOfCards = 6;
// let cardsArray = [];

// function cardsGenerator(array){
//     for(let i = 0; i < array.length; i++){
//         let elem = TEMPLATE.cloneNode(true);
//         elem.setAttribute('id', `card_${i}`);
//         //elem.setAttribute('class', 'item col px-1 py-2 px-sm-2 py-sm-3');
//         let children;
//         if (elem.hasChildNodes()) {
//             children = elem.getElementsByTagName('*');
//             //console.log(children)
//             for(let child of children){
//                 if(child.nodeName === 'A'){
//                     child.setAttribute('href', `${array[i].link}`);
//                 }
//                 if(child.nodeName === 'IMG'){
//                     child.setAttribute('src', `${array[i].image}`);
//                 }
//                 if(child.nodeName === 'H5'){
//                     child.firstElementChild.textContent = array[i].title;
//                 }
//                 if(child.nodeName === 'SPAN' && child.getAttribute('class') === 'catalog_card__price fw-bolder fs-md-5 my-0'){
//                     child.textContent = array[i].price;
//                 }
//                 if(child.nodeName === 'SPAN' && child.getAttribute('class') === 'product__correction_info'){
//                     child.textContent = array[i].subtitle;
//                 }
//             }
//         }
//         cardsArray.push(elem);
//     }
//     cardsArray;
// }
// cardsGenerator(productsArray);
// TEMPLATE.after(...cardsArray);

// window.addEventListener("resize", function() {
//     console.log(innerWidth);
// }, false);
// //const screenWidth = window.innerWidth;
// let amountOfSlides = (screenWidth >= 1200) ? 5 : (screenWidth >= 992) ? 4 : (screenWidth >= 768) ? 3 : 2;
// document.querySelector("#card_0");
// TEMPLATE.hidden = true;


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
// const addressForm = document.querySelector('#address_data_form');
// addressForm.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('/article/formdata/post/user', {
//       method: 'POST',
//       body: new FormData(addressForm),
//     });

//     let result = await response.json();

//     //console.log(JSON.stringify(result));
//     alert(result.message);
//   };