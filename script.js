
(function () {
'use strict'


const input = document.querySelector('.input-wr input');
const button = document.querySelector('.input-wr button');
const errorMsg = document.querySelector('.error');


function checkEmail() {
    var re = /\S+@\S+\.\S+/;
    re.test(input.value) 
    ? errorMsg.classList.add('throw') 
    : errorMsg.classList.remove('throw')
}


button.addEventListener('click', checkEmail)

})();




