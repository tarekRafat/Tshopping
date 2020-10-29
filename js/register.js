$('#create-btn').on('click',validationFun)

// functions
function validationFun(e){
    e.preventDefault();
    //checking if it's empty
        nameVal();
        emailVal();
        passwordVal();
        numberVal();
        saveEmailPass();
    success();
}


function nameVal(){
    if($('#name').val().length >= 10){
        $('#name').removeClass('border border-warning')
        $('.name-error').text('')
        return true
    }else{
        $('#name').addClass('border border-warning'); 
        $('.name-error').text('name should be more than 10 char.')
    }
}

function emailVal(){ 
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if($('#email').val().match(mailformat)){
        $('#email').removeClass('border border-warning')
        $('.email-error').text('')
        return true
    }
    else{
        $('#email').addClass('border border-warning');
        $('.email-error').text('You have entered an invalid email address!')
    }
}


function numberVal(){
    let numbers = /[0-9]/g;
  if($('#phone').val().match(numbers)) {
    $('#phone').removeClass('border border-warning')
    $('.phone-error').text('')
    return true
  } else {
    $('#phone').addClass('border border-warning');
    $('.phone-error').text("please make sure it's a number")
  }
}


function passwordVal(){
    if($('#pass').val() ===''){
        $('#pass').addClass('border border-warning');
    }else{
    $('#pass').removeClass('border border-warning');
    return true
    }
}


function saveEmailPass(){
    let emailValue = $('#email').val();
    let passwordValue = $('#pass').val();
    //saving in localStorage
    let saveEmail = localStorage.setItem('email',emailValue)
    let savePassword = localStorage.setItem('password',passwordValue)
}
function success(){
    if(nameVal() && emailVal() && passwordVal() && numberVal()){
        window.location.href= 'mycarts.html'
    };

};
