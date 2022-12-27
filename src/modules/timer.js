const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHourhs = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

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
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHourhs.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaning > 0) {
            setTimeout(updateClock, 1000)
        }
    }

    updateClock()

}

export default timer