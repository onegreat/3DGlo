import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calculate from './modules/calculate'
import firstForm from './modules/formconfig'
import questions from './modules/formconfidTwo'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('14 January 2023')
menu()
modal()
calculate()
firstForm()
questions()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });
