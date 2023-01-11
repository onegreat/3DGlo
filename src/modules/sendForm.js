const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const nameInputs = form.querySelectorAll('input[name=user_name]')
    const mailInputs = form.querySelectorAll('input[name=user_email]')
    const userMessage = form.querySelectorAll('input[name=user_message]')
    const phoneInputs = form.querySelectorAll('input[name=user_phone]')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!'

    const validate = (name, phone) => {
        let success = true

        name.forEach(input => {
            if (input.value.length < 2) {
                success = false
                alert('Имя должно содержать минимум 2 символа!')
                statusBlock.textContent = errorText
            }
        })
        phone.forEach(input => {
            if (input.value.length < 11) {
                success = false
                alert('Номер телефона должен содержать минимум 11 цифр!')
                statusBlock.textContent = errorText
            }
        })


        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}


        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)


            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })



        if (validate(nameInputs, phoneInputs)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText


                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }


        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm