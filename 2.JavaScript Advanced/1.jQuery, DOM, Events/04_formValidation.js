function validate() {
    let companyCheckbox = $('#company');
    companyCheckbox.on('change', function () {
        if (this.checked) {
            $('#companyInfo').css('display', 'table');
            companyCheckbox.addClass('isChecked');
        } else {
            $('#companyInfo').css('display', 'none');
            companyCheckbox.removeClass('isChecked');
        }
    });

    let submitBtn = $('#submit');
    submitBtn.on('click', function (ev) {
        ev.preventDefault();

        let usernameBox = $('#username');
        let emailBox = $('#email');
        let passwordBox = $('#password');
        let confirmPasswordBox = $('#confirm-password');
        let companyNumberBox = $('#companyNumber');

        let usernameIsValid = false;

        if (!/^[0-9A-Za-z]{3,20}$/gm.test(usernameBox.val())) {
            usernameBox.css('border-color', 'red');
        } else {
            usernameBox.css('border-color', '');
            usernameIsValid = true;
        }

        let emailIsValid = false;

        if (!/^\w+@\w*\.[\w.]*$/gm.test(emailBox.val())) {
            emailBox.css('border-color', 'red');
        } else {
            emailBox.css('border-color', '');
            emailIsValid = true;
        }

        let passwordIsValid = false;

        if (!/^\w{5,15}$/gm.test(passwordBox.val())) {
            passwordBox.css('border-color', 'red');
        } else {
            passwordBox.css('border-color', '');
            passwordIsValid = true;
        }

        let confirmedPasswordIsValid = false;

        if (!/^\w{5,15}$/gm.test(confirmPasswordBox.val()) ||
                confirmPasswordBox.val() !== passwordBox.val()) {
            confirmPasswordBox.css('border-color', 'red');
        } else {
            confirmPasswordBox.css('border-color', '');
            confirmedPasswordIsValid = true;
        }

        let companyNumberIsValid = true;

        if (companyCheckbox.hasClass('isChecked')) {
            if (+companyNumberBox.val() < 1000 || +companyNumberBox.val() > 9999) {
                companyNumberBox.css('border-color', 'red');
                companyNumberIsValid = false;
            } else {
                companyNumberBox.css('border-color', '');
            }
        }

        if (usernameIsValid && emailIsValid &&
            passwordIsValid && confirmedPasswordIsValid &&
            companyNumberIsValid) {
            $('#valid').css('display', 'table');
        } else {
            $('#valid').css('display', 'none');
        }
    })
}