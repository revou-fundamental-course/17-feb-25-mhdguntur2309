// ini javacript
let nama, email, interest;        
function Validasi () {
        nama = document.forms["formku"]["nama_anda"].value;
        email = document.forms["formku"]["email"].value;
        interest = document.forms["formku"]["interest"].value;

        if (nama == "" || email == "" || interest == "") {
          alert("tidak boleh ada yang kosong");
          return false;
        }
        else {
          alert("Terima Kasih "+ nama);
          return false;
        }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i, slides;
  slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}