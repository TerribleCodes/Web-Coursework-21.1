const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

// close mobile menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const eventMenu = document.querySelector('#event-page')
    const targetMenu = document.querySelector('#SDG-page')
    let scrollPos = window.scrollY


// adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        // eventMenu.classList.remove('highlight')
        // target Menu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        eventMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth >960 && scrollPos < 2345){
        eventMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        targetMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 2345 && scrollPos < 3000){
        targetMenu.classList.add('highlight')
        eventMenu.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem ){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click', highlightMenu)











//model pf popup js

document.getElementById('sign_up_btn').addEventListener('click',
function(){
    document.querySelector('.bg_model').style.display ='flex';
}
);

document.getElementById('close').addEventListener('click',
function(){
    document.querySelector('.bg_model').style.display ='none';
}
);

document.getElementById('sign_In_model1').addEventListener('click',
function(){
    document.querySelector('.bg_model').style.display ='none';
    document.querySelector('.bg_model2').style.display ='flex';
}
);

document.getElementById('c_n_s_i').addEventListener('click',
function(){
    document.querySelector('.bg_model2').style.display ='none';
    document.querySelector('.bg_model3').style.display ='flex';
}
);

document.getElementById('close2').addEventListener('click',
function(){
    document.querySelector('.bg_model2').style.display ='none';
}
);

document.getElementById('sign_up_model1').addEventListener('click',
function(){
    document.querySelector('.bg_model').style.display ='none';
    document.querySelector('.bg_model3').style.display ='flex';
}
);

document.getElementById('signin_mod3').addEventListener('click',
function(){
    document.querySelector('.bg_model3').style.display ='none';
    document.querySelector('.bg_model2').style.display ='flex';
}
);

document.getElementById('close3').addEventListener('click',
function(){
    document.querySelector('.bg_model3').style.display ='none';
}
);

// end of model popup
