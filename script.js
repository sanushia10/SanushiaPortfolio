/* ================= MOUSE GLOW ================= */

const mouseGlow = document.createElement("div");

mouseGlow.className = "mouse-glow";

mouseGlow.style.position = "fixed";
mouseGlow.style.width = "240px";
mouseGlow.style.height = "240px";
mouseGlow.style.borderRadius = "50%";
mouseGlow.style.pointerEvents = "none";
mouseGlow.style.background =
    "radial-gradient(circle, rgba(0,229,255,0.07), transparent 70%)";
mouseGlow.style.transform = "translate(-50%, -50%)";
mouseGlow.style.zIndex = "-1";
mouseGlow.style.opacity = "0";

document.body.appendChild(mouseGlow);

document.addEventListener("mousemove", function (event) {
    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";
    mouseGlow.style.opacity = "1";
});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".about-card, .tech-card, .project-card, .facts-row, .approach-step"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.75s ease, transform 0.75s ease";

    observer.observe(element);

});


/* ================= NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top + window.scrollY - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    {
        passive: true
    }
);

updateActiveNav();


/* ================= BUTTON CLICK EFFECT ================= */

const buttons = document.querySelectorAll(
    ".btn, .project-btn, .contact-link"
);

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.97)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});


/* ================= FOOTER YEAR ================= */

const footerText =
    document.getElementById("footer-text");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.textContent =
        `© ${year} SANUSHIA • AI & DATA SCIENCE • BUILT WITH CODE & CURIOSITY`;

}