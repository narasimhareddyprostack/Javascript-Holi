let ids = [101, 102, 103, 104]
//let new_Ids =ids   alies/ref 

let new_Ids = []

for (id of ids) {
    //console.log(id)
    //new_Ids.push("GM")
    new_Ids.push(id)
}
ids[0] = 109
console.log(ids)
console.log(new_Ids)