
function addFixedClass() {
    window.addEventListener('scroll', handleScroll);
    window.attachEvent('scroll', handleScroll);
}

function handleScroll() {

    var sidePanel = document.getElementById('side-pan');
    if (document.documentElement.scrollTop >= 270)
        sidePanel.className = ' side-panel fixed ';
    else
        sidePanel.className = ' side-panel '

}


function validateForm(e) {
    e.preventDefault();

    var inputs = document.getElementById('form').elements;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var emailErrorMessage = document.getElementById('email-err-msg');
    var canSubmit = true;
    for (var i = 0; i < inputs.length; i++) {
        if (i === 3)
            continue
        var element = inputs[i];
        console.log(element.type);
        if (element.value.length === 0) {
            element.className = 'empty-input';
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

    if (canSubmit)
        document.getElementById('success-msg').style.display = 'block'

}


// IE8 support
window.onload(handleScroll());