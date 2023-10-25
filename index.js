/* 
  1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, 
  deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve 
  imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
*/

function exercicio1(){

    let numero1 = prompt("Digite o primeiro valor");

    let numero2 = prompt("Digite o segundo valor");
 
    numero1 = parseFloat(numero1);

    numero2 = parseFloat(numero2);
     
    while(numero2 <= 0){

    numero2 = prompt("Digite o segundo valor, ele não pode ser menor ou igual a zero");

    numero2 = parseFloat(numero2);

    }
 
    let resultado = numero1 / numero2;

    alert("O resultado da divisão é " + resultado);

}
 
/* 
    2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. 
    Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
*/
 
function exercicio2(){

    let contador = 30;

    while(contador >= 0){

    document.write(contador + "<br>");
    contador--;

    }

    document.write("EXPLOSÃO");

}
 
/* 
   3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
   Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
*/
 
function exercicio3(){

    let contador = 10;
 
    while(contador >= 1){

    document.write(contador + "<br>");
    contador--;

    }

}
 
/* 
  4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
*/
 
function exercicio4(){

    let contador = 15;

    let soma = 0;

    let media = 0;

    let quantidade = 0;
 
    while(contador <= 100){

    soma = soma + contador;
    contador++;
    quantidade++;

    }
 
    media = soma / quantidade;
    
    alert("A média é " + media);

}
 
/*  
   5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros 
   entre eles. Considere que o primeiro sempre será menor que o segundo.
*/
 
function exercicio5(){

    let numero1 = prompt("Digite o primeiro valor");

    let numero2 = prompt("Digite o segundo valor");

 
    numero1 = parseInt(numero1);

    numero2 = parseInt(numero2);
 
    let soma = numero1 + numero2;

    let media = soma / 2;
 
    document.write("A média é " + media + "<br>");
 
    while(numero1 <= numero2){

    document.write(numero1 + "<br>");
    numero1++;

    }
}
 
/* 
    6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. 
    Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve 
    ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
*/
 
function exercicio6(){

    let nota1 = prompt("Qual a sua primeria nota");

    let nota2 = prompt("Qual a sua segunda nota");

    let alunosAprovados = [];
 
    nota1 = parseFloat(nota1);

    nota2 = parseFloat(nota2);
 
    let media = nota1 + nota2 / 2;
     
    if(media => 9.5){

    alert("Aprovado");

    alunosAprovados.push(media);
    }

    else{

    alert("Reprovado");

    }
 
    let opcao = confirm("Calcular a média de outro aluno?")

    while(opcao == true){

    nota1 = prompt("Qual a sua primeria nota");

    nota2 = prompt("Qual a sua segunda nota"); 
 
    nota1 = parseFloat(nota1);

    nota2 = parseFloat(nota2);
     
    let media = nota1 + nota2 / 2;
         
    if(media => 9.5){

    alert("Aprovado");

    alunosAprovados.push(media);

    }

    else{

    alert("Reprovado");

    }
    opcao = confirm("Calcular a média de outro aluno?");

    }
 
    alert("A quantidade de alunos aprovados é: " + alunosAprovados.length)
 
}
 
/* 
    8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
    N  é um valor informado pelo usuário
*/
 
function exercicio8(){

    let numero = prompt("Digite um valor");

    numero = parseInt(numero);
 
    while(numero >= 1){

    document.write(numero + "<br>");
    numero--;

    }
}
 
/* 
    9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
*/
 
function exercicio9(){

    let numero = 101;

 
    while(numero <= 110){

    document.write(numero + "<br>");
    numero++;

    }
}
 
/* 
    10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
*/
 
function exercicio10(){

    let numero = prompt("Digite um valor");

    numero = parseInt(numero);
 
    let contador = 1;
 
    while(contador <= 10){

    document.write(numero + " x " + contador + " = " + numero * contador + "<br>");
    ontador++;

    }
}
 
/* 
    11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 
    24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
*/
 
function exercicio11(){

    let contador = 1;

    let dentro = 0;

    let fora = 0;
 
    while(contador <= 10){

    let numero = prompt("Digite um valor");

    numero = parseInt(numero);
 
    if(numero >= 24 && numero <= 42){
        
    dentro++;

    }
    else{

    fora++;

    }

    contador++;

    }

    alert("Dentro do intervalo: " + dentro + " Fora do intervalo: " + fora);
    
}