function converterMoeda() {
    const valor = parseFloat(document.getElementById('valor').value);
    const conversao = document.getElementById('conversao').value;
    let resultado;

    switch(conversao) {
        case 'realToDolar':
            resultado = valor * 0.25;
            break;
        case 'realToEuro':
            resultado = valor * 0.22;
            break;
        case 'euroToReal':
            resultado = valor * 4.45;
            break;
        case 'dolarToReal':
            resultado = valor * 3.96;
            break;
        default:
                    resultado = 'Selecione uma opção de conversão.';
            }

            document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
        }