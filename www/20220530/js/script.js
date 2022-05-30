$(() => {
    var element = document.getElementById('cep');

    var maskOptions = {
        mask: '00.000-000'
    }

    var mask = IMask(element, maskOptions);

    $('#get').click(() => {
        var cep = $("#cep").val();
        if(isCEP(cep)){
            $.get(`https://viacep.com.br/ws/${cep.replace(".","")}/json/`,function(data){
                var obj = data;
                $("#logradouro").html(obj.logradouro);
                $("#bairro").html(obj.bairro);
                $("#localidade").html(obj.localidade);
                $("#uf").html(obj.uf);
            });
        }else{
            alert("CEP Inválido");
        }
    });

    function isCEP(strCEP) {
        var objER = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;
        if (strCEP.length > 0){
            if(objER.test(strCEP)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
})