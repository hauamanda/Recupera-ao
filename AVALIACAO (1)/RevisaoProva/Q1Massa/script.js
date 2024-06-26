
converte = document.querySelector('button');
converte.addEventListener('click', function(){
    let quantia = parseFloat(document.querySelector('#quantia').value);
    let origem = document.querySelector('#origem').value;
    let destino = document.querySelector('#destino').value;
    let valor = document.querySelector('#valor');
    let resultado = 0;

    if(origem==destino){
        resultado = quantia;
    }
    if (origem=='g'){
        if(destino == 'q'){
            resultado = quantia/1000;
        }else if (destino == 't'){
            resultado = quantia/10000;
        }
    }

    if (origem=='q'){
        if(destino == 'g'){
            resultado = quantia*1000;
        }else if (destino == 't'){
            resultado = quantia/1000;
        }
    }

    if (origem=='t'){
        if(destino == 'g'){
            resultado = quantia*10000;
        }else if (destino == 'q'){
            resultado = quantia*1000;
        }
    }
    valor.value = parseFloat(resultado);
})