const scriptURL = 'https://script.google.com/macros/s/AKfycbzymFBZPV72nKFvtoNAVWMmLps6YbK0qqCeQvaKRYckbDv0C-DpQFIjTgGWauvhkJp87g/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted!');  // Log when form is submitted
    console.log(new FormData(form));  // Log the form data

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent to Dipanshu Successfully!!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 1500);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Error sending message!";
            console.error('Error!', error.message);
        });
});
