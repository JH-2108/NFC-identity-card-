const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigator");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
}); 

document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = 
    new Date().getFullYear();


const revealElements = document.querySelectorAll(
    ".content-section, .contact-section, .project-card, .interest-card, .info-card"
);

reavealElements.forEach(element => {
    element.callList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver (
        (entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    reavealElements.forEach(element => {
        observer.observe(element);
    });
} else {

    reavelElements.forEach(element => {
        element.classList.add("visible");
    });
}
