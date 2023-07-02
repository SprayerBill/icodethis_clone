var sum=document.querySelectorAll("summary");
var detail = document.querySelectorAll("details");

// sum.forEach(function(elem){
    
//     elem.addEventListener('click',function(){
//         if(flag===0){
//         elem.lastElementChild.innerHTML=`<i class="ri-subtract-line"></i>`;
//         flag=1;
//         }
//       else{
//         elem.lastElementChild.innerHTML=`<i class="ri-arrow-right-s-line"></i>`;
//             flag=0;
//         }
        
//     })
    

    
// })

sum.forEach(function(elem){
    elem.addEventListener("click",function(){
        if(elem.lastElementChild.innerHTML===`<i class="ri-arrow-right-s-line"></i>`){
            elem.lastElementChild.innerHTML=`<i class="ri-subtract-line"></i>`;
        }else{
            elem.lastElementChild.innerHTML=`<i class="ri-arrow-right-s-line"></i>`;
        }
    })
})