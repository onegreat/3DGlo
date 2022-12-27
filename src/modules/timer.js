const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    let idInterval

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaning = (dateStop - dateNow) / 1000
        let days = 'Дней ' + Math.floor(timeRemaning / 60 / 60 / 24)
        let hours = Math.floor((timeRemaning / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaning / 60) % 60)
        let seconds = Math.floor(timeRemaning % 60)

        return { timeRemaning, days, hours, minutes, seconds }
    }


    const updateClock = () => {
        let getTime = getTimeRemaining();


        if (getTime.timeRemaning > 0) {
            timerDays.textContent = getTime.days;
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
            if (getTime.hours < 10) {
                timerHours.textContent = '0' + getTime.hours;
            } if (getTime.minutes < 10) {
                timerMinutes.textContent = '0' + getTime.minutes;
            } if (getTime.seconds < 10) {
                timerSeconds.textContent = '0' + getTime.seconds;
            }
        } else {
            clearInterval(idInterval);
        }
    }
    idInterval = setInterval(updateClock, 1000);

}

export default timer