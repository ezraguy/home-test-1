
function addFixedClass() {
    var sidePanel = document.getElementById('side-pan');
    window.addEventListener('scroll', function () {
        if (pageYOffset >= 270)
            sidePanel.className = 'side-panel fixed ';
        else
            sidePanel.className = 'side-panel'
    })
}


function validateForm(e) {
    e.preventDefault();
    var inputs = document.getElementById('form').elements;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var emailErrorMessage = document.getElementById('email-err-msg');
    var canSubmit = true;
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        if (element.value.length === 0) {
            element.className = 'empty-input';
            canSubmit = false;
        }
        else
            element.className = 'empty-input';

        if (i === 1) {

            if (emailReg.test(element.value))
                emailErrorMessage.style.display = 'none'
            else {
                emailErrorMessage.style.display = 'block';
                canSubmit = false;
            }


        }
    }

    if (canSubmit)
        document.getElementById('success-msg').style.display = 'block'

}



window.onload = addFixedClass();