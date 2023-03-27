const formTemplate = document.createElement('template');
formTemplate.innerHTML = `
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
            gap: 0.6rem;
            align-items: center;
            flex-wrap: wrap;
            max-width: 1000px;
            min-height: 600px;
            background: var(--light-brown-gray);
            font-family: var(--font-family);
            border: 2px solid var(--dark-brown-gray);
            border-radius: 6px;
            padding: 1rem 1.4rem;
        }

        @media screen and (min-width: 700px){
            .counter-form-container{
                padding: 1rem 0.6;
                gap: 0;
            }
        }

        .form-container{
            width: 500px;
            min-height: 560px;
            background: var(--dark-brown-gray);
            border-radius: 4px;
            filter: drop-shadow(12px 12px 10px rgba(26, 26, 26, 40%));
        }

        .form-title{
            color: var(--off-white);
            font-size: 30px;
            font-weight: 600;
            text-align: center;
            cursor: default;
            user-select: none;
        }

        #counter-form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            margin: 2rem 0 1rem 0;
            gap: 1rem;
        }

        #counter-form > input{
            width: 80%;
            height: 50px;
            border-radius: 6px;
            background: var(--light-gray);
            outline: none;
            border: 1px solid var(--light-gray);
            padding: 0.4rem;
            font-size: 22px;
            transition: border ease-in-out 200ms;
            filter: drop-shadow(16px 8px 12px rgba(26, 26, 26, 50%));
        }

        #counter-form > input:hover{
            border: 2px solid var(--light-salmon);
        }

        #counter-form > input:focus{
            border: 2px solid var(--light-salmon);
        }

        #counter-form > input::placeholder{
            color: var(--gray-black);
            font-weight: 600;
            opacity: 60%;
            font-size: 22px;
        }

        #counter-form > textarea{
            width: 80%;
            height: 10rem;
            resize: none;
            outline: none;
            border-radius: 6px;
            background: var(--light-gray);
            font-size: 22px;
            font-family: var(--font-family);
            padding: 0.4rem;
            filter: drop-shadow(16px 8px 12px rgba(26, 26, 26, 40%));
        }

        #counter-form > textarea::placeholder{
            color: var(--gray-black);
            font-weight: 700;
            opacity: 60%;
            font-size: 22px;
        }

        #counter-form > textarea:hover{
            border: 2px solid var(--light-salmon);
        }

        #counter-form > textarea:focus{
            border: 2px solid var(--light-salmon);
        }

        #counter-form > button{
            padding: 0.8rem 2rem;
            border-radius: 6px;
            border: 1px solid var(--light-gray);
            background: var(--light-gray);
            font-size: 18px;
            font-weight: 600;
            color: var(--gray-black);
            opacity: 90%;
            transition: background ease-in-out 200ms, border ease-in-out 200ms;
            cursor: pointer;
            filter: drop-shadow(16px 8px 12px rgba(26, 26, 26, 50%));
            user-select: none;
        }

        #counter-form > button:hover{
            background: var(--light-salmon);
            border: 1px solid var(--light-salmon);
        }

        .timer-title{
            color: var(--off-white);
            font-size: 36px;
            font-weight: 600;
            text-align: center;
            width: 60%;
            margin-inline: auto;
            cursor: default;
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
            margin: 1rem 0 0 0;
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
            width: 100px;
            height: 100px;
            text-align: center;
            font-size: 40px;
            border-radius: 6px;
            transition: font-size ease-in-out 200ms, font-weight ease-in-out 200ms;
            filter: drop-shadow(10px 8px 12px rgba(26, 26, 26, 40%));
            user-select: none;
            cursor: default;
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

        .success-message{
            text-align: center;
            color: #21d12a;
            font-size: 16pt;
            font-weight: 600;
            user-select: none;
        }
    </style>

    <div class='counter-form-container'>

        <!-- Counter Form -->
        <div class='form-container'>
            <h3 class='form-title'>Have a Question? Contact Us</h3>

            <span class='seperator'></span>

            <p class='success-message'>Thank you for reaching out!</p>

            <form id='counter-form'>
                <input type='text' name='form-name-input' placeholder='Name' required>
                <input type='email' name='form-email-input' placeholder='E-mail' required>
                <textarea name='form-message-input' form='counter-form' placeholder='Please type a short message...' required></textarea>
                <button type='submit'>SEND</button>
            </form>
        </div>

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

class CountdownForm extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow( { mode: "open" } );
        let clone = formTemplate.content.cloneNode(true);
        this.shadow.append(clone);
        this.countdownInterval = null;
        this.second = 1000, this.minute = this.second * 60, this.hour = this.minute * 60, this.day = this.hour * 24;

        const successMessage = this.shadow.querySelector('.success-message');
        successMessage.style.display = 'none';

        const counterForm = this.shadow.querySelector('#counter-form');

        counterForm.addEventListener('submit', (event)=>{
            const submitAction = this.onSubmit && typeof window[this.onSubmit] === 'function' ? window[this.onSubmit] : ()=>{ console.log('No action provided...'); };

            successMessage.style.display = 'block';

            submitAction(event);
            event.preventDefault();
        });
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if(attrName === 'time'){
            var _this = this;
            const timerDate = _this.shadow.querySelector('.timer-date');
            timerDate.innerHTML = newVal;

            this.countdownInterval = setInterval(()=>{
                const countdownTime = new Date(newVal);
                const today = new Date();
                const timeTill = countdownTime - today;
                
                if(timeTill <= 0){
                    clearInterval(this.countdownInterval);
                    return;
                }

                const days = Math.floor(timeTill / this.day);
                const hours = Math.floor((timeTill % this.day) / this.hour);
                const minutes = Math.floor((timeTill % this.hour) / this.minute);
                const seconds = Math.floor((timeTill % this.minute) / this.second);

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
        
        if(attrName === 'form-title'){
            const formTitle = this.shadow.querySelector('.form-title');
            formTitle.innerHTML = newVal;
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
                const formContainer = this.shadow.querySelector('.form-container');
                const timerDate = this.shadow.querySelector('.timer-date');
                const slotLegends = this.shadow.querySelectorAll('.slot-legend');

                mainContainer.style.backgroundColor = '#463F3A';
                formContainer.style.backgroundColor = '#8A817C';
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
        return ['form-title', 'timer-title', 'time', 'abbr', 'mode', 'on-submit', 'date-format'];
    }

    //Getter & Setter - Form Title
    get formTitle(){
        return this.getAttribute('form-title');
    }

    set formTitle(value){
        return this.setAttribute('form-title', value);
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

    //Getter & Setter - Mode
    get mode(){
        return this.getAttribute('mode');
    }

    set mode(value){
        return this.setAttribute('mode', value);
    }

    //Getter & Setter - DateFormat
    get dateFormat(){
        return this.getAttribute('date-format');
    }

    set dateFormat(value){
        return this.setAttribute('date-format', value);
    }

    //Getter & Setter - OnSubmit
    get onSubmit(){
        return this.getAttribute('on-submit');
    }

    set onSubmit(value){
        return this.setAttribute('on-submit', value);
    }
}

customElements.define('countdown-form-large', CountdownForm);