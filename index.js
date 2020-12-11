const addFixedClass = () => {
    const sidePanel = document.getElementById('side-pan');
    console.log('s');
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 270)
            sidePanel.classList = 'side-panel fixed'
        else
            sidePanel.classList = 'side-panel'
    })
}

