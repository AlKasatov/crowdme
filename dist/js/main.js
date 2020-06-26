let titleWrapper = document.querySelector('.slide-block__titles');
let titles = document.querySelectorAll('.slide-block__title');
let gallery = document.querySelector('.slide-block__gallery');
let translateAmount = 100 / titles.length;

titleWrapper.onclick = function (e) {
    for (let i = 0; i < titles.length; i++) {
        if (titles[i] === e.target) {
            gallery.style.transform = `translateX(-${i * translateAmount}%)`;
        }
        titles[i].classList.remove('slide-block__title--active');
    }
    e.target.classList.add('slide-block__title--active');
}

function slideUpDown(wrapper, content, media) {
    let html = document.querySelector('html');
    window.onresize = function () {
        if (html.clientWidth >= media) {
            wrapper.removeAttribute('style');
        }

    }
    if (wrapper.clientHeight > 0) {
        wrapper.style.height = `0px`;
    } else {
        let h = content.clientHeight;
        wrapper.style.height = `${h}px`;
    }
}

let wrapper = document.querySelector('.mainmenu');
let content = document.querySelector('.mainmenu_box');
let media = 930;


let logo = document.querySelector('.header__logo-img');
logo.onclick = function () {
    slideUpDown(wrapper, content, media);
    logo.classList.toggle('header__logo-img--opened');

};