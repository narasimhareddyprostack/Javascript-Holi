let employees = [{
    "id": 1,
    "name": "Angelika",
    "email": "ayeudall0@blogger.com",
    "gender": "Female"
}, {
    "id": 2,
    "name": "Casey",
    "email": "cluce1@photobucket.com",
    "gender": "Female"
}, {
    "id": 3,
    "name": "Margy",
    "email": "mmacgillespie2@squarespace.com",
    "gender": "Female"
}, {
    "id": 4,
    "name": "Loleta",
    "email": "lescalero3@1688.com",
    "gender": "Female"
}, {
    "id": 5,
    "name": "Elaine",
    "email": "etack4@liveinternet.ru",
    "gender": "Female"
}, {
    "id": 6,
    "name": "Elmo",
    "email": "ebraunes5@hatena.ne.jp",
    "gender": "Male"
}, {
    "id": 7,
    "name": "Allyce",
    "email": "apriditt6@yandex.ru",
    "gender": "Female"
}, {
    "id": 8,
    "name": "Farris",
    "email": "fkiessel7@rediff.com",
    "gender": "Male"
}, {
    "id": 9,
    "name": "Perry",
    "email": "parundell8@about.me",
    "gender": "Male"
}, {
    "id": 10,
    "name": "Dudley",
    "email": "dmcmurraya9@plala.or.jp",
    "gender": "Male"
}, {
    "id": 11,
    "name": "Bondon",
    "email": "bminalla@quantcast.com",
    "gender": "Male"
}, {
    "id": 12,
    "name": "Candida",
    "email": "cmetcalfeb@instagram.com",
    "gender": "Female"
}, {
    "id": 13,
    "name": "Rona",
    "email": "radeyc@weather.com",
    "gender": "Female"
}, {
    "id": 14,
    "name": "Gaylor",
    "email": "ghamflettd@t-online.de",
    "gender": "Male"
}, {
    "id": 15,
    "name": "Davon",
    "email": "dtschiersche@delicious.com",
    "gender": "Male"
}, {
    "id": 16,
    "name": "Clemmie",
    "email": "cmillinf@biglobe.ne.jp",
    "gender": "Male"
}, {
    "id": 17,
    "name": "Glory",
    "email": "gfarleighg@oakley.com",
    "gender": "Female"
}, {
    "id": 18,
    "name": "Humbert",
    "email": "hmocharh@diigo.com",
    "gender": "Male"
}, {
    "id": 19,
    "name": "Josiah",
    "email": "jcatlini@ca.gov",
    "gender": "Male"
}, {
    "id": 20,
    "name": "Yvonne",
    "email": "yarmstrongj@ameblo.jp",
    "gender": "Female"
}, {
    "id": 21,
    "name": "Katrine",
    "email": "ktitmusk@opera.com",
    "gender": "Female"
}, {
    "id": 22,
    "name": "Court",
    "email": "ckusickl@netlog.com",
    "gender": "Male"
}, {
    "id": 23,
    "name": "Byron",
    "email": "bdunnettm@umich.edu",
    "gender": "Male"
}, {
    "id": 24,
    "name": "Quinta",
    "email": "qmalecn@delicious.com",
    "gender": "Female"
}, {
    "id": 25,
    "name": "Theobald",
    "email": "toreagano@tinyurl.com",
    "gender": "Male"
}, {
    "id": 26,
    "name": "Chrystel",
    "email": "cjoulesp@weebly.com",
    "gender": "Female"
}, {
    "id": 27,
    "name": "Boot",
    "email": "bcroyserq@about.me",
    "gender": "Male"
}, {
    "id": 28,
    "name": "Ilene",
    "email": "ifickenr@amazonaws.com",
    "gender": "Female"
}, {
    "id": 29,
    "name": "Daniele",
    "email": "dfelds@wunderground.com",
    "gender": "Female"
}, {
    "id": 30,
    "name": "Bernetta",
    "email": "bwinfindinet@skyrock.com",
    "gender": "Female"
}]


let display_Employees = () => {
    // alert("GM")
    let rows = ""
    employees.forEach((employee) => {
        rows = rows + `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                </tr>`
    })

    //document.getElementById('abc').innerHTML = "GM"
    document.getElementById('abc').innerHTML = rows
}