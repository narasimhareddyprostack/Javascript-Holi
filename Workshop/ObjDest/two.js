let state = {
    msg: "GM",
    product: {
        p_Id: 'P101',
        p_Name: "Iphone 5s"
    },
    counter: 1,
    user: {
        user_Id: 101,
        user_Name: "Rahul Gandhi",
        user_Email: "rahul@gmail.com"
    }
}
let { counter, user } = state
console.log(counter)
console.log(user.user_Id)