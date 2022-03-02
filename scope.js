function patriChai (age, earning) {
 
    console.log(earning);
    var decision = canMarry(15000);
    console.log(decision);
    const trueAge = age + 7;

    function canMarry(expense) {
        const remaining = earning - expense;
        console.log(remaining)
        if(remaining > 1000){
            return true;
        }
        return false;
    }
}
patriChai(21 , 50000);