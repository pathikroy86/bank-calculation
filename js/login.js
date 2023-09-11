var bgImage = document.getElementById('background');
bgImage.style.backgroundImage = 'url("background.jpg")';
bgImage.style.backgroundSize = 'cover';
bgImage.style.backgroundRepeat = 'no-repeat';


document.getElementById("submit").addEventListener('click', function () {
    const emailField = document.getElementById("email-field");
    const passwordField = document.getElementById("password-field");
    const emailValue = emailField.value;
    const passValue = passwordField.value;
    if (emailValue === 'pathik.roy86@gmail.com' && passValue === 'P@ar51291') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Email and password did not match. Please enter a valid username and password')
    }
})

