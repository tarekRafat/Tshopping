    //adding events
    $('.book-btn').on('click',signOrLogin);
    $("#cart").on('click',signOrLogin);
//functions
function signOrLogin(){
    console.log('it is working')
    let getEmail = localStorage.getItem('email');
    let getPass = localStorage.getItem('password');
    if(getEmail=== null && getPass === null){
        window.location.href = 'register.html';
    }else{
        window.location.href = 'login.html';
    }
}