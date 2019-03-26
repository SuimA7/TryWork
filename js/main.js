(function (global) {
    let topMenuIcon = document.querySelector('.top-menu-icon');
    let topMenuMobile = document.querySelector('.top-menu.mobile');
    let menuIconEvent = function(){
        topMenuIcon.classList.toggle('open');
        topMenuMobile.classList.toggle('open');
    };

    topMenuIcon.removeEventListener('click', menuIconEvent, false);
    topMenuIcon.addEventListener('click', menuIconEvent, false);
}(this));