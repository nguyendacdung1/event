var elForm,elSelectPackage,elPackageHint,elTerms,elTermsHint;
elForm=document.getElementById('formSignup');
elSelectPackage=document.getElementById('package');
elPackageHint=document.getElementById('packageHint');
elTerms=document.getElementById('terms');
elTermsHint=document.getElementById('termsHint');
function packageHint(){
    var pack=this.options[this.selectedIndex].value;
    if(pack==='monthly'){
        elPackageHint.innerHTML='save $10 if you pay for 1 year!';
    }else {
        elPackageHint.innerHTML='wise choise!';
    }
}
function checkTerms(event){
    if (!elTerms.checked){
        elTermsHint.innerHTML='you must agree to the terms.';
    }
}
elForm.addEventListener('submit',checkTerms,false);
elSelectPackage.addEventListener('change',packageHint,false);