function checkUsername(){
    var elMsg=document.getElementById('feedback');
    if(this.value.length){
        elMsg.textContent='Username must be 5 characters or more';
    }else {
        elMsg.textContent='';
    }
}
var elUsername=document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,false);