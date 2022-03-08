let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("pass1");
let password2 = document.getElementById("pass2");
let contact = document.getElementById("contact");


let spanname = document.getElementById("name");
let spanemail = document.getElementById("mail");
let spanpass = document.getElementById("pass-1");
let spanconfpass = document.getElementById("pass-2");
let spanmobile = document.getElementById("number");

var nameformat= /^[a-zA-Z]{2,50}$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function userName() {
    let u_name = username.value;
    spanname.innerHTML = '';

    if (u_name == "") {
    spanname.innerHTML = "Name required";
    return false;
  } else if (!nameformat.test(u_name)) {
    spanname.innerHTML = "Atleast 3 characters required";
    return false;
  } else {
    username.style.border = "solid 2px green";
    return true;
  }
}


function emailCheck() {
    let userEmail = email.value;
    spanemail.innerHTML = "";

    if (userEmail == '') {
        spanemail.innerHTML = "Email required";
        return false;
    }
    else if(!userEmail.match(mailformat)){
      spanemail.innerHTML = 'Enter proper email';
      return false;
    }
    else {
      email.style.border = "solid 2px green";
       return true;
    }
}

function passwordCheck() {
    let regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])")
    var mainPass = password.value;
  spanpass.innerHTML = "";
  if (mainPass == "") {
    spanpass.innerHTML = 'Enter Password';
    return false;
  }
  else if (!regexp.test(mainPass)){
    spanpass.innerHTML = 'Enter Correct Password';
    return false;
  }
  else if (mainPass.length < 5 || mainPass.length > 8) {
    spanpass.innerHTML = 'Password Length between 5-8 letters';
    return false;
  }
  else {
    password.style.border = "solid 2px green";
       return true;
  }

}

function confirmPassword() {
  let confirmPass = password2.value;
  let mainPass = password.value;
  spanconfpass.innerHTML = "";

  if (confirmPass == "") {
    spanconfpass.innerHTML = 'Enter Password';
    return false;
  }
  else if (mainPass != confirmPass) {
    
    spanconfpass.innerHTML = 'Password Does not match';
    return false;
  }
  else {
    password2.style.border = "solid 2px green";
       return true;
  }
}

function contactNumberCheck() {
  let contactNo = contact.value;
  spanmobile.innerHTML = "";

  if (contactNo == "") {
    spanmobile.innerHTML = 'Enter Contact Number';
    return false;
  }
  else if (contactNo.length!=10) {
    
    spanmobile.innerHTML = 'Enter 10 digit Number';
    return false;
  }
  else {
    spanmobile.style.border = "solid 2px green";
       return true;
  }
}

function validateOnSubmit() {
  
   event.preventDefault();
  let v1 = userName();
  let v2 = emailCheck();
  let v3 = passwordCheck();
  let v4 = confirmPassword();
  let v5 = contactNumberCheck();

  return v1 && v2 && v3 && v4 && v5;
}