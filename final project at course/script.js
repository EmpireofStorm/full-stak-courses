function compute(){
    checkprincipal();
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=Number(document.getElementById("years").value);
    var amount=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"</mark>, \<br\>at an interest rate of \<mark>"+rate+"%</mark>\<br\>You will receive an amount of \<mark>"+amount+"</mark>,\<br\>in the year \<mark>"+year+"</mark>\<br\>";
}
function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function checkprincipal(){
    var principal2=document.getElementById("principal").value;
    if (principal2==0 || principal2<0 || principal2==""){
        alert("Enter a positive number");
        principal.focus();
    }
}