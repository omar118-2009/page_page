
 document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(() => {
      document.body.classList.add('page-visible');
    });})



    // load
   let PayBtn=document.getElementById('payment-btn')
   let PayBtn1=document.getElementById('payment-btn1')
  let loader=  document.getElementById('loading-wave')
  let main=  document.getElementById('main')

function load(btn){
btn.onclick = function () {
  main.style.display = 'none';
  loader.style.display = 'flex';
  loader.style.position = 'fixed'; // مهم جدًا للتوسيط
  loader.style.width = '100%';
  loader.style.height = '100%';
  loader.style.marginTop = '25%';
  loader.style.top = '50%';
  loader.style.left = '50%';
  loader.style.transform = 'translate(-50%, -50%)'; // يوسّط العنصر تمامًا
  loader.style.justifyContent = 'center';
  loader.style.alignItems = 'center';



  setTimeout(() => {
    window.location.href = "payment.html";
  }, 1500);
};

}
  
load(PayBtn)
load(PayBtn1)


  



