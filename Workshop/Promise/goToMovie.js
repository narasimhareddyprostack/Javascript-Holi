let goToMovie = (success, failure) => {
    let amount = 3000;
    amount > 500 ? success("Go To Movie") : failure("Go To PG")

}

goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})