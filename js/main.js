let box = document.querySelectorAll('.container .text .faq');
let h4 = document.querySelectorAll('h4')
let p = document.querySelectorAll('.faq-p')

box.forEach((div)=>{
  div.addEventListener('click', (e)=>{
  document.querySelectorAll('.container .text .faq').forEach((box)=>{
    box.classList.remove('active')
  })
  div.classList.add('active');
  })
})