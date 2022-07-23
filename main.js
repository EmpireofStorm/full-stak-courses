var today = new Date();
var age;
console.log(today);
console.log(age);
var letter="A";
var i=1000;
while (i>=6){
    console.log(String(i)+"-7="+String(i-7))
    var i=i-7;
}
console.log("Я..... клоун")
function add(n, m){
    return n+m;
}
var zxcv=add(5, 6);
console.log(zxcv);
function lychie(first, second, third){
    this.first = first;
    this.second = second;
    this.third = third;
    this.getName = function(){
        return this.first+""+this.second+''+this.third;
    }
}
function showAnswers(){
    alert("A");
}
var pochti= new lychie("Seized", "Zeus", "Guardian");
console.log(pochti.getName());
function srcforimages(){
var imgSet=document.getElementsByTagName("img");
var output="";
for (var i=0; i< imgSet.length; i++){
    var newPara = document.createElement("p");
    var newText=document.createTextNode("Source for image "+String(i    )+": "+String(imgSet[i].src))
    newPara.appendChild(newText);
    document.body.appendChild(newPara);
}
console.log("Врооде должно работать")
}
function updateRate(){
    var rateval=document.getElementById("rate").value()
    document.getElementById("rate_val").innerText=rateval;
}