"use strict"

//--here starts the services section 
const webInvoke = document.getElementById("webCaller"),
creativeInvoke = document.getElementById("creativeCaller"),
mktInvoke = document.getElementById("mktCaller"),
serviceSelector=document.getElementById("serviciosSelector"),
webContent = document.getElementById("Web"),
creativeContent = document.getElementById("Design"),
mktContent = document.getElementById("MKT"),
returnBtn = document.querySelectorAll(".return");

function createInvokers(){
    webInvoke.addEventListener("click",async ()=>{
        
        serviceSelector.style.opacity="0%";
        serviceSelector.style.transform="translateX(-50px)"
        setTimeout(()=>{
        serviceSelector.style.display="none";    
        },250);

        webContent.style.display="flex";
        setTimeout(()=>{
            webContent.style.opacity="100%";
            webContent.style.transform="translateX(0px)";
        },250);
    })
    creativeInvoke.addEventListener("click",async ()=>{
         
        serviceSelector.style.opacity="0%";
        serviceSelector.style.transform="translateX(-50px)"
        setTimeout(()=>{
        serviceSelector.style.display="none";    
        },250);

        creativeContent.style.display="flex";
        setTimeout(()=>{
            creativeContent.style.opacity="100%";
            creativeContent.style.transform="translateX(0px)";
        },250);
    })
    mktInvoke.addEventListener("click",async ()=>{
         
        serviceSelector.style.opacity="0%";
        serviceSelector.style.transform="translateX(-50px)"
        setTimeout(()=>{
        serviceSelector.style.display="none";    
        },250);

        mktContent.style.display="flex";
        setTimeout(()=>{
            mktContent.style.opacity="100%";
            mktContent.style.transform="translateX(0px)";
        },250);
    })

   returnBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        element.parentElement.style.opacity="0%";
        element.parentElement.style.transform="translateX(-50px)";
        setTimeout(()=>{
            element.parentElement.style.display="none";
        },250);
        setTimeout(()=>{
            serviceSelector.style.display="flex";
            setTimeout(()=>{
                serviceSelector.style.opacity="100%";
                serviceSelector.style.transform="translateX(0px)"
            },100);
        },150);
    })
   })
}
//--Here ends the services section

//--Here start the contact section


const submit = document.getElementById("submit"),
form = document.getElementById("form");
const url = "Server"

submit.addEventListener("click",async ()=>{

    var name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    message = document.getElementById("message").value,
    contact = document.getElementById("contacto");

    let payload = {"name":name, "email":email, "msg":message};

//    await fetch(url, {
//        method: "POST",
//        headers:{
//            "Content-Type":"application/json"
//        },
//        body:payload
//    }).then(()=>{
        console.log(payload);
        form.style.opacity="0";
        form.style.transform="translateX(-50px)";
        setTimeout(()=>{
            form.style.display="none";
            setTimeout(()=>{
                let h3 = document.createElement("h3");
                h3.innerHTML="Su mensaje se ha enviado";
                contact.appendChild(h3);
            },500)
        },250)
//    })
})
//--Here ends the contact section

//Start scripting
createInvokers();