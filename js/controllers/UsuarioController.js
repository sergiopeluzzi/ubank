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
}

function saveData() {
    var req = new XMLHttpRequest()
    var db = ''
    
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            db = JSON.parse(this.responseText)
            console.log(db.data);

            var userEl = document.querySelector('#user')
            var passEl = document.querySelector('#pass')
            var passConfirmedEl = document.querySelector('#pass-confirmed')

        }
    }
    
    req.open('GET', '../../db/usuarios.json', true)
    req.send()
}


if (tbEl) {
    getData()
}

if (btnSalvarEl) {
    btnSalvarEl.onclick = saveData()
}

