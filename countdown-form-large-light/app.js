function handleForm(event){
    try{
        const formData = new FormData(event.target);

        const name = formData.get('form-name-input');
        const email = formData.get('form-email-input');
        const message = formData.get('form-message-input');
    
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        event.target.reset();
    }catch(error){
        console.log(error);
    }
}