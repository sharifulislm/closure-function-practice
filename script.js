const bank = owner => {
balance = 0;
return amount => {
    // balance = balance + amount;
    balance += amount;
    return balance;
}
}
const Mofijbank = bank('Mofij');
console.log(Mofijbank(100));
console.log(Mofijbank(200));
console.log(Mofijbank(400));
console.log(Mofijbank.balance);



