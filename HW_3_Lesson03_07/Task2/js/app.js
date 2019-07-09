var confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', checkConfirm);

/**
 * Check validation input. Validation logic: every text field must be > 5 symbols.
 */
function checkConfirm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userInfo = {};

    if (firstName.length >= 5 && lastName.length >= 5 && userEmail.length >= 5) {
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.userEmail = userEmail;
        alert("Succes. Object created.");
        console.log(userInfo);
        return;
    }

    if (firstName.length < 5) {
        alert("First name is too short");
        document.getElementById('firstName').value = '';
    }
    if (lastName.length < 5) {
        alert("Last name is too short");
        document.getElementById('lastName').value = '';
    }
    if (userEmail.length < 5) {
        alert("Email is too short");
        document.getElementById('userEmail').value = '';
    }
}

