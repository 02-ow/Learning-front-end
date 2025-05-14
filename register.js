// 判断函数
function decide(element , regex , errorMessage){
    if(!regex.test(element.value)  && element.value !== ''){
        element.insertAdjacentHTML("afterend",`<p class="error-message">${errorMessage}</p>`);
        setTimeout(()=>{
            element.nextElementSibling.remove();
        },2000);
    }
}

// 判断用户名是否符合要求
const username = document.querySelector('.username');
username.addEventListener('change',function(){
// 定义正则表达式
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,7}$/;
decide(username , usernameRegex , '用户名需要以字母开始，长度为3-7位，只能包含字母、数字');
});

// 判断邮箱是否符合要求
const email = document.querySelector('.email');
email.addEventListener('change',function(){
    const emailRegex = /^[a-zA-Z0-9._-]@[a-zA-Z0-9-](\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    decide(email , emailRegex , '邮箱不符合要求');
});


// 判断密码是否符合要求
const password = document.querySelector('.password');
password.addEventListener('change',function(){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    decide(password , passwordRegex , '密码需要包含大小写字母和数字，长度为8位以上');
});

// 判断确认密码是否符合要求
const confirmPassword = document.querySelector('.confirm-password');
confirmPassword.addEventListener('change',function(){
if(confirmPassword.value !== password.value){
    confirmPassword.insertAdjacentHTML("afterend",`<p class="error-message">密码不一致</p>`);
    setTimeout(()=>{
        confirmPassword.nextElementSibling.remove();
    },2000);
}
});


