/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';



 // init Swiper:
 const swiper = new Swiper('.swiper', {
 // configure Swiper to use modules
 modules: [Navigation, Pagination],



 // Optional parameters
 direction: 'horizontal',
 loop: true,



 // If we need pagination
 pagination: {
 el: '.swiper-pagination',
 },



 // Navigation arrows
 navigation: {
 nextEl: '.swiper-button-next',
 prevEl: '.swiper-button-prev',
 },
 });
