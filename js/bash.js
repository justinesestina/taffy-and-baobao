console.log("HELLO");

$(document).ready(function(){
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 45,  // Bilis ng pag-type (mas mataas = mas mabagal)
        startDelay: 0,  // Walang delay bago mag-start
        backSpeed: 0,   // Walang backspacing
        smartBackspace: false, // Para hindi niya i-adjust ang text
        shuffle: false, // Para hindi random ang pag-type
        backDelay: 999999, // Super taas ng delay para di na bumalik
        loop: false,  // Hindi uulit ang pag-type
        showCursor: false // Para mawala yung blinking cursor
    });
});
