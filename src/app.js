$( document ).ready(function() {
    
    var slideIndex = 1;
    showSlides(slideIndex);

// Richiamo funzione per scorrimento gallery
    $('.prev').on("click", function plusSlides(n) {
        showSlides(slideIndex -= 1);
    })
    $('.next').on("click", function plusSlides(n) {
        showSlides(slideIndex  += 1);
    })

    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

//*******FUNZIONI
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
});
