/* Fill your code*/
const pattern={
    username: /^[a-zA-Z]{8,15}+$/,
    email: /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone:/^\d{10}$/,
    address:/^[a-zA-Z0-9]$/,
    cpassword:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
}


function formValidate()
{
    var name = document.forms["RegForm"]["Name"];
    var address = document.forms["RegForm"]["Address"];
    var email = document.forms["RegForm"]["EMail"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var phone = document.forms["RegForm"]["phone"];

    var name1 = document.getElementById("name");
    var address1 = document.getElementById("address");
    var email1 = document.getElementById("email");
    var password1 = document.getElementById("pwd");
    var cpassword1 = document.getElementById("cpwd");
    var phone1 = document.getElementById("phone");
    var result = document.getElementById("result");
    
    //name validation
    if(pattern.username.test(name.value)=="")
    {
        name1.textContent="Kindly enter the name";
        name.focus();
        
    }
    else if(pattern.username.test(name.value)){
        name1.textContent="";
    }
    else
    {
        name1.textContent="Atleast 8 to 15 characters";
        name.focus();
        return false;
    }
    //email validation
    if(email.value==""){
        email1.textContent="Email cannot be empty. Kindly fill email";
        email.focus();
        return false;
    }
    else if(pattern.email.test(email.value)){
        email1.textContent="";
    }
    else{
        email1.textContent="Enter a vaild Email.Email should contain @, .(dot) or underscore.";
        email.focus();
        return false;
    }
    
    //password validation
    if(password.value==""){
        password1.textContent="Kindly fill password field";
        password.focus();
        return false;
    }
    else if(pattern.password.test(password.value)){
        password1.textContent="";
    }
    else{
        password1.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number.password must contain the following special characters !@#$%^&*()";
        password.focus();
        return false;
    }

    //cpassword validation
    if(cpassword.value==""){
        cpassword1.textContent="Kindly fill password field";
        password.focus();
        return false;
    }
    else (pattern.cpassword.test(cpassword.value))
    {
        cpassword1.textContent="";
    }
    
    //phone validation
    if(phone.value==""){
        phone1.textContent="Kindly fill phone number";
        phone.focus();
        return false;
    }
    else if(pattern.phone.test(phone.value)){
        phone1.textContent="";
    }
    else{
        phone1.textContent="phone number should be a ten digit number";
        phone.focus();
        return false;
    }

    //address validation
    if(address.value==""){
        address.textContent="Kindly fill address";
        password.focus();
        return false;
    }
    else (pattern.address.test(address.value))
    {
        address1.textContent="";
    }
    


}