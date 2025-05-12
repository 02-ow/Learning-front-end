// 获取按键
const loginButton = document.querySelector('.login-button');
// 获取邮箱
const email = document.querySelector('.email-module input');
// 获取密码
const password = document.querySelector('.password-module input');

// 当鼠标从邮箱输入框离开时，判断邮箱是否符合邮箱格式
email.addEventListener('change', function(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.querySelector('.email-module .error-message');
    if(!emailRegex.test(email.value) && email.value !== ''){
        emailError.textContent = '邮箱格式不正确';
    }else{
        emailError.textContent = '';
    }
})

