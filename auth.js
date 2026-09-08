const btn = document.getElementById("registerBtn");
const box = document.getElementById("loadingBox");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

btn.onclick = () => {

  let username = username.value.trim();
  let email = email.value.trim();
  let fullname = fullname.value.trim();
  let password = password.value;
  let confirm = confirm.value;

  if(!username || !email || !fullname || !password || !confirm){
    alert("Fill all fields");
    return;
  }

  if(password !== confirm){
    alert("Passwords do not match");
    return;
  }

  box.classList.remove("hidden");
  btn.disabled = true;

  let p = 0;

  let loading = setInterval(()=>{

    p += 20;

    bar.style.width = p + "%";
    percent.innerHTML = p + "%";

    if(p >= 100){

      clearInterval(loading);

      const user = {
        username,
        email,
        fullname,
        password,
        taskBalance:0,
        referralBalance:0,
        referrals:0,
        completedTasks:0,
        joined:new Date().toLocaleDateString()
      };

      localStorage.setItem("currentUser", JSON.stringify(user));

      window.location.href = "dashboard.html";

    }

  },500);

};
