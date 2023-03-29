class Account {
    acc_Id;
    acc_Name;
    acc_Email;
    constructor(id, name, email) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
    }
    open_Account() {
        console.log("Account Opened Successfully")
    }
    close_Account() {
        console.log("Account Closed Successfullt")
    }
}

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