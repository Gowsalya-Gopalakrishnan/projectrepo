let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let username = form.username.value;
    let email = form.email.value;
    let password =form.password.value;
    let mobile = form.mobile.value;
    let gender =form.gender.value;
    let obj = {username,email,password,mobile,gender};
    // console.log(obj);
    if(email === "sample@gmail.com" && password==="sample@123"){
        //
        fetch("http://localhost:3000/project",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({obj})
        }).then(()=>{
            alert("Signup Sucessfull Please Login...");
            form.reset();
        }).catch((err)=>{
            alert(err);
        })
    }else{
        alert("Something went wrong in signup please try again later....");
    }
})