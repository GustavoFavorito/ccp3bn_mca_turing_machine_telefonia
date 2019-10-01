function turingMachine() {
    var output = document.getElementById('output').innerHTML;
    var parse = output.split(/<\/?span>/).filter(Boolean);
    
    if (parse.length < 10 || parse.length > 15) {
        document.getElementById('modal-output').innerHTML = "O número discado não existe :c";
    } else {
        if (parse.length == 10) {
            if (parse[0] == 0) {
                msg = "";
                //checkDigit(0, parse);
                checkRegion(String(parse[1]), msg);
            }
        } else if (parse.length == 11) {
            msg = "Do Brasil "
            checkRegion(String(parse[2]), msg);
        } else if (parse.length == 15) {
            msg = "Do Brasil "
            if (String(parse[0]) + parse[1] == '00' && String(parse[4]) + parse[5] == '33') {
                checkRegion(String(parse[6]), msg);
            }
        }
    }
};

function checkRegion(expression, msg) {
    switch (expression) {
        case '1':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Região Parisiense";
            break;
        case '2':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Noroeste Francês e Dependências no Oceano Índico";
            break;
        case '3':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Nordeste da França";
            break;
        case '4':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Sudeste da França";
            break;
        case '5':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Sudoeste da França e Dependências do Oceano Atlântico";
            break;
        case '6':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Telefonia Móvel na França";
            break;
        case '7':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Celulares/Aparelhos M2M";
            break;
        case '8':
            document.getElementById('modal-output').innerHTML = msg + "Discando para Chamadas Gratuítas ou de Custo Compartilhado";
            break;
        case '9':
            document.getElementById('modal-output').innerHTML = msg + "Discagem Incorreta";
            break;
    }
}

/*function checkDigit(pos, parse) {
    for (var index = 0; index <= pos; index++) {
        console.log(parse[index]);
    }
}*/