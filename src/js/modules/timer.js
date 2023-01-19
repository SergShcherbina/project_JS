const timer = (id, deadline) => {

    const addZiro = (num) => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const getTimeRemaining = (deadline) => {
        const t = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor(t/ ( 1000 * 60 * 60) % 24);
        const days = Math.floor(t /( 1000 * 60 * 60 * 24) );

        return {
            'total' : t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateClock, 1000);

        updateClock();                                               //вызываем чтобы значения не прагали при загрузке страницы

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZiro(t.days);
            hours.textContent = addZiro(t.hours);
            minutes.textContent = addZiro(t.minutes);
            seconds.textContent = addZiro(t.seconds);

            if(t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timerInterval);
            }

        };        
    };    
    setClock(id, deadline);
};

export default timer;