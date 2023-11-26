// Desafio Dio Felipão //

let nomeHeroi = "DIOmon";
let pontosDeHabilidade = 8755;

console.log("O Herói: " + nomeHeroi + " está com: " + pontosDeHabilidade + " XPs");

for(let contador = 0; contador <= 10002; contador++){

if(pontosDeHabilidade <= 1000) {
     console.log("Nivel: Ferro");
   }else if(pontosDeHabilidade >= 1001 && pontosDeHabilidade <= 2000) {
     console.log("Nivel: Bronze"); 
   }else if(pontosDeHabilidade >= 2001 && pontosDeHabilidade <= 5000) {
     console.log("Nivel: Prata");
   }else if(pontosDeHabilidade >= 5001 && pontosDeHabilidade<= 6000) {
     console.log("Nivel: Ouro")   
   }else if(pontosDeHabilidade >= 6001 && pontosDeHabilidade <= 7000) {
     console.log("Nivel: Platina"); 
   }else if(pontosDeHabilidade >= 7001 && pontosDeHabilidade <= 8000) {
     console.log("Nivel: Diamante");
   }else if(pontosDeHabilidade >= 8001 && pontosDeHabilidade <= 9000) {
     console.log("Nivel: Ascendente");
   }else if(pontosDeHabilidade >= 9001 && pontosDeHabilidade <= 10000) {
     console.log("Nivel: Imortal");
   }else{ 
     console.log("Nivel: Radiante");
   }
}
 