var loginDetails = [
  {
    email: "xyz@gmail.com",
    password: "Qaqib@12",
  },
  {
    email: "abc@gmail.com",
    password: "Qaqib@56",
  },
  {
    email: "pqr@gmail.com",
    password: "Qaqib@11",
  },
];

var email = document.getElementById("email");
var password = document.getElementById("pass1");
var submit = document.getElementById("submit-btn");

var spanemail = document.getElementById("mail");
var spanpass = document.getElementById("pass-1");
var verifyspan = document.getElementById("verfied-msg");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailCheck() {
  let userEmail = email.value;
  spanemail.innerHTML = "";

  if (userEmail == "") {
    spanemail.innerHTML = "Email required";
    return false;
  } else if (!userEmail.match(mailformat)) {
    spanemail.innerHTML = "Enter proper email";
    return false;
  } else {
    email.style.border = "solid 2px green";
    return true;
  }
}

function passwordCheck() {
  let regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
  var mainPass = password.value;
  spanpass.innerHTML = "";
  if (mainPass == "") {
    spanpass.innerHTML = "Enter Password";
    return false;
  } else if (!regexp.test(mainPass)) {
    spanpass.innerHTML = "Enter Correct Password";
    return false;
  } else if (mainPass.length < 5 || mainPass.length > 8) {
    spanpass.innerHTML = "Password Length between 5-8 letters";
    return false;
  } else {
    password.style.border = "solid 2px green";
    return true;
  }
}

function verify() {
  let verifyEmail = email.value;
  let verfiyPass = password.value;
  let check = 0;

  loginDetails.forEach((empDetail) => {
    console.log("----");
    if (empDetail.email === verifyEmail && empDetail.password === verfiyPass) {
      check = 1;
    }
  });
  if (check == 0) {
    return false;
  } else return true;
}

submit.addEventListener("click", function (event) {
  event.preventDefault();

  let v1 = emailCheck();
  let v2 = passwordCheck();

  if (v1 && v2) {
    var verified = verify();
    console.log(verified);
    if (verified) {
      window.location.href = "home.html";
    } else {
      verifyspan.innerHTML = "Enter valid credentials";
    }
  }
});
