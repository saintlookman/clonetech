let fname = document.getElementById('fname');
fname.style.color = "blue";
let lname = document.getElementById('lname');
lname.style.color = "blue";
let transaction = document.getElementById('transaction');
let msg = document.getElementById('msg');
let pin = document.getElementById('pin');
pin.style.background = "light";
let cpin = document.getElementById('cpin');
cpin.style.background = "lightgray";
let formSubmitbtn = document.querySelector('#mainForm');



formSubmitbtn.addEventListener('submit',submited);

function submited(e) {
    
   e.preventDefault();

   if (fname.value == '' || lname.value == '')
   {
      window.alert("Please supply both First Name and Last Name");
       // msg.className = 'error'
        //msg.innerHTML = "Please Supply Both Names"

   }
   else if (pin.value !== cpin.value)
   {
      window.alert("Please supply correct PIN");
   
   }

   else
   {
      window.alert("Info OK");
      btnSubmit.style.display = "none";
      transaction.style.display = "block";
      row2.style.display = "block";
      
   }
}

