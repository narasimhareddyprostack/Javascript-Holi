class Account {
    min_Bal = 500
    acc_Bal = 0
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    get_St() {
        console.log("Chargable")
    }
    withdraw_Amount() {
        console.log("InSufficient Balance")
    }
    close_Account() {
        console.log("Pay - amount ! immidiately")
    }
}

let s = new Account()
console.log(s.min_Bal)  //500
console.log(s.acc_Bal)  //0

s.open_Account
s.deposit_Amount(6000000)
s.get_Bal()
s.get_St()
s.withdraw_Amount()
s.close_Account()