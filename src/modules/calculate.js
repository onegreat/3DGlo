const calculate = () => {
    const calcItems = document.querySelectorAll('input.calc-item');
    calcItems.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
        })
    })
};


export default calculate