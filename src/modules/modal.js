import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalFormName = document.querySelector('#form3-name')
    const modalFormPhone = document.querySelector('#form3-phone')
    const modalFormMail = document.querySelector('#form3-email')

    modalFormName.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {
            return g1 + g2.toUpperCase();
        });;
    })
    modalFormPhone.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })
    modalFormMail.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 768) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.display = 'block'
                        modal.style.opacity = '0'
                        setTimeout(() => {
                            modal.style.transition = 'all 3s ease'
                            modal.style.opacity = '1'
                        })
                        console.log('test');
                    }
                }, 100);
            }
            modal.style.display = 'block'
        })

    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

}

export default modal