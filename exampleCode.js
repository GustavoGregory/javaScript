const usuario = {
  nome: "Daniel",
  idade: 29,
  time: "Fluminense",
};

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindas3 = "Bem vindo, Amante do esporte!";

if(usuario.time === "Fluminense"){
    console.log(mensagemDeBoasVindas1);
}

else if(usuario.time === "Flamengo"){   
    console.log(mensagemDeBoasVindas2);
}

else{
    console.log(mensagemDeBoasVindas3);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar o seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã !!! ";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
