function timer() {
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');

    let secondsCounter = 0;
    let minutesCounter = 0;
    let hoursCounter = 0;

    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    startBtn.on('click', () => {
        let timerInterval;

        if (stopBtn.hasClass('paused') || startBtn.hasClass('clicked')) {
            stopBtn.removeClass('paused');
            clearInterval(timerInterval);
            timerInterval.remove();
        }

        timerInterval = setInterval(step, 1000);
        startBtn.addClass('clicked');
    });

    stopBtn.on('click', () => {
        stopBtn.addClass('paused')
    });

    function step() {
        if (!stopBtn.hasClass('paused')) {

            secondsCounter++;
            if (secondsCounter >= 60) {
                secondsCounter -= 60;
                minutesCounter++;
                if (minutesCounter >= 60) {
                    minutesCounter -= 60;
                    hoursCounter++;
                }
            }

            seconds.text(secondsCounter < 10 ? '0' + secondsCounter : secondsCounter);
            minutes.text(minutesCounter < 10 ? '0' + minutesCounter : minutesCounter);
            hours.text(hoursCounter < 10 ? '0' + hoursCounter : hoursCounter);
        }
    }
}