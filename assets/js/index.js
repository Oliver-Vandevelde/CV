
window.onload = function(){
    ScrollReveal({ reset: true });
    ScrollReveal({ duration: 1000 })
    ScrollReveal().reveal(".me");
    ScrollReveal().reveal(".name", { delay: 500 });
    ScrollReveal().reveal(".firstname", { delay: 1000 });
    ScrollReveal().reveal(".devjr", { delay: 1500 });

    ScrollReveal().reveal(".bio", { delay: 250 });
    ScrollReveal().reveal(".experience", { delay: 250 });

    ScrollReveal().reveal(".travaux", { delay: 250 });
    ScrollReveal().reveal(".site1", { delay: 250 });
    ScrollReveal().reveal(".site2", { delay: 500 });
    ScrollReveal().reveal(".site3", { delay: 750 });

    ScrollReveal().reveal(".contact", { delay: 250 });
}

let bar = document.getElementById('navbar');
let size = (window.innerWidth /4);

window.onscroll = function(){
     if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
          bar.className = "navbar1";
     }
     else{
          bar.className = "navbar2";
     }
};