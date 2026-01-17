
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');  
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


let slides = document.querySelectorAll('.slide-container');
let index = 0;


function next(){
    slides[index].classList.remove('active');
    index = (index+1)% slides.length;
    slides[index].classList.add('active')
}


function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)% slides.length;
    slides[index].classList.add('active')
}



const phoneNumber = "51926588816"; // 👈 número del negocio

document.querySelectorAll(".btn-whatsapp").forEach(btn => {
    btn.addEventListener("click", () => {

        const box = btn.closest(".box");

        const name = box.querySelector(".product-name").innerText;
        const price = box.querySelector(".product-price").innerText;
        const img = box.querySelector(".product-img").src;

        const message = `Hola, quiero pedir este producto:%0A%0A` +
                        `*${name}*%0A` +
                        `Precio: ${price}%0A` +
                        `Imagen: ${img}`;

        const url = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(url, "_blank");
    });
});





