function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.balance = initialBalance;
  this.address = address;

  this.printInfo = function () {
    console.log(
      `Essa conta pertence a ${this.personName}, residente do endereço ${
        this.address
      } e possui um saldo atual de ${Number(this.balance).toFixed(2)} reais`
    );
  };
}

const ba1 = new BankAccount("Gustavo", 2000, "Alguma rua ai");

ba1.printInfo();
console.log(typeof ba1);
console.log(ba1 instanceof BankAccount);
