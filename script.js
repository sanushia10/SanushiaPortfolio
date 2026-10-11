
document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navItems.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // Automatically update the footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight the navigation link for the visible section
    const sections = document.querySelectorAll("main section[id]");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const currentId = entry.target.id;

                    navItems.forEach((link) => {
                        const isActive =
                            link.getAttribute("href") === `#${currentId}`;

                        link.classList.toggle("active", isActive);
                    });
                });
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches ? "auto" : "smooth",
                    block: "start"
                });
            }
        });
    });

    // Small reveal effect for cards when they enter the screen
    const cards = document.querySelectorAll(
        ".glass-card, .mindset-card, .contact-card"
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.08 }
        );

        cards.forEach((card) => {
            card.classList.add("reveal-ready");
            revealObserver.observe(card);
        });
    }
});
