function cc_Focus() {
    let ref = document.getElementById('abc')
    //console.log(ref)
    ref.style.backgroundColor = "green"
}

let getData = () => {
    let name = document.getElementById('uName').value
    //console.log(name)
    //document.getElementById('uName').value = "Test Case 123"
    document.getElementById('uName').value = name.toUpperCase()
}