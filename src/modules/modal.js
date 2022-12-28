const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    console.log(closeBtn)

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })

    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    console.log(modal)
}

export default modal