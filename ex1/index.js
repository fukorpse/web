function separar (){
    let entrada = document.getElementById('entrada').value;
    document.getElementById('entrada').value = '';
    if(entrada<= 9 && entrada>=0){
        document.getElementById('saidaNum').value += entrada;
    }
    else{
        document.getElementById('saidaString').value += entrada;
    }
}
function limpar (){
    document.getElementById('saidaNum').value = '';
    document.getElementById('saidaString').value = '';
}