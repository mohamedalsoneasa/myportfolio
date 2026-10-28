// Scroll To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (topBtn) {
        if (document.documentElement.scrollTop > 100) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const messageInput = document.getElementById("message");
const secretBox = document.getElementById("secretBox");

if (messageInput && secretBox) {
    messageInput.addEventListener("input", function () {
        const typedValue = this.value.trim().toLowerCase();

        if (typedValue.includes("secretpage1")) {
            secretBox.classList.add("show");
        } else {
            secretBox.classList.remove("show");
        }
    });
}

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        document.getElementById("successMsg").innerHTML =
            "Message sent successfully!";

        contactForm.reset();
        secretBox.classList.remove("show");

    });
}