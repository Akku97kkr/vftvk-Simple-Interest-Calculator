function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var years = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+years+"\<br\>"

}
    

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("Rate").innerText=rateval;
}

function checkdata()
{
    var principal = document.getElementById("principal");
    
    //check if principal field is empty

    if(principal.value == "0"){
        alert("Please enter the Amount");
        principal.focus();
        return false;
    }

    if(principal.value == /^-\d+$/){
    alert("Please enter the Amount");
    principal.focus();
    return false;
    }
    return true;
}