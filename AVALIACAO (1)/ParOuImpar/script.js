
const input = document.querySelector('input');

input.addEventListener('change', function(e){
    let valor = input.value;
    e.preventDefault();

    if (parseInt(valor) % 2 == 0){
        document.querySelector('h1').innerHTML = "PAR";
    }

    else{
        document.querySelector('h1').innerHTML = "IMPAR";  
    }

});  