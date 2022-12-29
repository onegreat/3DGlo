const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    console.log(closeBtn)

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 768) {
                modal.style.display = 'block'
                modal.style.opacity = '0'
                setTimeout(() => {
                    modal.style.transition = 'all 1s ease'
                    modal.style.opacity = '1'
                }, 100)
            }
            modal.style.display = 'block'
        })

    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    console.log(modal)
}

export default modal