// ===============================
// PORTFOLIO INTERACTIVE EFFECTS
// ===============================


// Mouse Glow

const mouseGlow = document.createElement("div");

mouseGlow.style.position = "fixed";
mouseGlow.style.width = "250px";
mouseGlow.style.height = "250px";
mouseGlow.style.borderRadius = "50%";
mouseGlow.style.pointerEvents = "none";

mouseGlow.style.background =
    "radial-gradient(circle, rgba(0,229,255,0.10), transparent 70%)";

mouseGlow.style.transform =
    "translate(-50%, -50%)";

mouseGlow.style.zIndex = "-1";

document.body.appendChild(mouseGlow);


document.addEventListener("mousemove", function (event) {

    mouseGlow.style.left =
        event.clientX + "px";

    mouseGlow.style.top =
        event.clientY + "px";

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .about-story, .about-facts, .section-title, .section-text, .section-label"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// ===============================
// ACTIVE NAV
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }
);


// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            button.style.transform =
                "scale(0.96)";

            setTimeout(
                function () {

                    button.style.transform = "";

                },
                120
            );

        }
    );

});


// ===============================
// CURRENT YEAR
// ===============================

const footerText =
    document.getElementById("footer-text");


if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} SANUSHIA
        <br>
        AI & DATA SCIENCE STUDENT
        <br><br>
        BUILT WITH CODE & CREATIVITY ✨`;

}


// ===============================
// CONSOLE
// ===============================

console.log(
    "✨ Welcome to Sanushia's Portfolio!"
);

console.log(
    "🚀 AI & Data Science Student | Creative Builder"
);