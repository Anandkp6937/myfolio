const connectBtn=document.querySelector('.btnC');
const links=document.getElementById('connectUl');
connectBtn.addEventListener('click',()=>{
  links.style.transform='scale(0.8)';
  setTimeout(()=>{
    links.style.transform='scale(1)';
  },500)
  
})
