function zoomIn() {
    var image = document.getElementById("myfoto");
    image.classList.toggle("zoomed");
}



// =======================================

var input = document.getElementsByClassName('formulario_input');
for(var i=0; i< input.length;i++) {

    input[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            this.nextElementSibling.classList.remove('fijar')
        }
        
    });
}


const usuario= document.getElementById('usuario');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
const form= document.getElementById('formulario');
const parrafo= document.getElementById('warnings');

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let warnings= "";
    let entrar= false;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML="";

    // if(usuario.value.length<6){
    //     warnings += `Nombre de usuario no es válido <br>` 
    //     entrar=true;
    // }

    if(!emailRegex.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar=true; 
    }

    if(password.value.length<8){
        warnings += `La contraseña no es válida <br>`
        entrar= true;
    }

    // if(password.value != password2.value){
    //     warnings+= `Contraseñas no son iguales<br>`
    //     entrar=true;
    // }

    if(entrar){
        parrafo.innerHTML=warnings;
        
    } else{
        alert('Registrado Exitosamente')
    }

});