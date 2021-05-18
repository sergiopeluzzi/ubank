import Usuario from '../classes/Usuario.js'

var req = new XMLHttpRequest()
var db = ''

req.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        db = JSON.parse(this.responseText)
        console.log(db);

        var
    }
}

req.open('GET', '../../db/usuarios.json', true)
req.send()