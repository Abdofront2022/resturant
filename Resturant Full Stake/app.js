let UserName = document.querySelector(".UserName").value;
let Password = document.querySelector(".Password").value;
let buttonLOG = document.querySelector(".btn_login");

buttonLOG.addEventListener('click',fun());
function fun(){
    if(UserName === "abdo" && Password === 123123){
        setTimeout(function(){
            window.open('http://127.0.0.1:5500/main.html',"_blank")
        },1000)
        location.href = 'http://127.0.0.1:5500/main.html'
    }else if(UserName === "ali" && Password === 123123){
        setTimeout(function(){
            window.open('http://127.0.0.1:5500/index2.html',"_blank")
        },1000)
        location.href = 'http://127.0.0.1:5500/index2.html'
    }else if(UserName === "ahmad" && Password === 123123){
        setTimeout(function(){
            window.open('http://127.0.0.1:5500/index3.html',"_blank")
        },1000)
        location.href = 'http://127.0.0.1:5500/index3.html'
    }
}