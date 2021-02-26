const prices = document.querySelectorAll('[data-payment-mode]');
const paymentMode = document.querySelector('#payment-mode');

let isMonthly = paymentMode.checked
checkWhatModeIs(isMonthly)

function checkWhatModeIs(isMonthly){
   if (isMonthly) setPaymentMode("monthly");
   else setPaymentMode("annualy");
}
function setPaymentMode(mode) {
   prices.forEach((el) => {
      if (el.dataset.paymentMode === mode) {
         el.classList.remove("none")
      }
      else {
         el.classList.add("none")
      }
   })
}

paymentMode.addEventListener('change', (event) => {
   const isMonthly = event.target.checked;
   checkWhatModeIs(isMonthly) 
})


const a = `
1
`