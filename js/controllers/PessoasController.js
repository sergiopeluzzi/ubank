import PessoaFisica from '../classes/PessoaFisica.js'
import PessoaJuridica from '../classes/PessoaJuridica.js'

var tbEl = document.querySelector('#tb-pessoas')
var form = document.querySelectorAll('#form-pessoas')
var btnSalvarEl = document.querySelector('#btn-salvar-pessoa')

var selected = 'fisica'
var selectedCriar = 'fisica'

var selectEl = document.querySelector('#pfisjur')
var selectElCriar = document.querySelector('#pfisjurcriar')

if(selectEl) {
    selectEl.onchange = function() {
        selected = selectEl.value
        getTpPessoa()
    }
}

if(selectElCriar) {
    selectElCriar.onchange = function() {
        selectedCriar = selectElCriar.value
        getPessoas()
    }
}

var divElFis = document.querySelector('#pessoa-fisica')
var divElJur = document.querySelector('#pessoa-juridica')

if(form) {
    var divElFisCriar = document.querySelector('#campos-pfisica')
    var divElJurCriar = document.querySelector('#campos-pjuridica')
}

function getData() {
    //PESSOA FISICA SELECIONADA
    var dadosPFisica = JSON.parse(localStorage.getItem('pessoa-fisica')) || []

    var tbodyEl = document.querySelector('#tbody-pfisica')

    dadosPFisica.forEach(e => {
        var trEl = document.createElement('tr')  

        var tdElId = document.createElement('td')
        var tdElNome = document.createElement('td')
        var tdElTel = document.createElement('td')
        var tdElEnd = document.createElement('td')
        var tdElDtNasc = document.createElement('td')
        var tdElSexo = document.createElement('td')
        var tdElCpf = document.createElement('td')

        tdElId.innerHTML = e.id
        tdElNome.innerHTML = e.nome
        tdElNome.classname = 'td-left'
        tdElTel.innerHTML = e.telefone
        tdElEnd.innerHTML = e.endereco
        tdElEnd.classname = 'td-left'
        tdElDtNasc.innerHTML = e.dataNascimento
        tdElSexo.innerHTML = e.sexo
        tdElCpf.innerHTML = e.cpf

        trEl.append(tdElId)
        trEl.append(tdElNome)
        trEl.append(tdElTel)
        trEl.append(tdElEnd)
        trEl.append(tdElDtNasc)
        trEl.append(tdElSexo)
        trEl.append(tdElCpf)

        tbodyEl.append(trEl)
    });
    
    //PESSOA JURIDICA SELECIONADA
    var dadosPJuridica = JSON.parse(localStorage.getItem('pessoa-juridica')) || []

    var tbodyEl = document.querySelector('#tbody-pjuridica')

    dadosPJuridica.forEach(e => {
        var trEl = document.createElement('tr')  

        var tdElId = document.createElement('td')
        var tdElNome = document.createElement('td')
        var tdElTel = document.createElement('td')
        var tdElEnd = document.createElement('td')
        var tdElDtAbertura = document.createElement('td')
        var tdElCnpj = document.createElement('td')

        tdElId.innerHTML = e.id
        tdElNome.innerHTML = e.nome
        tdElNome.classname = 'td-left'
        tdElTel.innerHTML = e.telefone
        tdElEnd.innerHTML = e.endereco
        tdElEnd.classname = 'td-left'
        tdElDtAbertura.innerHTML = e.dataAbertura
        tdElCnpj.innerHTML = e.cnpj

        trEl.append(tdElId)
        trEl.append(tdElNome)
        trEl.append(tdElTel)
        trEl.append(tdElEnd)
        trEl.append(tdElDtAbertura)
        trEl.append(tdElCnpj)

        tbodyEl.append(trEl)
    });
}

function getPessoas() {
    if(selectedCriar == 'fisica') {
        divElFisCriar.style.display = 'block'
        divElJurCriar.style.display = 'none'
    } else if (selectedCriar == 'juridica') {
        divElFisCriar.style.display = 'none'
        divElJurCriar.style.display = 'block'
    }
}

function saveData() {
    var nomeEl = document.querySelector('#nome')
    var telEl = document.querySelector('#tel')
    var endEl = document.querySelector('#end')

    var nome = nomeEl.value
    var tel = telEl.value
    var end = endEl.value

    if (selectedCriar == 'fisica') {
        var dados = JSON.parse(localStorage.getItem('pessoa-fisica')) || []

        var dtNascEl = document.querySelector('#dt-nasc')
        var sexoEl = document.querySelector('#sexo')
        var cpfEl = document.querySelector('#cpf')

        var dtNasc = dtNascEl.value
        var sexo = sexoEl.value
        var cpf = cpfEl.value

        var pfisica = new PessoaFisica(nome, tel, end, dtNasc, sexo, cpf)

        //Loop para pegar o maxId do user
        var max = 0
        dados.forEach(user => {
            if(user.id > max) {
                max = user.id
            }
        })
        
        pfisica.id = max + 1

        dados.push(pfisica)
        localStorage.setItem('pessoa-fisica', JSON.stringify(dados))

    } else if (selectedCriar == 'juridica') {
        var dados = JSON.parse(localStorage.getItem('pessoa-juridica')) || []

        var dtAberturaEl = document.querySelector('#dt-abertura')
        var cnpjEl = document.querySelector('#cnpj')

        var dtAbertura = dtAberturaEl.value
        var cnpj = cnpjEl.value

        var pjuridica = new PessoaJuridica(nome, tel, end, dtAbertura, cnpj)

        //Loop para pegar o maxId do user
        var max = 0
        dados.forEach(user => {
            if(user.id > max) {
                max = user.id
            }
        })
        
        pjuridica.id = max + 1

        dados.push(pjuridica)
        localStorage.setItem('pessoa-juridica', JSON.stringify(dados))
    }
}

function getTpPessoa() {
    if (selected == 'fisica') {
        divElFis.style.display = 'block'
        divElJur.style.display = 'none'
    } else if (selected == 'juridica') {
        divElFis.style.display = 'none'
        divElJur.style.display = 'block'
    }
}

if (tbEl) {
    getTpPessoa()
    getData()
}

if(form) {
    getPessoas()
}

if (btnSalvarEl) {
    btnSalvarEl.onclick = saveData
}