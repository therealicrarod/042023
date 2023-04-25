"use strict"

//Nav Interaction

const menu = document.getElementById("menuBurger");
const menuWrapper = document.getElementById("menuWrapper");
const closeBtn = document.getElementById("closeBtn");
const menuBtns = document.querySelectorAll(".navElements")
var winWidth = window.innerWidth;

addEventListener("resize",async()=>{
    let newVal = window.innerWidth;
    checkSize(newVal);
})

function checkSize (value) {
    console.log(value);
    if(value <= 900){
        mobileInteractivity()
    }else{
        menuWrapper.style.display="flex";
        menuWrapper.style.opacity="100%";
        menuWrapper.style.transform="translateX(0px)"
    }
}
function mobileInteractivity () {
    var isActive = false;

    if(isActive == false){
        setTimeout(()=>{
            menuWrapper.style.display="none";
        },150)
    }

    menu.addEventListener("click", async(e)=>{
        isActive=true;
        menuWrapper.style.display="flex";
        setTimeout(()=>{
            menuWrapper.style.opacity="100%";
            menuWrapper.style.left="10vw";
    },250)
})

closeBtn.addEventListener("click",async(e)=>{
    isActive=false;
    menuWrapper.style.opacity="0%";
    menuWrapper.style.left="0vw";
    setTimeout(()=>{
        menuWrapper.style.display="none";
    },350)
    })
}

checkSize(winWidth);

//End of nav interaction

//Start of newsletter

const newsletterMail = document.getElementById("emailNewsletter"),
newsletterSubmit = document.getElementById("newsletterSubmit");

newsletterSubmit.addEventListener("click",()=>{
    var mail = newsletterMail.value;
    var newsletterContainer = document.getElementById("newsletter");

    let payload = {"email":mail};

//    await fetch(url, {
//        method: "POST",
//        headers:{
//            "Content-Type":"application/json"
//        },
//        body:payload
//    }).then(()=>{
        console.log(payload);
        newsletterMail.style.opacity="0";
        newsletterMail.style.transform="translateX(-50px)";
        newsletterSubmit.style.opacity="0";
        newsletterSubmit.style.transform="translateX(-50px)";
        setTimeout(()=>{
            newsletterMail.style.display="none";
            newsletterSubmit.style.display="none";
            setTimeout(()=>{
                let h3 = document.createElement("h3");
                h3.innerHTML="Gracias!";
                newsletterContainer.appendChild(h3);
            },500)
        },250)
//    })
})

//End of newsletter