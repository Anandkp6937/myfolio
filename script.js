const connectBtn=document.querySelector('.btnC');
const links=document.getElementById('connectUl');
const blogContainer=document.querySelector('.blog-wrap');
connectBtn.addEventListener('click',()=>{
  links.style.transform='scale(0.8)';
  setTimeout(()=>{
    links.style.transform='scale(1)';
  },500)
  
})
window.addEventListener('DOMContentLoaded',async()=>{
  let data=await fetch('https://random-rho-nine.vercel.app/blog');
  let blogData=await data.json();
  await makeCards(blogData);
  
})
function makeCards(arr){
  blogContainer.innerHTML='';
  arr.forEach((item)=>{
    blogContainer.innerHTML +=`<div class="blog-comp">
                <h2 class="blog-link blg"><a href="https://${item.url}">${item.title}</a></h2>
                <div class=""><h2 class="blog-desc blg">${item.description}</h2></div>
            </div>`

  })

}
