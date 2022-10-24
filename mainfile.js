const ratingcontainer=document.querySelector(".ratingpage");
const thankyoupage=document.querySelector(".thankyou");
const submitbutton=document.getElementById("submit");
const rating=document.querySelector('.ratingnum');
const rates=document.querySelectorAll('.btn');
submitbutton.addEventListener("click",()=>{
   thankyoupage.classList.remove('hidden')
   ratingcontainer.style.display='none';
})
rates.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        rating.innerHTML=rate.innerHTML;
    })
})