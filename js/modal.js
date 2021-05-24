function toggleModal() {
    $('.mobile-nav').toggleClass('active')

}
$(window).click(function(e) {
    console.log(e.target, $('.mobile-nav'))
    if (e.target == document.querySelector('.mobile-nav')) {
        $('.mobile-nav').removeClass('active')

    }

})

window.addEventListener('click', function(e) {

    if (e.target == document.querySelector('.mobile-nav')) {

        document.querySelector('.mobile-nav').classList.remove('active')

    }

})