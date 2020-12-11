


function handleScroll() {
    var sidePanel = document.getElementById('side-pan');
    if (document.documentElement.scrollTop >= 270)
        sidePanel.className = ' side-panel fixed ';
    else
        sidePanel.className = ' side-panel '

}


function validateForm() {
    var inputs = document.getElementsByTagName('input');
    var textarea = document.getElementById('message');
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var emailErrorMessage = document.getElementById('email-err-msg');
    var canSubmit = true;

    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        if (element.value.length === 0) {
            element.className = ' empty-input ';
            canSubmit = false;
        }
        else
            element.className = '';

        if (i === 1) {

            if (emailReg.test(element.value))
                emailErrorMessage.style.display = 'none'
            else {
                emailErrorMessage.style.display = 'block';
                canSubmit = false;
            }


        }
    }

    if (textarea.value.length === 0) {

        textarea.className = 'empty-input ';
        canSubmit = false;
    }
    else
        textarea.className = '';

    if (canSubmit)
        document.getElementById('success-msg').style.display = 'block'

}

// ie 8 support
window.onload = new function () {
    if (window.addEventListener)
        window.addEventListener("scroll", handleScroll);
    else
        window.attachEvent("scroll", handleScroll);
};