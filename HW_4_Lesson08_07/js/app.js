$('#confirmBtn').click(checkConfirm);

/**
 * Check validation input. Validation logic: every text field must be > 5 symbols.
 */
function checkConfirm() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var userEmail = $('#userEmail').val();
   
    if (firstName.length >= 5 && lastName.length >= 5 && userEmail.length >= 5) {
        $('input').next().removeClass('error');
        var userInfo = {};
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.userEmail = userEmail;
        alert("Succes. Object created.");
        console.log(userInfo);
        return;
    }
    if (firstName.length < 5) {
        $('#firstName').val('');
        $('#firstName').next().addClass('error');
    } else {
        $('#firstName').next().removeClass('error');
    }
    if (lastName.length < 5) {
        $('#lastName').val('');
        $('#lastName').next().addClass('error');
    } else {
        $('#lastName').next().removeClass('error');
    }
    if (userEmail.length < 5) {
        $('#userEmail').val('');
        $('#userEmail').next().addClass('error');
    } else {
        $('#userEmail').next().removeClass('error');
    }
}

