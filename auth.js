const btn = document.getElementById("registerBtn");

btn.addEventListener("click", register);

function register(){

const username=document.getElementById("username").value.trim();
const email=document.getElementById("email").value.trim();
const fullname=document.getElementById("fullname").value.trim();
const password=document.getElementById("password").value;
const confirm=document.getElementById("confirm").value;

if(!username||!email||!fullname||!password||!confirm){
alert("Please fill all fields");
return;
}

if(password!==confirm){
alert("Passwords do not match");
return;
}

document.getElementById("loadingBox").classList.remove("hidden");

let bar=document.getElementById("bar");
let percent=document.getElementById("percent");

let p=0;

let load=setInterval(()=>{

p+=20;

bar.style.width=p+"%";
percent.innerHTML=p+"%";

if(p>=100){

clearInterval(load);

const user={
username,
email,
fullname,
password,
taskBalance:0,
referralBalance:0,
completedTasks:0,
referrals:0,
joined:new Date().toLocaleDateString()
};

localStorage.setItem("currentUser",JSON.stringify(user));

window.location.href="dashboard.html";

}

},350);

}
