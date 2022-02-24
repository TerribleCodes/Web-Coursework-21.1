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

// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { 
    slider.reset();
    if (current === items.length - 1) current = -1; 
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { 
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { 
        item.classList.add('active');
      }
    })
    current = dataIndex; 
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); 
  },
  reset: () => { 
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { 
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes;
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { 
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; 
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();

// end of model popup