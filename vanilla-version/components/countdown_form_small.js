const smallFormTemplate = document.createElement('template');
smallFormTemplate.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');

        .counter-form-container{
            --dark-brown-gray: #463F3A;
            --light-brown-gray: #8A817C;
            --light-gray: #BCB8B1;
            --off-white: #F4F3EE;
            --light-salmon: #E0AFA0;
            --gray-black: #1A1A1A;

            --font-family: 'Nunito', sans-serif;

            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            max-width: 500px;
            min-height: 600px;
            background: var(--light-brown-gray);
            font-family: var(--font-family);
            border: 2px solid var(--dark-brown-gray);
            border-radius: 6px;
        }

        .timer-title{
            color: var(--off-white);
            font-size: 40px;
            font-weight: 600;
            text-align: center;
            width: 60%;
            margin-inline: auto;
            user-select: none;
        }

        .timer-date{
            color: #212121;
            font-size: 22px;
            font-weight: 500;
            text-align: center;
            user-select: none;
        }

        .timer-slots{
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 1rem 0 0.8rem 0;
        }

        .inner-slots{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .timer-slot{
            text-align: center;
        }

        .timer-counter{
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--gray-black);
            background: var(--light-gray);
            cursor: default;
            width: 100px;
            height: 100px;
            text-align: center;
            font-size: 40px;
            border-radius: 6px;
            transition: font-size ease-in-out 200ms, font-weight ease-in-out 200ms;
            user-select: none;
            filter: drop-shadow(10px 8px 12px rgba(26, 26, 26, 40%));
        }

        .timer-counter:hover{
            font-size: 48px;
            font-weight: 500;
        }

        .slot-legend{
            color: var(--gray-black);
            opacity: 80%;
            user-select: none;
        }

        .seperator{
            display: block;
            width: 200px;
            height: 8px;
            background: var(--light-salmon);
            border-radius: 10px;
            margin: 0 auto;
            transition: width ease-in-out 200ms;
        }

        .seperator:hover{
            width: 220px;
        }
    </style>

    <div class='counter-form-container'>

        <!-- Countdown Timer -->
        <div class='timer-container'>
            <h3 class='timer-title'>Countdown to our grad opening!</h3>

            <p class='timer-date'>12/01/2022</p>
            <span class='seperator'></span>

            <div class='timer-slots'>

                <div class='inner-slots'>
                    <div class='timer-slot'>
                        <p class='slot-legend days'>DAYS</p>
                        <div class='timer-counter counter-days'> <p>0</p> </div>
                    </div>

                    <div class='timer-slot'>
                        <p class='slot-legend minutes'>MINUTES</p>
                        <div class='timer-counter counter-minutes'> <p>0</p> </div>
                    </div>
                </div>

                <div class='inner-slots'>
                    <div class='timer-slot'>
                        <p class='slot-legend hours'>HOURS</p>
                        <div class='timer-counter counter-hours'> <p>0</p> </div>
                    </div>

                    <div class='timer-slot'>
                        <p class='slot-legend seconds'>SECONDS</p>
                        <div class='timer-counter counter-seconds'> <p>0</p> </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
`;


class SmallCountdownForm extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow( { mode: "open" } );
        let clone = smallFormTemplate.content.cloneNode(true);
        this.shadow.append(clone);
        this.countdownInterval = null;
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if(attrName === 'time'){
            var _this = this;
            const timerDate = _this.shadow.querySelector('.timer-date');
            timerDate.innerHTML = newVal;

            this.countdownInterval = setInterval(()=>{
                const countdownTime = new Date(newVal);
                const today = new Date();
                const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
                const timeTill = countdownTime - today;
                
                if(timeTill <= 0){
                    clearInterval(this.countdownInterval);
                    return;
                }

                const days = Math.floor(timeTill / day);
                const hours = Math.floor((timeTill % day) / hour);
                const minutes = Math.floor((timeTill % hour) / minute);
                const seconds = Math.floor((timeTill % minute) / second);

                const daysCounter = _this.shadowRoot.querySelector('.counter-days');
                const hoursCounter = _this.shadowRoot.querySelector('.counter-hours');
                const minutesCounter = _this.shadowRoot.querySelector('.counter-minutes');
                const secondsCounter = _this.shadowRoot.querySelector('.counter-seconds');

                daysCounter.innerHTML = days;
                hoursCounter.innerHTML = hours;
                minutesCounter.innerHTML = minutes;
                secondsCounter.innerHTML = seconds;
            }, 1000);
        }

        if(attrName === 'timer-title'){
            const timerTitle = this.shadow.querySelector('.timer-title');
            timerTitle.innerHTML = newVal;
        }

        if(attrName === 'abbr'){
            const days = this.shadow.querySelector('.days');
            const hours = this.shadow.querySelector('.hours');
            const minutes = this.shadow.querySelector('.minutes');
            const seconds = this.shadow.querySelector('.seconds');
            
            if(newVal === "true"){
                days.innerHTML = 'DAYS';
                hours.innerHTML = 'HRS';
                minutes.innerHTML = 'MINS';
                seconds.innerHTML = 'SECS';
            }else{
                days.innerHTML = 'DAYS';
                hours.innerHTML = 'HOURS';
                minutes.innerHTML = 'MINUTES';
                seconds.innerHTML = 'SECONDS';
            }
        }

        if(attrName === 'mode'){
            if(newVal === 'dark'){
                const mainContainer = this.shadow.querySelector('.counter-form-container');
                const timerDate = this.shadow.querySelector('.timer-date');
                const slotLegends = this.shadow.querySelectorAll('.slot-legend');

                mainContainer.style.backgroundColor = '#463F3A';
                timerDate.style.color = '#F4F3EE';

                slotLegends.forEach(legend => {
                    legend.style.color = '#F4F3EE';
                });
            }
        }

        if(attrName === 'date-format'){
            const timerDate = this.shadow.querySelector('.timer-date');
            if(newVal === 'long'){
                timerDate.innerHTML = this.formatDate(this.time);
            }else{
                timerDate.innerHTML = this.time;
            }
        }
    }

    formatDate(date){
        const newDate = new Date(date);
        return `${this.determineMonthName(newDate.getMonth())} ${newDate.getDay()}, ${newDate.getFullYear()}`;
    }

    determineMonthName(month){
        switch(month){
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    }

    //Available Attributes
    static get observedAttributes(){
        return ['timer-title', 'time', 'abbr', 'mode', 'date-format'];
    }

    //Getter & Setter - Timer Title
    get timerTitle(){
        return this.getAttribute('timer-title');
    }

    set timerTitle(value){
        return this.setAttribute('timer-title', value);
    }

    //Getter & Setter - Time
    get time(){
        return this.getAttribute('time');
    }

    set time(value){
        return this.setAttribute('time', value);
    }

    //Getter & Setter - Abbr
    get abbr(){
        return this.getAttribute('abbr');
    }

    set abbr(value){
        return this.setAttribute('abbr', value);
    }

    //Getter & Setter - DateFormat
    get dateFormat(){
        return this.getAttribute('date-format');
    }

    set dateFormat(value){
        return this.setAttribute('date-format', value);
    }

    //Getter & Setter - Mode
    get mode(){
        return this.getAttribute('mode');
    }

    set mode(value){
        return this.setAttribute('mode', value);
    }
}

customElements.define('countdown-form-small', SmallCountdownForm);