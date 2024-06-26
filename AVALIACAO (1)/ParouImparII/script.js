const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    //let valor = document.querySelector('input').value;

    const dadosForm = new FormData(form);
    let valor = dadosForm.get("valor"); 
    
    if (parseInt(valor) % 2 == 0){
        document.querySelector('h1').innerHTML = "PAR";
    }

    else{
        document.querySelector('h1').innerHTML = "IMPAR";  
    }

})

