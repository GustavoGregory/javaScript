const usuario = {
  nome: "Daniel",
  idade: 29,
  time: "Fluminense",
};

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindas3 = "Bem vindo, Amante do esporte!";

//If = condição principal
if(usuario.time === "Fluminense"){                    
    console.log(mensagemDeBoasVindas1);
}

//Else if = condição secundária que ira executar caso condições anteriores não satisfazem
else if(usuario.time === "Flamengo"){                  
    console.log(mensagemDeBoasVindas2);
}

//Else = executa caso nenhuma condição satisfaz
else{
    console.log(mensagemDeBoasVindas3);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar o seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã !!! ";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
