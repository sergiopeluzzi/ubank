import Usuario from '../classes/Usuario.js'

var tbEl = document.querySelector('#tb-usuarios')
var btnSalvarEl = document.querySelector('#btn-salvar-usuario')

function getData() {
    var req = new XMLHttpRequest()
    var db = ''
    
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            db = JSON.parse(this.responseText)
            var dados = db.data

            var tbodyEl = document.querySelector('#tbody-usuarios')

            dados.forEach(e => {
                var trEl = document.createElement('tr')
    
                var tdIdEl = document.createElement('td')
                var tdUsuarioEl = document.createElement('td')
                var tdAtivoEl = document.createElement('td')
    
                tdIdEl.innerHTML = e.id
                tdUsuarioEl.innerHTML = e.usuario
                tdUsuarioEl.className = 'td-user'
                tdAtivoEl.innerHTML = e.ativo
    
                trEl.append(tdIdEl)
                trEl.append(tdUsuarioEl)
                trEl.append(tdAtivoEl)
    
                tbodyEl.append(trEl)
            });
        }
    }
    
    req.open('GET', '../../db/usuarios.json', true)
    req.send()

    return db
}

function saveData() {
    var req = new XMLHttpRequest()

    var db = {}

    var userEl = document.querySelector('#user')
    var passEl = document.querySelector('#pass')
    var passConfirmedEl = document.querySelector('#pass-confirmed')

    if (userEl.value != '') {
        if (passEl.value === passConfirmedEl.value) {
            var user = userEl.value
            var pass = passEl.value

            var user = new Usuario(user, pass) 
        }
    }
    
    db = getData()

    db.data.push(user)

    req.open('POST', '../../db/usuarios.json', true)
    req.setRequestHeader('Content-Type', 'Application/JSON')
    req.send(db)

    window.location.href = 'http://127.0.0.1:5500/pages/usuarios/listar.html'
}

if (tbEl) {
    getData()
}

if (btnSalvarEl) {
    btnSalvarEl.onclick = saveData
}

