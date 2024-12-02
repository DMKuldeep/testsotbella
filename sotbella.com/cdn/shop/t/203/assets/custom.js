document.querySelector('.custom123-close').addEventListener('click', function() {
    document.querySelector('.custom123-modal').style.display = 'none';
    document.body.classList.remove('no-scroll');

});





// Custom function to be called on form submission
function customFunction() {
    console.log("Custom function called");
    // Add your custom logic here
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('EmailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const address = document.getElementById('address').value;
    const referral = document.getElementById('referral').value;
    const instaID = document.getElementById('instaID').value;
    const dressSize = document.getElementById('dressSize').value;
    const style = document.getElementById('select-size').value;
    const source = document.getElementById('source').value;


    if (firstName && lastName && emailAddress && address && mobileNumber && referral && instaID && dressSize && style && source) {

        localStorage.setItem('hidePopup', true);

    }

}

// Add event listener to the form's submit button
document.getElementById('submitBtn').addEventListener('click', function(event) {
    customFunction(); // Call your custom function

    // The form will submit normally after this function is called
});