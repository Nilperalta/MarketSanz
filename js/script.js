
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



const phoneNumber = "51926588816";

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


// Submenú móvil
document.querySelectorAll('.nav-item > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('open');
        }
    });
});


// Cargar más productos
const boxes = document.querySelectorAll('.categoria-productos .box');
const btnCargarMas = document.getElementById('btnCargarMas');
const cantidad = 12;
let visibles = 0;

function mostrarProductos() {
    const limite = visibles + cantidad;
    for (let i = visibles; i < limite && i < boxes.length; i++) {
        boxes[i].classList.remove('hidden');
    }
    visibles = limite;
    if (visibles >= boxes.length) {
        btnCargarMas.style.display = 'none';
    }
}

// Ocultar todos al inicio
boxes.forEach(box => box.classList.add('hidden'));

// Mostrar primeros 12
mostrarProductos();

// Botón cargar más
if (btnCargarMas) {
    btnCargarMas.addEventListener('click', mostrarProductos);
}