$('#confirmBtn').click(checkConfirm);

/**
 * Check validation input. Validation logic: every text field must be > 5 symbols.
 */
function checkConfirm() {
    $('input').next().removeClass('error');
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var userEmail = $('#userEmail').val();

    if (firstName.length < 5) {
        $('#firstName').val('');
        $('#firstName').next().addClass('error');
    } else {
        var passFirstName = true;
    }
    if (lastName.length < 5) {
        $('#lastName').val('');
        $('#lastName').next().addClass('error');
    } else {
        var passLastName = true;
    }
    if (userEmail.length < 5) {
        $('#userEmail').val('');
        $('#userEmail').next().addClass('error');
    } else {
        var passEmail = true;
    }

    if (passFirstName && passLastName && passEmail) {
        $('input').next().removeClass('error'); //clear errors after pass
        var userInfo = {};
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.userEmail = userEmail;
        alert("Succes. Object created.");
        console.log(userInfo);
        return;
    }
}

