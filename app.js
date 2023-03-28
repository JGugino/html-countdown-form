//Control Buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

//Countdown Forms
const forms = [document.querySelector('.large-light'), document.querySelector('.large-dark'), document.querySelector('.small-light'), document.querySelector('.small-dark')];

const demoTitle = document.querySelector('.demo-title');

let currentForm = 0;

function initDemo(){
    toggleForm(forms[0], true);
    toggleForm(forms[1], false);
    toggleForm(forms[2], false);
    toggleForm(forms[3], false);

    prevButton.addEventListener('click', prevForm);
    nextButton.addEventListener('click', nextForm);
    demoTitle.addEventListener('click', resetForm);
}

function toggleForm (element, display){
    if(element) element.style.display = display === true ? 'block' : 'none';
}

function nextForm(){
    currentForm++;
    if(currentForm >= forms.length){
        toggleForm(forms[currentForm-1], false);
        currentForm = 0;
        toggleForm(forms[0], true);
    }else{
        toggleForm(forms[currentForm], true);
        toggleForm(forms[currentForm-1], false);
    }
}

function prevForm(){
    currentForm--;

    if(currentForm < 0){
        toggleForm(forms[currentForm+1], false);
        currentForm = forms.length-1;
        toggleForm(forms[currentForm], true);
    }else{
        toggleForm(forms[currentForm], true);
        toggleForm(forms[currentForm+1], false);
    }
}

function resetForm(){
    toggleForm(forms[currentForm], false);
    currentForm = 0;
    toggleForm(forms[currentForm], true);
}

function handleForm(event){
    const formData = new FormData(event.target);

    const name = formData.get('form-name-input');
    const email = formData.get('form-email-input');
    const message = formData.get('form-message-input');

    if(!name || !email || !message){
        return console.error('Invaild form submission');
    }

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    event.target.reset();
}

initDemo();