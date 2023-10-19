const form = document.getElementById("form"),
    btn = document.getElementById("button");

let menu = document.getElementById("menu"),
    navjs = document.querySelectorAll(".navjs"),
    ul = document.getElementById("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.value = "Sending...";
    const serviceID = "default_service";
    const templateID = "template_1k2spso";
    emailjs.sendForm(serviceID, templateID, form).then(
        () => {
            btn.value = "Contact me";
            Swal.fire(
                "Message Sent",
                "Your message has been sent successfully! We will get back to you shortly.",
                "success"
            );
            form.reset();
        },
        (err) => {
            btn.value = "Contact Me";
            Swal.fire(
                "Error",
                "There was a problem sending your message. Please try again later.",
                "error"
            );
        }
    );
});

navjs.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        if (menu.checked) {
            menu.checked = false;
            ul.classList.remove("peer-checked/menu:clip-circle-full");
        } else {
            ul.classList.add("peer-checked/menu:clip-circle-full");
        }
    });
});
