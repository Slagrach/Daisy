/** ************************* <MENU> ************************* **/
$('.menu-burger').click(function (event) {
    $('.menu-burger,.menu-body').toggleClass('active');
    $('body').toggleClass('lock');
});
$('.menu-link').click(function (event) {
    $('.menu-burger,.menu-body').removeClass('active');
    $('body').removeClass('lock');
});
/** ************************* <SVG> ************************* **/
$('img.img-svg1,.img-svg2').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});
/** ************************* <SLIDER> ************************* **/
$('.comment-slider').slick({
    slidesToShow: 1
});
/** ************************* <MAP> ************************* **/
let map;
DG.then(function () {
    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
    });
});
/** ************************* <FULLPAGE> ************************* **/
// $('#fullpage').fullpage({
//     autoScrolling:true,
//     scrollHorizontally: true,
//     scrollOverflow: true,
//     sectionSelector: '.page-section',
//     anchors: ['intro','about', 'expand', 'process', 'services', 'avertising', 'kit', 'portfolio', 'team', 'contact'],
//     menu: '#myMenu',
//     responsiveWidth: 768
// });
/** ************************* <FILTER> ************************* **/
let filter = $("[data-filter]");

filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if (cat === 'all') {
        $("[data-cat]").removeClass("hide");
    } else {
        $("[data-cat]").each(function () {
            let workCat = $(this).data('cat');

            if (workCat !== cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
    }
});

// $('.portfolio-nav__link').click(function (e) {
//     e.preventDefault();
//     $('.portfolio-nav__link').removeClass('include');
//     $(this).addClass('include');
// });
/** ************************* <SCROLLING MENU> ************************* **/
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
        document.querySelectorAll('.page').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
                document.querySelectorAll('.menu-body a').forEach((el) => {
                    if (el.classList.contains('link')) {
                        el.classList.remove('link');
                    }
                });

                document.querySelectorAll('.menu-body li')[i].querySelector('a').classList.add('link');
            }
        });
    }
});