
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;

    alert("Thank you " + name +
          "! Your message has been submitted.");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    document.getElementById("contactForm").reset();

});
