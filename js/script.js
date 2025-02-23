// ini javacript
let nama, email, interest;        
        function Validasi () {
        nama = document.forms["formku"]["nama_anda"].value;
        email = document.forms["formku"]["email"].value;
        interest = document.forms["formku"]["interest"].value;
        if (nama == "") {
          alert("Name must be filled out");
          return false;
        }
        if (email == "") {
          alert("Email must be filled out");
          return false;
        }
        if (interest == "") {
          alert("Interest must be filled out");
          return false;
        }
        console.log(nama);
        console.log(email);
        console.log(interest);

};