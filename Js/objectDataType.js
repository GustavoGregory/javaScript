// const obj = {
//   nome: "Gustavo",
//   endereco: "rua",
//   saldo: 200,
// };

// const variavel1 = 2;
// const variavel2 = "2";

function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.address = address;
}

const acc1 = new BankAccount("Gustavo", 200, "rua");
console.log(acc1);
console.log(typeof acc1);

const acc2 = new BankAccount("Kleber", 2000, "outra rua");
console.log(acc2);
