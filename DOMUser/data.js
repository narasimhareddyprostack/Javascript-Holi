let users = [{ "id": 1, "name": "Cristina", "email": "cswaisland0@canalblog.com", "gender": "Female" },
{ "id": 2, "name": "Ive", "email": "ilandal1@hao123.com", "gender": "Male" },
{ "id": 3, "name": "Theodora", "email": "tslewcock2@sphinn.com", "gender": "Female" },
{ "id": 4, "name": "Baily", "email": "bletcher3@woothemes.com", "gender": "Male" },
{ "id": 5, "name": "Hector", "email": "hdanev4@myspace.com", "gender": "Male" },
{ "id": 6, "name": "Korella", "email": "kberkley5@people.com.cn", "gender": "Female" },
{ "id": 7, "name": "Molly", "email": "mbiaggi6@newyorker.com", "gender": "Female" },
{ "id": 8, "name": "Ruggiero", "email": "rparrott7@statcounter.com", "gender": "Male" },
{ "id": 9, "name": "Blinny", "email": "btwaits8@163.com", "gender": "Female" },
{ "id": 10, "name": "Branden", "email": "bgill9@spiegel.de", "gender": "Male" },
{ "id": 11, "name": "Klemens", "email": "kaldina@sina.com.cn", "gender": "Male" },
{ "id": 12, "name": "Nicholas", "email": "nlamartineb@infoseek.co.jp", "gender": "Male" },
{ "id": 13, "name": "Maxwell", "email": "meustonc@mlb.com", "gender": "Male" },
{ "id": 14, "name": "Verge", "email": "vweldond@seattletimes.com", "gender": "Male" },
{ "id": 15, "name": "Trish", "email": "tsickerte@i2i.jp", "gender": "Female" },
{ "id": 16, "name": "Robin", "email": "rstonhardf@nps.gov", "gender": "Female" },
{ "id": 17, "name": "Waring", "email": "wkesong@auda.org.au", "gender": "Male" },
{ "id": 18, "name": "Tibold", "email": "tpeironeh@goodreads.com", "gender": "Male" },
{ "id": 19, "name": "Thibaut", "email": "tbampfieldi@usda.gov", "gender": "Genderfluid" },
{ "id": 20, "name": "Benedict", "email": "bkinnanej@apple.com", "gender": "Male" },
{ "id": 21, "name": "Chrisse", "email": "cdilaweyk@dot.gov", "gender": "Male" },
{ "id": 22, "name": "Hilde", "email": "hcouperl@usa.gov", "gender": "Female" },
{ "id": 23, "name": "Win", "email": "wgounym@about.me", "gender": "Genderqueer" },
{ "id": 24, "name": "Sabra", "email": "srosern@pcworld.com", "gender": "Female" },
{ "id": 25, "name": "Darsey", "email": "desslemento@pbs.org", "gender": "Agender" },
{ "id": 26, "name": "Gardie", "email": "gmacnalleyp@who.int", "gender": "Male" },
{ "id": 27, "name": "Archer", "email": "abealeq@technorati.com", "gender": "Male" },
{ "id": 28, "name": "Mindy", "email": "mgirardyr@free.fr", "gender": "Female" },
{ "id": 29, "name": "Arman", "email": "astanyers@1688.com", "gender": "Polygender" },
{ "id": 30, "name": "Constantin", "email": "churrant@examiner.com", "gender": "Male" },
{ "id": 31, "name": "Skipper", "email": "sstimsonu@gravatar.com", "gender": "Male" },
{ "id": 32, "name": "Sheila-kathryn", "email": "ssummersonv@ucsd.edu", "gender": "Female" },
{ "id": 33, "name": "Damian", "email": "djoffew@yelp.com", "gender": "Genderfluid" },
{ "id": 34, "name": "Renado", "email": "rmulcockx@google.pl", "gender": "Male" },
{ "id": 35, "name": "Meggi", "email": "mpessely@ft.com", "gender": "Female" },
{ "id": 36, "name": "Nanine", "email": "ncorhardz@uol.com.br", "gender": "Female" },
{ "id": 37, "name": "Jerrie", "email": "jgiovannoni10@archive.org", "gender": "Male" },
{ "id": 38, "name": "Galven", "email": "gheavyside11@google.pl", "gender": "Male" },
{ "id": 39, "name": "Mora", "email": "myoung12@deliciousdays.com", "gender": "Female" },
{ "id": 40, "name": "Olive", "email": "obiddle13@plala.or.jp", "gender": "Female" },
{ "id": 41, "name": "Theodoric", "email": "temblen14@kickstarter.com", "gender": "Male" },
{ "id": 42, "name": "Barbee", "email": "bpusill15@walmart.com", "gender": "Female" },
{ "id": 43, "name": "Rourke", "email": "rkarpf16@wired.com", "gender": "Male" },
{ "id": 44, "name": "Melli", "email": "mentreis17@sogou.com", "gender": "Female" },
{ "id": 45, "name": "Mead", "email": "mlittefair18@github.com", "gender": "Female" },
{ "id": 46, "name": "Darda", "email": "dblakeston19@berkeley.edu", "gender": "Female" },
{ "id": 47, "name": "Heda", "email": "halbrecht1a@naver.com", "gender": "Female" },
{ "id": 48, "name": "Moritz", "email": "mredolfi1b@sphinn.com", "gender": "Male" },
{ "id": 49, "name": "Athene", "email": "afrizzell1c@spotify.com", "gender": "Female" },
{ "id": 50, "name": "Christie", "email": "cfishpond1d@about.com", "gender": "Male" }]

let userDetails = () => {
    let rows = ""
    for (let i = 0; i <= users.length - 1; i++) {
        rows = rows + `<tr>
                        <td>${users[i].id}</td>
                        <td>${users[i].name}</td>
                        <td>${users[i].email}</td>
                        <td>${users[i].gender}</td>
                    </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}