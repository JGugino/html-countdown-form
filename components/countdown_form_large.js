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
            align-items: center;
            flex-wrap: wrap;
            max-width: 1000px;
            min-height: 600px;
            background: var(--light-brown-gray);
            font-family: var(--font-family);
            border: 2px solid var(--dark-brown-gray);
            border-radius: 6px;
            padding: 1rem 0.6rem;
        }

        .form-container{
            width: 500px;
            min-height: 560px;
            background: var(--dark-brown-gray);
            border-radius: 4px;
        }

        .form-title{
            color: var(--off-white);
            font-size: 30px;
            font-weight: 600;
            text-align: center;
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
        }

        #counter-form > textarea::placeholder{
            color: var(--gray-black);
            font-weight: 600;
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
        }

        #counter-form > button:hover{
            background: var(--light-salmon);
            border: 1px solid var(--light-salmon);
        }

        .timer-title{
            color: var(--off-white);
            font-size: 30px;
            font-weight: 600;
            text-align: center;
            width: 60%;
            margin-inline: auto;
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
            width: 100px;
            height: 100px;
            text-align: center;
            color: var(--gray-black);
            font-size: 40px;
            border-radius: 6px;
            transition: font-size ease-in-out 200ms, font-weight ease-in-out 200ms;
        }

        .timer-counter:hover{
            font-size: 48px;
            font-weight: 500;
        }

        .slot-legend{
            color: var(--gray-black);
            opacity: 80%;
        }

        .timer-counter{
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--gray-black);
            background: var(--light-gray);
            cursor: default;
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

        <!-- Counter Form -->
        <div class='form-container'>
            <h3 class='form-title'>Have a Question? Contact Us</h3>

            <span class='seperator'></span>

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

        const counterForm = this.shadow.querySelector('#counter-form');

        counterForm.addEventListener('submit', (event)=>{
            const submitAction = this.onSubmit && typeof window[this.onSubmit] === 'function' ? window[this.onSubmit] : ()=>{ console.log('No action provided...'); };

            submitAction(event);
            event.preventDefault();
        });
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if(attrName === 'time'){
            var _this = this;
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
                const slotLegends = this.shadow.querySelectorAll('.slot-legend');

                mainContainer.style.backgroundColor = '#463F3A';
                formContainer.style.backgroundColor = '#8A817C';

                slotLegends.forEach(legend => {
                    legend.style.color = '#F4F3EE';
                });
            }
        }
    }

    countdownTimer(){

    }

    //Available Attributes
    static get observedAttributes(){
        return ['form-title', 'timer-title', 'time', 'abbr', 'mode'];
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

    //Getter & Setter - OnSubmit
    get onSubmit(){
        return this.getAttribute('on-submit');
    }

    set onSubmit(value){
        return this.setAttribute('on-submit', value);
    }
}

customElements.define('countdown-form-large', CountdownForm);