        // Payment method selection
        const paymentMethods = document.querySelectorAll('.payment-method');
        const cardSection = document.getElementById('cardSection');

        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                method.classList.add('active');
                
                const methodType = method.dataset.method;
                if (methodType === 'card') {
                    cardSection.style.display = 'block';
                } else {
                    cardSection.style.display = 'none';
                }
            });
        });

        // Card number formatting
        const cardNumberInput = document.getElementById('cardNumber');
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });

        // Expiry date formatting
        const expiryInput = document.getElementById('expiryDate');
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });

        // CVV input restriction
        const cvvInput = document.getElementById('cvv');
        cvvInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        // Form submission
        const paymentForm = document.getElementById('paymentForm');
        const payButton = document.getElementById('payButton');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const buttonText = document.getElementById('buttonText');
   function showNotification() {
      const notifyBox = document.getElementById("notifyBox");
      const progress = document.getElementById("progress");

      notifyBox.classList.add("show");

      // Reset progress
      progress.style.transition = "none";
      progress.style.width = "0%";
      setTimeout(() => {
        progress.style.transition = "width 5s linear";
        progress.style.width = "100%";
      }, 50);

      // Hide after 5s
      setTimeout(() => {
        notifyBox.classList.remove("show");
      }, 5200);
    }

        paymentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            payButton.disabled = true;
            loadingSpinner.style.display = 'block';
            buttonText.textContent = 'Processing...';
            
            // Simulate payment processing
      setTimeout(() => {
    // Reset button state
    payButton.disabled = false;
    loadingSpinner.style.display = 'none';
    buttonText.textContent = 'Complete Payment';

    // Show notification بعد الدفع
    showNotification();
}, 2000);})

//loader
    
   let BackBtn= document.getElementById('back-btn')
  let loader=  document.getElementById('loading-wave')
  let main=  document.getElementById('main')
BackBtn.onclick=function(){
  main.style.display='none'
  loader.style.display='flex'
  loader.style.width='300px'
  loader.style.height='100px'
  loader.style.top='300px'
  loader.style.left='550px'
  loader.style.justifyContent='center'
 loader.style.alignItems = 'center';

 setTimeout(() => {
  window.location.href = "index.html";

 },1500)

  

}

        // Form validation
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });

        function validateField(e) {
            const field = e.target;
            const value = field.value.trim();
            
            // Remove existing error styling
            field.style.borderColor = '';
            
            if (field.hasAttribute('required') && !value) {
                field.style.borderColor = '#ef4444';
                return false;
            }
            
            // Email validation
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    field.style.borderColor = '#ef4444';
                    return false;
                }
            }
            
            // Card number validation
            if (field.id === 'cardNumber' && value) {
                const cardNumber = value.replace(/\s/g, '');
                if (cardNumber.length < 13 || cardNumber.length > 19) {
                    field.style.borderColor = '#ef4444';
                    return false;
                }
            }
            
            field.style.borderColor = '#10b981';
            return true;
        }

        function clearErrors(e) {
            e.target.style.borderColor = '';
        }

        // Keyboard navigation for payment methods
        paymentMethods.forEach((method, index) => {
            method.setAttribute('tabindex', '0');
            method.setAttribute('role', 'button');
            method.setAttribute('aria-label', `Select ${method.dataset.method} payment method`);
            
            method.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    method.click();
                }
            });
        })

        
 document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(() => {
      document.body.classList.add('page-visible');
    });})

