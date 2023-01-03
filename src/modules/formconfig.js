const firstForm = () => {
    const firstFormName = document.querySelector('#form1-name')
    const firstFormPhone = document.querySelector('#form1-phone')
    const firstFormMail = document.querySelector('#form1-email')


    firstFormName.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {
            return g1 + g2.toUpperCase();
        });
    })

    firstFormPhone.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\d()-]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })

    firstFormMail.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\w@\-_.!~*']/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })
}

export default firstForm;