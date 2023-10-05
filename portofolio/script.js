// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });
    
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -60; // Adjust the offset based on your header's height
        
        window.scrollTo({
            top: targetElement.offsetTop + yOffset,
            behavior: "smooth"
        });
    }
});
