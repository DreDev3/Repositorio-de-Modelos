//Botões de avançar e retroceder story
function checkScroll() {
    var container = document.getElementById('scrollContainer');
    var scrollLeft = container.scrollLeft;
    var scrollRight = container.scrollWidth - container.clientWidth - scrollLeft;

    var scrollLeftButton = document.getElementById('scrollLeftButton');
    var scrollRightButton = document.getElementById('scrollRightButton');

    if (scrollLeft === 0) {
        scrollLeftButton.style.display = 'none';
    } else {
        scrollLeftButton.style.display = 'block';
    }

    if (scrollRight === 0) {
        scrollRightButton.style.display = 'none';
    } else {
        scrollRightButton.style.display = 'block';
    }
}

function scrollLeft() {
    var container = document.getElementById('scrollContainer');
    container.scrollLeft -= 660;
    checkScroll();
}

function scrollRight() {
    var container = document.getElementById('scrollContainer');
    container.scrollLeft += 660;
    checkScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('scrollContainer');
    container.addEventListener('scroll', checkScroll);
    checkScroll();
})
//[FIM] Botões de avançar e retroceder story

let option = document.querySelector('.windowcenter')
function options() {
    option.style.display = 'block'

    // botao.addEventListener(option.classList.toggle('active'))

}

function cancelar() {
    option.style.display = 'none'
}

/*function mudar() {
    let image = document.querySelector('.image')
    let fotoPerfil = document.querySelector('.ftperf')

    image.style.background = '#5e5e5e'
    fotoPerfil.style.background = '#5e5e5e'
 }*/