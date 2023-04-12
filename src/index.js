console.log('Hello world');

// Import our custom CSS
import './stylesheets/main.scss'
//import './bootstrap.bundle.min'

//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import Alert from '../../node_modules/bootstrap/js/dist/alert'

// or, specify which plugins you need:
//import { Tooltip, Toast, Popover } from 'bootstrap'

//let items = document.querySelectorAll('.bottom_menu .carousel-item')

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


