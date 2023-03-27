<script>

</script>

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

@media screen and (min-width: 700px){
    .counter-form-container{
        padding: 1rem 0.6;
        gap: 0;
    }
}
</style>