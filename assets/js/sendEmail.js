function sendMail(contactForm) {
    email.js.send("gmail", "resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
        console.log("Success!", response);
    },  function(error) {
        console.log("Failed...", error);
    });
}

