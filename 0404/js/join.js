function sendit() {
  const userid = document.getElementById("username");
  const userEmail = document.getElementById("useremail");
  const userpw = document.getElementById("userpw");
  const userpwPass = document.getElementById("pwPass");

  const exNameText = /^[가-힣]+/;
  const exPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!exNameText.test(username.value)) {
    alert("이름은 한글로 입력하세요.");
    userid.focus();
    return false;
  }

  if (userEmail.value === "") {
    alert("이메일을 입력해주세요.");
    userEmail.focus();
    return false;
  }

  if (!exPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자 이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }
}
