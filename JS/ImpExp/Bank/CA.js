let Account = require('./Account')
class CA extends Account {
    min_Bal = 25000
    acc_Bal = 0
    constructor(id, name, amount, email) {
        super(id, name, email)
        this.acc_Bal = amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let c1 = new CA(102, "Priyanka", 60000, "priya@ibm.com")
console.log(c1)
console.log(c1.get_Bal())