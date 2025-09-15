
 document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(() => {
      document.body.classList.add('page-visible');
    });})



    // load
   let PayBtn= document.getElementById('payment-btn')
  let loader=  document.getElementById('loading-wave')
  let main=  document.getElementById('main')

PayBtn.onclick=function(){
  main.style.display='none'
  loader.style.display='flex'
  loader.style.width='300px'
  loader.style.height='100px'
  loader.style.top='300px'
  loader.style.left='530px'
  loader.style.justifyContent='center'
 loader.style.alignItems = 'center';

 setTimeout(() => {
  window.location.href = "payment.html";

 },1500)

  

}

  



