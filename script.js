let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar/voltar slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para ir para um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Função principal do slideshow
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Volta para o primeiro slide se passar do último
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Vai para o último slide se voltar do primeiro
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (i = A; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual e ativa o ponto correspondente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
