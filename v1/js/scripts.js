/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//   TYPEEFFECT

const text = ['Engineer', 'Developer', 'Hardworker'];
let count = 0;
let index = 0;
let current_text = '';
let letter = '';

(function type() {
    if (count == text.length) {
        count = 0;
    }
    
    current_text = text[count];
    letter = current_text.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;

    if (letter.length === current_text.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);

}());