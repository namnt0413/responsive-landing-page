var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var email = document.querySelector('#email')
var comment = document.querySelector('#comment')
var form = document.querySelector('#register-form')

function showError(input,message){
    let parent = input.parentElement;
    let warning = parent.querySelector('.warning');

    parent.classList.add('error');
    warning.innerText = message;
}

// showError(firstName,'Khong duoc de trong')

function checkEmptyError(listInput){
    let isEmptyError = false;

    listInput.forEach( item => {
        item.value = item.value.trim()  // loai bo space thua de chuan hoa dau vao
        // console.log(item.name)

        if( !item.value ){
            isEmptyError = true;
            showError(item,'The field '+ item.name + ' cannot be blank')
        } else {
            showError(item,'')
        }
    })
    return isEmptyError;
}

function checkEmailError(input){
    input.value = input.value.trim();
    
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    let isEmailError = false;
    if( !regex.test(input.value) ){
        showError(input, 'Invalid email')
        isEmailError = true;
    } else {
        showError(input, '')
    }
    return isEmailError
}

function removeError(input){
    showError(input, '')
}

form.addEventListener('submit', function(e){
    // console.log(1) 
    let listField = [firstName,lastName,email,comment];
    e.preventDefault();     // ko load trang khi click submit
    let isEmptyError = checkEmptyError(listField)
    let isEmailError = checkEmailError(email)
    if(isEmptyError === false && isEmailError === false ){
        alert('Dang ki thanh cong')
    }


})





