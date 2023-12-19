function checkForm() {
    var email = document.querySelector('#email input').value;
    var password = document.querySelector('#password input').value;

    if (email === '' || password === '') {
        alert('Please fill in both email and password fields.');
    } else {
        // Perform your sign-in logic here
        alert('Sign-in successful!');
    }
}