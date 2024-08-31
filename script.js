const navLinks=document.querySelector('.links');
const logo=document.querySelector('.logo');
const connectButton=document.querySelector('.btnC');
const modalBorder=document.querySelector('.section4');

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    navLinks.style.transform="rotateZ(360deg)";
  },1000);
 
})
connectButton.addEventListener('click',()=>{
  modalBorder.classList.add('borderModal');
  setTimeout(()=>{
    modalBorder.classList.remove('borderModal')
  },1000);

})
