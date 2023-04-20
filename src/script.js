AOS.init({
  // delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});
function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'username',
    Password: 'password',
    To: 'them@website.com',
    From: 'you@isp.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  }).then((message) => alert(message));
}
