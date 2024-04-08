//criar arquivos em nosso projeto 

const fs=require('fs');

//criar um arquivo de log sincrono 

let log ="mensagem de log\n";


fs.writeFileSync('./logs.log',log,{flag: 'a+'});

//criar arquivo de forma assincrona 

fs.writeFileSync('./logs2.log',log,{flag: 'a+'},(erro)=>{
    if(erro){
        console.log(erro)
    }
})

console.log("Fim");

//para excluir arquivos
fs.rmSync('./logs2.log');

console.log('Removendo arquivo com rmSync');

//outra forma de remover 
fs.unlinkSync('./logs.log');
console.log("Removendo arquivo usando unlinkSync");