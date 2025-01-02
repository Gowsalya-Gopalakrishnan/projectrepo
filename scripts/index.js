import { baseUrl } from "./baseUrl.js";
let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let uname = form.uname.value;
    let email = form.email.value;
    let password =form.password.value;
    let mobile = form.mobile.value;
    let gender =form.gender.value;
    let obj = {uname,email,password,mobile,gender};
    // console.log(obj);
    fetch(`${baseUrl}/fullstacjappassignmentbackend`)
    .then((res)=> res.json())
    .then((data)=> {
        let user = data.filter((el,i)=>el.email == email);
        if(user.length!=0){
            alert("Already Register Please Login....");
            window.location.href="login.html";
            form.reset();
        }else{
            // fetch(`${baseUrl}/fullstacjappassignmentbackend`,{
                fetch(`${baseUrl}/fullstacjappassignmentbackend`,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(obj),
            }).then(()=>{
                alert("Signup Sucessfull....");
                window.location.href="login.html";
                form.reset();
            });
            
        }
    }).catch((err)=>{
        console.log(err);
        alert("Something went wrong, Please try agian later...");
    })
    
})