let numberOfRow = [1,2];
//getting data using ajax
$.ajax({
    url: "projectData.txt",
  method:'get',
  success:function(res){
  let source = $.parseJSON(res);
    let myDiv = document.createElement('div');
    $(myDiv).addClass('row mt-5 products')
    numberOfRow.forEach(row=>{
        source.forEach(img=>{   
            let imgCont = `
          <div class="col-lg-3 col-sm-6 col-md-3 text-center mt-5"  data-type="${img.unique}" id="img-div">
            <div class="img-box p-3">
              <span class="h4 text-white ">${img.title}</span>
              <img src="${img.url}"class="img-pic">
              
        <h3 class="desc-header">Description</h3>
        <p p-2 class="desc-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia exercitationem molestiae doloremque similique.</p>
        <div class="row">
          <a href="readmore.html" class="btn btn-primary col-10 offset-1 read-more"">Read more</a>
        </div>
    
                <div class="row counter p-3">
                  <div class="offset-2">
                    <i class="${img.book}"></i>
                    <i class="${img.add}"></i>
                  </div>
                </div>
            </div>
          </div>
         `;
         $(myDiv).append(imgCont);
        $('#all-images').append($(myDiv));    
    })
    })
    
    //setting data in localStorage
    $('.add-btn').on('click',function(e){
        console.log($(this).parent('#img-div'))
        let imgContainer =  e.target.parentElement.parentElement.parentElement.parentElement.outerHTML;
        let createKey=  e.target.parentElement.parentElement.parentElement.parentElement;
        let uniqueKey =  createKey.attributes[1].value;
        let arr = [];
        arr.push(uniqueKey)
        let setData = localStorage.setItem(arr,imgContainer)
        let alert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>product has been successfully added to My Carts</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      $('.alerty').append(alert)
    })

    //adding events
    $('.book-btn').on('click',signOrLogin);
    
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
$('.read-more').on('click',function(){
   let pic = $(this).parent().parent().children()[1].outerHTML; 
let savLocal = localStorage.setItem('imgDetails',pic)
})
  },
  error:function(error){
    alert('please try to open it with live server')
}
  
  });





