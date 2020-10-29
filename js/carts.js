let container = document.querySelector('#main');
let newDiv = document.createElement('div'); 
newDiv.classList.add('row')
// for (let i = 0; i < localStorage.length; i++) {
//     // let key = localStorage.key(i)
//     let getData =localStorage.getItem(`img,${i}`); 
//     newDiv.innerHTML +=getData;
//     container.appendChild(newDiv);
// }
let newarr = ['first','sec','third','fourth'];
newarr.forEach(icon=>{
    newDiv.innerHTML +=localStorage.getItem(icon);
    container.appendChild(newDiv);
})

$('.book-btn').remove();
$('.add-btn').remove();
$('.desc-header').remove();
$('.desc-p').remove();
$('.read-more').remove();

let price=500;
let addBtn = `<i class="fas fa-plus-circle plus co-12"></i>`;
let minusMark = `<i class="fas fa-minus-circle minus col-12"></i>`;
let deletBtn = `<i class="fas fa-trash"></i>`;
let newSpan = document.createElement('span');

let table = `<div class="row justify-content-between">
<span class="col-2">${addBtn}</span>
<span class="col-2">${minusMark}</span>
<span class="col-2">${deletBtn}</span>
<span class="col-1 text-white">1</span>
<span class="col-1 text-white">$</span>
<span class="col-3 text-white text-left p-0">${price}</span>
</div>`;
$('.counter').append(table)
$('.offset-7').remove()
$('.plus').on('click',function(){
    let counter = $(this).parent().parent().children()[3];
    let pricee = $(this).parent().parent().children()[5];
    counter.innerHTML = +counter.innerHTML+1;
    pricee.innerHTML = +pricee.innerHTML+price;


//delet this after testing

let textLeft = document.querySelectorAll('.text-left');
let empArr = [];
textLeft.forEach(text=>{
 empArr.push(+$(text).html())
})
console.log(empArr)
let total = 0;
function sum(empArr) {
    for (var i=0; i< empArr.length; i++) {
        total += empArr[i];
    }
    return total;
    }
    var subTotal=sum(empArr);
$('.total-price').html(subTotal)
$('.grand-total').html(subTotal-52)

})
let textLeft = document.querySelectorAll('.text-left');
let empArr = [];
textLeft.forEach(text=>{
 empArr.push(+$(text).html())
})
console.log(empArr)
let total = 0;
function sum(empArr) {
    for (var i=0; i< empArr.length; i++) {
        total += empArr[i];
    }
    return total;
    }
    var subTotal=sum(empArr);
    console.log(subTotal)

$('.total-price').html(subTotal)

$('.grand-total').html(subTotal-52)

$('.minus').on('click',function(){
    let counter = $(this).parent().parent().children()[3];
    let pricee = $(this).parent().parent().children()[5];
    if(pricee.innerHTML<=500){
        return pricee ==500
    }
    counter.innerHTML = +counter.innerHTML-1;
    pricee.innerHTML = +pricee.innerHTML-price;
    
$('.total-price').html(subTotal)
$('.grand-total').html(subTotal-52)

});
$('.fa-trash').on('click',function(e){
  
let elem = $(this).parent().parent().parent().parent().parent();
let imgContainer =  e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
let uniqueKey = imgContainer.attributes[1].value;
localStorage.removeItem(uniqueKey)
$(this).parent().parent().parent().parent().remove();

})

