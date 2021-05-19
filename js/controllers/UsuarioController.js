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
            var dados = db.data
            //console.log(db.data);

            var userEl = document.querySelector('#user')
            var passEl = document.querySelector('#pass')
            var passConfirmedEl = document.querySelector('#pass-confirmed')

            if (userEl.value != '') {
                if (passEl.value === passConfirmedEl.value) {
                    var user = userEl.value
                    var pass = passEl.value

                    var max = 0
                    dados.forEach(e => {
                        if(e.id > max) {
                            max = e.id
                        }
                    })
                    
                    var user = new Usuario(user, pass) 
                    user.id = max + 1

                    dados.push(user)
                }
            }
            
            console.log(dados);
            //window.location.href = 'http://127.0.0.1:5500/UBank/pages/usuarios/listar.html'

        }
    }
    
    req.open('GET', '../../db/usuarios.json', true)
    req.send()
}


if (tbEl) {
    getData()
}

if (btnSalvarEl) {
    btnSalvarEl.onclick = saveData
}

