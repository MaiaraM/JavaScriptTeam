var userEmail = ["paulo@paulo.com", "gabriel@gabriel.com", "tiago@tiago.com","mayara@mayara.com"]
var userPasswrd = ["123123", "456456", "789789","000000"]
var confirm = document.getElementById('sign_in')

function signIn(){
    var validate = false
    var email = document.getElementById('inputEmail')
    var passwrd = document.getElementById('inputPassword')  
    for(var i=0;i<4;i++){
        if(email.value == userEmail[i] && passwrd.value == userPasswrd[i]){
            validate = true
            console.log("email: "+email.value+", compared email: "+userEmail[i])
            console.log("passwd: "+passwrd.value+", compared passwd: "+userPasswrd[i])
            console.log("validated = "+validate)
        }
    }
    if(validate) alert("Login com sucesso!")
    else alert("Login errado!")
}