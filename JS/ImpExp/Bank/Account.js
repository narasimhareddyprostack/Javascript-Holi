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

module.exports = Account