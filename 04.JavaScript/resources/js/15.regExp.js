function validata() {
    const idInput = document.getElementById('userId');
    const pwInput = document.getElementById('userPw');
    const checkPw = document.getElementById('checkPw');
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    // id
    let regExp = /^[a-z][a-z0-9]{3,11}$/i;
    if(!regExp.test(idInput.value)) {
        alert('유효한 아이디를 입력하세요');
        idInput.value = "";
        idInput.select();
        return false;
    }
    
    // pw
    regExp = /^[a-z0-9!@#$%^&*]{8,15}$/i;
    if(!regExp.test(pwInput.value)) {
        alert('유효한 비밀번호를 입력하세요');
        pwInput.value = "";
        pwInput.focus();
        return false;
    }

    // pw 일치 여부
    if(pwInput.value != checkPw.value) {
        alert('위와 동일한 비밀번호를 입력하세요');
        checkPw.value = "";
        checkPw.focus();
        return false;
    }

    // 이름
    regExp = /^[가-힣]{2,}$/;
    if(!regExp.test(name.value)) {
        alert('유효한 이름을 넣어주세요');
        name.value = "";
        name.focus();
        return false;
    }

    // 이메일
    // regExp = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    regExp = /\w+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?/;
    if(!regExp.test(email.value)) {
        alert('유효한 이메일을 입력해 주세요');
        email.value='';
        email.focus();
        return false;
    }
    return true;
}