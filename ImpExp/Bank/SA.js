let Account = require('./Account')
class SA extends Account {
    min_Bal = 500
    acc_Bal = 0
    constructor(id, name, amount, email) {
        super(id, name, email)
        this.acc_Bal = amount
    }
    deposit_Amount(amount) {

    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}

let s1 = new SA(101, "Rahul", 5000, "rahul@pm.com")

console.log(s1)
console.log(s1.get_Bal())
