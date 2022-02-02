const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

//model pf popup js

document.getElementById('log_in').addEventListener('click',
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
