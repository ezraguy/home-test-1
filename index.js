const addFixedClass = () => {
    const sidePanel = document.getElementById('side-pan');
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 270)
            sidePanel.classList = 'side-panel fixed'
        else
            sidePanel.classList = 'side-panel'
    })
}


const validateForm = (e) => {
    e.preventDefault();

    const inputs = document.getElementById('form').elements;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailErrorMessage = document.getElementById('email-err-msg');
    let canSubmit = true;
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        if (element.value.length === 0) {
            element.classList.add('empty-input');
            canSubmit = false;
        }
        else
            element.classList.remove('empty-input');

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



