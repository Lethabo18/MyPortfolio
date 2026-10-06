const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// Send information to WhatsApp
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the information 
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Your WhatsApp number
    const phoneNumber = "27639206567";

    // Create the WhatsApp message
    const whatsappMessage =
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});

