
function init() {
    if (window.addEventListener)
        window.addEventListener("scroll", handleScroll);
    else {
        // ie8 support
        window.attachEvent("onscroll", handleScroll);
    }
}

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
        if (element.value.trim().length === 0) {
            element.className = ' empty-input ';
            canSubmit = false;
            document.getElementById(`empty-${element.id}`).style.display = 'block';
        }
        else {
            element.className = '';
            document.getElementById(`empty-${element.id}`).style.display = 'none';
        }

        if (i === 1 && element.value.length > 0) {

            if (emailReg.test(element.value)) {
                emailErrorMessage.style.display = 'none'
            }
            else {
                emailErrorMessage.style.display = 'block';
                element.className = ' empty-input ';
                canSubmit = false;
            }


        }
    }

    if (textarea.value.trim().length === 0) {
        textarea.className = 'empty-input ';
        canSubmit = false;
        document.getElementById('empty-message').style.display = 'block';
    }
    else {

        textarea.className = '';
        document.getElementById('empty-message').style.display = 'none';

    }

    if (canSubmit)
        document.getElementById('success-msg').style.display = 'block'
    else
        document.getElementById('success-msg').style.display = 'none'

}


init();