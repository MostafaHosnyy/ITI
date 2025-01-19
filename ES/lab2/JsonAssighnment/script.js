
// log API
fetch('./rockbands.json')
            .then(res=>res.json())
            .then(json=>console.log(json.beatles))