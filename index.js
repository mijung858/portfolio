$(function(){
    var a=0;

    $(window).on('scroll touchmove mousewheel',function(){
        a=$(window).scrollTop()
        if(a!=0){
            $('header').css({'opacity':'1'})	
        }else{
            $('header').css({'opacity':'0'})	
        }
       });
     
    
})
     

       
   const p1Element = document.querySelector(".p1");
   const p2Element = document.querySelector(".p2");
   const p3Element = document.querySelector(".p3");
   const headerElement = document.querySelector(".header_wrap");
   const buttonElement = document.querySelector(".scroll_button");
 

   buttonElement.addEventListener("animationend", () =>   
    buttonElement.classList.remove("hidden")
   );
  

   headerElement.addEventListener("animationend", () =>
   headerElement.classList.remove("hidden")
 );
   p1Element.addEventListener("animationend", () =>
  p1Element.classList.remove("hidden")
);
p2Element.addEventListener("animationend", () =>
  p2Element.classList.remove("hidden")
);
p3Element.addEventListener("animationend", () =>
  p3Element.classList.remove("hidden")
);


    





