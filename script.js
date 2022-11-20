

$ (document).ready (function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header-menu').toggleClass('active');
    });
})


$(document).ready (function() {
    $('.catalog__inner').click (function (event) {
        $('.catalog__list').ready
    })
})







window.onscroll = () =>  {
    const header = document.querySelector ('.header');
    // console.log(window.scrollY);

    const Y = window.scrollY

    if( Y > 2) {
        // header = classList.add('header__fixed')
        header.classList.add('header__fixed');
        // console.log(window.scrollY)
    }   else if (Y < 1) {
        header.classList.remove('header__fixed');

    }
}





