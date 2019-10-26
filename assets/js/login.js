const EMAIL_PADRAOZAO = "admin@email.com.br";
const SENHA_PADRAOZAO = "123logar";


function login(){
    if(($("#emailPadrao").val() == EMAIL_PADRAOZAO) && ( $('#senhaPadrao').val() == SENHA_PADRAOZAO)){
        toastr.success('O login esta correto');
        setTimeout(function(){location.href="index.html"} , 5000);   

    }
    else if(($("#emailPadrao").val() != EMAIL_PADRAOZAO) && (  $("#senhaPadrao").val() != SENHA_PADRAOZAO)){
        toastr.error('O email esta errado');
        toastr.error('A senha esta errado');
    }

    else if(($("#emailPadrao").val() != EMAIL_PADRAOZAO) && (  $("#senhaPadrao").val() == SENHA_PADRAOZAO)){
        toastr.error('O email esta errado');
    }

    else if(($("#emailPadrao").val() == EMAIL_PADRAOZAO) && (  $("#senhaPadrao").val() != SENHA_PADRAOZAO)){
        toastr.error('A senha esta errado');
    }

}
