const btnDismiss = document.getElementById('btn-dismiss');
const form = document.getElementsByTagName('form')[0];
let errorSpan = document.querySelector(".error-msg");
const emailInput = document.getElementById("email");



function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    if(validateEmail(emailInput)){
        saveEmail(email)
        hideShow();
    }
    
}

function validateEmail(email) {
    if (!email || !email.validity) {
        return console.error('O elemento de email não é válido ou não tem propriedade validity');
    }

    if(!email.validity.valid){
        errorSpan.innerHTML = email.validationMessage;
        email.classList.add('error');
        return false
    } else {
        errorSpan.innerHTML = '';
        email.classList.remove('error');
        return true;
    }

}
function saveEmail(email) {
    const spanEmail = document.getElementById('span-email');
    const data = { email: email };
    console.log("Email salvo:", data);
    spanEmail.innerText = data.email;

}

function hideShow(){
    const cardSubscribe = document.getElementById('subscribe');
    const cardMessage = document.getElementById('success-msg');

    cardSubscribe.classList.toggle("hidden");
    cardMessage.classList.toggle('hidden');
    
}
form.addEventListener('submit', handleSubmit);

btnDismiss.addEventListener('click', ()=>{
    location.reload();    
});


