/* ===========================================
   TYPEWRITER EFFECT
=========================================== */

const texts = [
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "Terraform Enthusiast",
    "Linux Administrator",
    "Cloud Automation Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typewriter").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);

    }

})();

/* ===========================================
   FADE ANIMATION
=========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".fade").forEach((element) => {

    observer.observe(element);

});

/* ===========================================
   STICKY NAVBAR
=========================================== */

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});

/* ===========================================
   ACTIVE MENU LINK
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================================
   MOBILE MENU
=========================================== */

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

    menuButton.classList.toggle("open");

});

/* Close menu after click */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/* ===========================================
   PARTICLE BACKGROUND
=========================================== */

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

for (let i = 0; i < 120; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 3 + 1,

        dx: (Math.random() - 0.5),

        dy: (Math.random() - 0.5)

    });

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.r,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#00e5ff";

        ctx.fill();

        particle.x += particle.dx;

        particle.y += particle.dy;

        if (particle.x <= 0 || particle.x >= canvas.width)
            particle.dx *= -1;

        if (particle.y <= 0 || particle.y >= canvas.height)
            particle.dy *= -1;

    });

    requestAnimationFrame(animate);

}

animate();

/* ===========================================
   BACK TO TOP BUTTON
=========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});