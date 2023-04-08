class Account {
    min_Bal = 500
    acc_Bal = 0
    open_Accouont() { }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl_Amount(amount) {
        this.acc_Bal = this.acc_Bal - amount
    }
}
let a1 = new Account();
a1.deposit_Amount(5000)
a1.withdrawl_Amount(10)
let a2 = new Account();
a2.deposit_Amount(49000);
a2.deposit_Amount(8000);

let a3 = new Account();
a3.deposit_Amount(500000)
a3.deposit_Amount(9)
a3.withdrawl_Amount(2)
a3.withdrawl_Amount(1)
console.log(a1)
console.log(a2)
console.log(a3)