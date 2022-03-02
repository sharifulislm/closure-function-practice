const bank = owner => {
balance = 0;
return {
 deposit: amount =>{
     // balance = balance + amount;
     balance += amount;
     return balance;
 },
  withdraw:amount => {
 // balance = balance - amount;
    balance -= amount;
    return balance;
  }
}
}
const KasemBank = bank ('Kasem');
console.log(KasemBank.deposit(100));
console.log(KasemBank.deposit(100));
console.log(KasemBank.deposit(100));
console.log(KasemBank.deposit(100));

console.log(Mofijbank.balance);
console.log(KasemBank.deposit(100));
console.log(KasemBank.withdraw(500));