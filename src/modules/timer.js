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

    const timeTest = () => {
        let timeclock = getTimeRemaining();

        if (timeclock.timeRemaning > 0) {
            timerDays.textContent = timeclock.days;
            timerHours.textContent = timeclock.hours >= 10 ? timeclock.hours : `0${timeclock.hours}`;
            timerMinutes.textContent = timeclock.minutes >= 10 ? timeclock.minutes : `0${timeclock.minutes}`;
            timerSeconds.textContent = timeclock.seconds >= 10 ? timeclock.seconds : `0${timeclock.seconds}`;
        }

    }

    const updateClock = () => {
        // if (getTime.timeRemaning > 0) {
        //     timerDays.textContent = getTime.days;
        //     timerHours.textContent = getTime.hours;
        //     timerMinutes.textContent = getTime.minutes;
        //     timerSeconds.textContent = getTime.seconds;

        //     if (getTime.hours < 10) {
        //         timerHours.textContent = '0' + getTime.hours;
        //     } if (getTime.minutes < 10) {
        //         timerMinutes.textContent = '0' + getTime.minutes;
        //     } if (getTime.seconds < 10) {
        //         timerSeconds.textContent = '0' + getTime.seconds;
        //     }
        // } else {
        //     clearInterval(idInterval);
        // }
        timeTest()
        idInterval = setInterval(updateClock, 1000);
    }

    updateClock()


}

export default timer