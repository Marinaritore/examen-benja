function Calcula() {

    let nota1 = document.getElementById("nota1").value;
    nota1 = Number(nota1);
    
    
    let nota2= document.getElementById("nota2").value;
    nota2 = Number(nota2);
    
    let nota3= document.getElementById("nota3").value;
    nota3 = Number(nota3);
    let divisio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    document.getElementById("texto").innerHTML= `Nota per alumne  ${divisio} `; }