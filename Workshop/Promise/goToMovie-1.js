let goToMovie = (success, failure) => {
    let amount = 300;
    amount > 500 ? success("Go To Movie") : failure("Go To PG")

}

goToMovie(() => { }, () => { })