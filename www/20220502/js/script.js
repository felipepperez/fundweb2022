$(function () {
    $('select').formSelect();

    $("#peso, #altura").keydown((e) => {
        //console.log("keydown" + e.which);
        var key = e.which;
        if (key == 109 || key == 107 || key == 194 || key == 69)
            e.preventDefault();
    });

    $("#imc").click(() => {
        $('select').formSelect("destroy");

        var selectError = false;
        if ($('select').val() != null) {
            $('select').addClass("valid");
        } else {
            selectError = true;
        }

        count = 0;
        $(".validate").each((index, element) => {
            if ($(element).hasClass("valid"))
                count++;
            else if (!$(element).hasClass("invalid"))
                $(element).addClass("invalid");

        });

        //console.log(count);

        if (count == 3) {
            //console.log(imc($("select").val(),$("#peso").val(),$("#altura").val()))
            var resp = imc($("select").val(),$("#peso").val(),$("#altura").val());
            $("h4").html(`IMC <br> ${resp.imc} <br><br> GRAU <br> ${resp.grau} <br><br> CLASSIFICACAO <br> ${resp.classificacao}`);
        }

        $('select').formSelect();
        //console.log(selectError)
        if (selectError)
            $('.select-wrapper').addClass("invalid");
        else
            $('.select-wrapper').addClass("valid");
    });
    /*
    DEBUG PARA ENTENDER O COMPORTAMENTO DE CADA EVENTO
     $("#peso").keyup((e)=>{
        console.log("keyup"+e.which);
    });
    $("#peso").keypress((e)=>{
        console.log("keypress"+e.which);
    });
    $("#peso").change((e)=>{
        console.log("change"+e.which);
    });
    $("#peso").blur((e)=>{
        console.log("blur"+e.which);
    }); */

    function imc(sexo, peso, altura) {
        var imc = peso / (altura * altura);

        var classificacao = "";
        var grau = "";

        if (sexo == 1) {
            if (imc < 20) {
                classificacao = "MAGREZA";
                grau = "0";
            } else if (imc < 25) {
                classificacao = "NORMAL";
                grau = "0";
            } else if (imc < 30) {
                classificacao = "SOBREPESO";
                grau = "I";
            } else if (imc < 40) {
                classificacao = "OBESIDADE";
                grau = "II";
            } else {
                classificacao = "OBESIDADE GRAVE";
                grau = "III";
            }
        }else{
            if (imc < 19) {
                classificacao = "MAGREZA";
                grau = "0";
            } else if (imc < 24) {
                classificacao = "NORMAL";
                grau = "0";
            } else if (imc < 29) {
                classificacao = "SOBREPESO";
                grau = "I";
            } else if (imc < 49) {
                classificacao = "OBESIDADE";
                grau = "II";
            } else {
                classificacao = "OBESIDADE GRAVE";
                grau = "III";
            }
        }

        return ({ imc: imc, grau: grau, classificacao: classificacao });
    }
})