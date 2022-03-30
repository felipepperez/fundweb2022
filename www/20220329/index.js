var peso = 85;
var altura = 1.75;

var imc = peso / (altura *altura);

var classificacao = "";
var grau = "";

if(imc<18.5){
    classificacao = "MAGREZA";
    grau = "0";
}else if(imc<25){
    classificacao = "NORMAL";
    grau = "0";
}else if(imc<30){
    classificacao = "SOBREPESO";
    grau = "I";
}else if(imc<40){
    classificacao = "OBESIDADE";
    grau = "II";
}else{
    classificacao = "OBESIDADE GRAVE";
    grau = "III";
}

console.log(imc,classificacao,grau);