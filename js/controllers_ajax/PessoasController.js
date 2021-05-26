function getData() {
    var req = new XMLHttpRequest();
    var db = ''

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            db = JSON.parse(this.responseText)
            console.log(db);

            var tbodyEl = document.querySelector('#tbody-usuarios')

            db.data.forEach(e => {
                var trEl = document.createElement('tr')    
                var tdElId = document.createElement('td')
                var tdElUsuario = document.createElement('td')
                var tdElAtivo = document.createElement('td')

                tdElId.innerHTML = e.id
                tdElUsuario.innerHTML = e.username
                
                tdElUsuario.id = 'td-user'
                tdElAtivo.innerHTML = e.ativo

                trEl.append(tdElId)
                trEl.append(tdElUsuario)
                trEl.append(tdElAtivo)

                tbodyEl.append(trEl)
            });

            
        } 
    }

    req.open("GET", "../../db/pessoas.json", true)
    req.send()
}

function getUsers() {
    var req = new XMLHttpRequest();
    var db = ''

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            db = JSON.parse(this.responseText)
            console.log(db);

        } 
    }

    req.open("GET", "../../db/usuarios.json", true)
    req.send()
}