import Usuario from '../classes/Usuario.js'

var tbEl = document.querySelector('#tb-usuarios')
var btnSalvarEl = document.querySelector('#btn-salvar-usuario')

function getData() {

    var dados = JSON.parse(localStorage.getItem('usuarios')) || []

    var tbodyEl = document.querySelector('#tbody-usuarios')

    dados.forEach(e => {
        var trEl = document.createElement('tr')

        var tdIdEl = document.createElement('td')
        var tdUsuarioEl = document.createElement('td')
        var tdAtivoEl = document.createElement('td')

        tdIdEl.innerHTML = e.id
        tdUsuarioEl.innerHTML = e.usuario
        tdUsuarioEl.className = 'td-left'
        tdAtivoEl.innerHTML = e.ativo

        trEl.append(tdIdEl)
        trEl.append(tdUsuarioEl)
        trEl.append(tdAtivoEl)

        tbodyEl.append(trEl)
    });
}

function saveData() {
    var dados = JSON.parse(localStorage.getItem('usuarios')) || []
    var errors = []

    var userEl = document.querySelector('#user')
    var passEl = document.querySelector('#pass')
    var passConfirmedEl = document.querySelector('#pass-confirmed')

    //Validator campo preenchido
    if (userEl.value != '' && passEl.value != '') {
        //Validator senha e senha confirmada
        if (passEl.value === passConfirmedEl.value) {
            var user = userEl.value
            var pass = passEl.value

            //Validator usuario
            dados.forEach(u => {
                if(u.usuario == user) {
                    var errorMsg = { 
                        'code': '001',
                        'txt': 'Usuário ' + user +' já existe'
                    }

                    console.log('teste');
                    
                    errors.push(errorMsg)
                    return 
                } 
            })

            if (errors.length > 0) {
                alert(errors[0].txt)
                limpaCampos()
                return
            }

            var user = new Usuario(user, pass)

            //Loop para pegar o maxId do user
            var max = 0
            dados.forEach(user => {
                if(user.id > max) {
                    max = user.id
                }
            })
           
            user.id = max + 1

            dados.push(user)
            
            localStorage.setItem('usuarios', JSON.stringify(dados))
            
            window.location.href = 'http://127.0.0.1:5500/pages/usuarios/listar.html'
        }
    }
}

function limpaCampos() {
    var campos = document.querySelectorAll('input')
    //Loop para setar o value = vazio nos inputs
    campos.forEach(c => {
        c.value = ''
    })
}

if (tbEl) {
    getData()
}

if (btnSalvarEl) {
    btnSalvarEl.onclick = saveData
}

