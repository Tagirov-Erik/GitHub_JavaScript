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

    if (firstName.length < 5 || lastName.length < 5 || userEmail.length < 5) {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('userEmail').value = '';
    } else {
        alert("Succes");
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.userEmail = userEmail;
        console.log(userInfo);
    }
}

