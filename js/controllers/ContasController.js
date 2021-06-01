import ContaCorrente from '../classes/ContaCorrente.js'
import ContaPoupanca from '../classes/ContaPoupanca.js'

var tbEl = document.querySelector('#tb-contas')
var formEl = document.querySelector('#form-contas')
var btnSalvarEl = document.querySelector('#btn-salvar-contas')

function getData() {
    var contas = getContas()    

    var tbodyEl = document.querySelector('#tbody-contas')

    contas.forEach(e => { 
        var trEl = document.createElement('tr')

        var tdElId = document.createElement('td')
        var tdElConta = document.createElement('td')
        var tdElTitular = document.createElement('td')
        var tdElSaldo = document.createElement('td')
        var tdElTipo = document.createElement('td')
        var tdEldtAbertura = document.createElement('td')
        var tdElAtivo = document.createElement('td')

        tdElId.innerHTML = e.id
        tdElConta.innerHTML = e.numero
        tdElTitular.innerHTML = e.titular
        tdElSaldo.innerHTML = e.saldo.toFixed(2)
        tdElTipo.innerHTML = e.tipo
        tdEldtAbertura.innerHTML = e.dataAbertura
        tdElAtivo.innerHTML = e.ativo

        trEl.append(tdElId)
        trEl.append(tdElConta)
        trEl.append(tdElTitular)
        trEl.append(tdElSaldo)
        trEl.append(tdElTipo)
        trEl.append(tdEldtAbertura)
        trEl.append(tdElAtivo)

        tbodyEl.append(trEl)
    })
    
}

function saveData() {
    var numeroEl = document.querySelector('#numero')
    var titularEl = document.querySelector('#titular')
    var tpContaEl = document.querySelector('#tp-conta')

    if (titularEl.value != 0 && tpContaEl.value != 0 && numeroEl.value != '') { 
        var numero = numeroEl.value
        var titular = titularEl.value

        if(tpContaEl.value == 'corrente') {
            var contas = JSON.parse(localStorage.getItem('conta-corrente')) || []
            var conta = new ContaCorrente(numero, titular)

            //Loop para pegar o maxId da conta
            var max = 0
            contas.forEach(conta => {
                if(conta.id > max) {
                    max = conta.id
                }
            })

            conta.id = max + 1

            contas.push(conta)
            localStorage.setItem('conta-corrente', JSON.stringify(contas))
        } else if (tpContaEl.value == 'poupanca') {
            var contas = JSON.parse(localStorage.getItem('conta-poupanca')) || []
            var conta = new ContaPoupanca(numero, titular)

            //Loop para pegar o maxId da conta
            var max = 0
            contas.forEach(conta => {
                if(conta.id > max) {
                    max = conta.id
                }
            })

            conta.id = max + 1

            contas.push(conta)
            localStorage.setItem('conta-poupanca', JSON.stringify(contas))
        }

        window.location.href = 'http://127.0.0.1:5500/pages/contas/listar.html'

    }    
}

function getPessoas() {
    var pfisica = JSON.parse(localStorage.getItem('pessoa-fisica'))
    var pjuridica = JSON.parse(localStorage.getItem('pessoa-juridica'))

    var pessoas = pfisica.concat(pjuridica)

    var selectPessoasEl = document.querySelector('#titular')
    
    pessoas.forEach(p => {
        var optEl = document.createElement('option')
        optEl.value = p.id+'-'+p.nome
        optEl.innerHTML = p.nome

        selectPessoasEl.append(optEl)
    });
    
}

function getContas() {
    var cCorrente = JSON.parse(localStorage.getItem('conta-corrente')) || []
    var cPoupanca = JSON.parse(localStorage.getItem('conta-poupanca')) || []

    var contas = cCorrente.concat(cPoupanca)

    return contas
}

if (formEl) {
    getPessoas()
    btnSalvarEl.onclick = saveData
}

if (tbEl) {
    getData()
}