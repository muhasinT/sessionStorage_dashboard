$(document).ready(function(){
    $('.sign_in').click(function(){
        $('.login').addClass('active')
        $('.welcome').addClass('active')
        $('.sign_in').addClass('active')
        $('.btn').addClass('active')
        $('.sign_up').addClass('active')
    })
    $('.btn').click(function(){
        $('.sign_up').removeClass('active')
        $('.login').removeClass('active')
        $('.welcome').removeClass('active')
        $('.sign_up').removeClass('active')
        $('.btn').removeClass('active')
        $('.sign_in').removeClass('active')
    })
})

$("#nameError").hide();

$("#emailError").hide();

$("#passwordError").hide();

$("#emailloginError").hide();

$("#passwordloginError").hide();




function validateName(){
    let signupUseraname = $("#signUpuser").val();
    let namePattern     =   /^[a-zA-Z]+$/;

    if(signupUseraname == null || signupUseraname == ''){
        $("#nameError").show();
        $("#nameError").html("Please Enter Your Name");
        $("#signUpuser").css("border-bottom","solid 2px #FF0000");
      return false;

      }else if(signupUseraname.match(namePattern)){
         $("#nameError").hide();
        $("#signUpuser").css("border-bottom","solid 2px #00FF00");
      
      return true;
      
      }else{
        $("#nameError").show();
        $("#nameError").html("Please Enter Your Valid Name");
        $("#signUpuser").css("border-bottom","solid 2px #FF0000");
    }

    return false;
     
}

function validateEmail(){

    let signupEmail    = $("#signUpeml").val();
    let emailPattern   = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(signupEmail == null || signupEmail == ''){
        $("#emailError").show();
        $("#emailError").html("Please Enter Your Email");
        $("#signUpeml").css("border-bottom","solid 2px #FF0000");
        
        return false;
  
      }else if(signupEmail.match(emailPattern)){
        $("#emailError").hide();
        $("#signUpeml").css("border-bottom","solid 2px #00FF00");
    
        return true;
    
      }else{
        $("#emailError").show();
        $("#emailError").html("Please Enter Your Valid Email");
        $("#signUpeml").css("border-bottom","solid 2px #FF0000");
  
        return false;
    }



}

function validatePassword(){

    let signupPass    = $("#signupPaswrd").val();
    let passwrdPattern   = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    ;

    if(signupPass == null || signupPass == ''){
        $("#passwordError").show();
        $("#passwordError").html("Please Enter Your Password");
        $("#signupPaswrd").css("border-bottom","solid 2px #FF0000");
        
        return false;
  
      }else if(signupPass.match(passwrdPattern)){
        $("#passwordError").hide();
        $("#signupPaswrd").css("border-bottom","solid 2px #00FF00");
    
        return true;
    
      }else{
        $("#passwordError").show();
        $("#passwordError").html("Please Enter Your Valid Password");
        $("#signupPaswrd").css("border-bottom","solid 2px #FF0000");
  
        return false;
    }

}

function validateloginEmail(){

    let loginEmail = $("#loginEmil").val();
    let loginemlPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(loginEmail == null || loginEmail == ''){
        $("#emailloginError").show();
        $("#emailloginError").html("Please Enter Your Email");
        $("#emailloginError").css("border-bottom","solid 2px #FF0000");
        
        return false;
  
      }else if(loginEmail.match(loginemlPattern)){
        $("#emailloginError").hide();
        $("#loginEmil").css("border-bottom","solid 2px #00FF00");
    
        return true;
    
      }else{
        $("#emailloginError").show();
        $("#emailloginError").html("Please Enter Your Valid Email");
        $("#loginEmil").css("border-bottom","solid 2px #FF0000");
  
        return false;
    }


}

function validateloginPassword(){

    let loginPassword    = $("#loginPass").val();
    let loginpswdPattern   = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    ;

    if(loginPassword == null || loginPassword == ''){
        $("#passwordloginError").show();
        $("#passwordloginError").html("Please Enter Your Password");
        $("#loginPass").css("border-bottom","solid 2px #FF0000");
        
        return false;
  
      }else if(loginPassword.match(loginpswdPattern)){
        $("#passwordloginError").hide();
        $("#loginPass").css("border-bottom","solid 2px #00FF00");
    
        return true;
    
      }else{
        $("#passwordloginError").show();
        $("#passwordloginError").html("Please Enter Your Valid Password");
        $("#loginPass").css("border-bottom","solid 2px #FF0000");
  
        return false;
    }

}


let upBtn = document.getElementById("signupBtn");
upBtn.addEventListener('click', function(e){
        e.preventDefault()
  
        if(validateName()=== true && validateEmail() === true && validatePassword() === true){
            $("#signupModal").modal('show');

            $("#signUpuser").val("").css("border-bottom","solid 0px");
            $("#signUpeml").val("").css("border-bottom","solid 0px");
            $("#signupPaswrd").val("").css("border-bottom","solid 0px");



        }else {
            $("#signupFldmdl").modal('show');

        }
      

    }) ; 
    function signUp(){

        let objSignup ={};

        let signupUseraname = $("#signUpuser").val();
        let signupEmail     =$("#signUpeml").val();
        let signupPass     = $("#signupPaswrd").val();
    
    
    
       objSignup.email= signupEmail;
       objSignup.userName = signupUseraname;
       objSignup.pasword = signupPass;
    
       let x = JSON.stringify(objSignup);
    
       localStorage.setItem(signupEmail,x);


    }

let inbtn = document.getElementById("loginBtn");

    inbtn.addEventListener('click', function(e){
        e.preventDefault();

        if(validateloginEmail() === true && validateloginPassword() === true){
            
    let loginEmail = $("#loginEmil").val();
    let loginPassword = $("#loginPass").val();

    if(loginEmail in localStorage){

        let datafrmLocal = localStorage.getItem(loginEmail);
        let objectLogin = JSON.parse(datafrmLocal);
        console.log(loginEmail);

        if(loginPassword ==    objectLogin.pasword){
            console.log("success");
            $("#loginModal").modal('show');

        }else{
            $("#loginfldMdl").modal('show');

            console.log("login Failed");
        }

    }else{
        $("#loginfldMdl").modal('show');

        console.log("valid email");
    }


            $("#loginEmil").val("").css("border-bottom","solid 0px");
            $("#loginPass").val("").css("border-bottom","solid 0px");

            
        }else{

        }

       
    })  

function signIn(){

    let loginEmail = $("#loginEmil").val();
    let loginPassword = $("#loginPass").val();

    if(loginEmail in localStorage){

        let datafrmLocal = localStorage.getItem(loginEmail);
        let objectLogin = JSON.parse(datafrmLocal);
        console.log(loginEmail);

        if(loginPassword ==    objectLogin.pasword){
            console.log("success");
        }else{
            console.log("login Failed");
        }

    }else{
        console.log("valid email");
    }


}

