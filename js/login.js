
$('#login').on('click',getDataFun);
function getDataFun(e){
e.preventDefault()
//quick check
if($('input').val() ===''){
    $('input').addClass('border border-warning')
}else{
    $('input').removeClass('border border-warning')
}

let getEmail = localStorage.getItem('email');
let getPass = localStorage.getItem('password');
if($('#email').val() === getEmail && $('#pass').val() === getPass){
    $('.error').text('')
    window.location.href = 'mycarts.html';
}else{
    $('.error').text('please check your email and password and try again')
}
}
