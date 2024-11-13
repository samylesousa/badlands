let indexSlide = 0;
showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("slide");
    let bolinhas = document.getElementsByClassName("bolinha");


    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    for(let i=0;i<bolinhas.length;i++){
        bolinhas[i].className = bolinhas[i].className.replace(" ativa", "");
    }

    indexSlide++;
    if(indexSlide>slides.length){
        indexSlide=1
    }

    slides[indexSlide-1].style.display = "block";
    bolinhas[indexSlide-1].className = bolinhas[indexSlide-1].className + " ativa";

    setTimeout(showSlides, 20000);
}

function slideAtual(n){
    indexSlide = n;
    showSlides();
}