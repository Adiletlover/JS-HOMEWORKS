let LoginInput = document.querySelector(".login");
let PassInput = document.querySelector(".password");
let EmailInput = document.querySelector(".email");
let button = document.querySelector(".btn");
let ArrEmailInput = EmailInput.value.split('');
let warning = document.querySelector(".SayError")


function checkEmail() {
let regex = /./
    let regex2 = /@/;
    let testdog = regex.test(EmailInput.value)
    let testTochka = regex2.test(EmailInput.value)
  
    if (testdog == true) {
        let indexdog = EmailInput.value.indexOf("@")
        if (indexdog == 0) {
            warning.textContent = "You Forget the @... ☹️"
            EmailInput.style.border = '1px solid red';
        
        }
        else {
              if (EmailInput.value[indexdog + 2] == undefined) {
                 warning.textContent = "Damn you didn't now how to login???"
                 EmailInput.style.border = '1px solid red';
            }
            else if(testTochka == true){
                let indexTochka = EmailInput.value.indexOf(".")
               if (EmailInput.value[indexTochka+1]==undefined){
                warning.textContent = "Where is the Point BRUH..."
                EmailInput.style.border = '1px solid red';
               }
               else{
                alert("CONGRATULATION!!!🥳🥳🥳")
               }
            }
            else{
                warning.textContent = "Damn you didn't now how to login???"
                EmailInput.style.border = '1px solid red';
            }
        }
    }
    else {
        warning.textContent = "Damn you didn't now how to login???"
        EmailInput.style.border = '1px solid red';
    }

}

button.addEventListener("click", checkEmail)