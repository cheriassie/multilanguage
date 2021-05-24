// $('.header').addClass('active')

// document.querySelector('.header').innerHTML = '123'

$(document).ready(function() {

    $("a.scroll").click(function(event) {
        event.preventDefault();
        $('a').removeClass('active')
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        event.target.classList.add('active')
    })

    setTimeout(function() {
        $('.map-google').html(`<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.6628074689443!2d14.428513151107762!3d50.07387622220726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94895792e4ad%3A0x30c3460271ca4e07!2zUnVtdW5za8OhIDcsIDEyMCAwMCBOb3bDqSBNxJtzdG8!5e0!3m2!1sru!2scz!4v1618318712256!5m2!1sru!2scz"
        width="1440" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    }, 1000)

});

$(window).scroll(() => {
    if (this.scrollY >= 45) {
        $('.header').addClass('active')
        $('#logo-img').attr('src', 'images/widgets/logo_white.svg')
        $('.header1').addClass('active')
    } else {
        $('.header').removeClass('active')
        $('#logo-img').attr('src', 'images/widgets/logo.svg')
        $('.header1').removeClass('active')
    }
})