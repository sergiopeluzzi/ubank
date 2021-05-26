import Pessoa from '../classes/Pessoa.js'

function getData() {

    var selectEl = document.querySelector('#pfisjur')
    var selected = 'juridica'

    //PESSOA FISICA SELECIONADA
    if (selected == 'fisica') {
        var divEl = document.querySelector('#pessoa-juridica')
        divEl.style.display = 'none'

        var dados = JSON.parse(localStorage.getItem('pessoa-fisica')) || []

        var tbodyEl = document.querySelector('#tbody-pfisica')

        dados.forEach(e => {
            var trEl = document.createElement('tr')  

            var tdElId = document.createElement('td')
            var tdElNome = document.createElement('td')
            var tdElTel = document.createElement('td')
            var tdElEnd = document.createElement('td')
            var tdElDtNasc = document.createElement('td')
            var tdElSexo = document.createElement('td')
            var tdElCpf = document.createElement('td')
            var tdElAtivo = document.createElement('td')

            tdElId.innerHTML = e.id
            tdElNome.innerHTML = e.nome
            tdElNome.classname = 'td-left'
            tdElTel.innerHTML = e.telefone
            tdElEnd.innerHTML = e.endereco
            tdElEnd.classname = 'td-left'
            tdElDtNasc.innerHTML = e.dataNascimento
            tdElSexo.innerHTML = e.sexo
            tdElCpf.innerHTML = e.cpf
            tdElAtivo.innerHTML = e.ativo

            trEl.append(tdElId)
            trEl.append(tdElNome)
            trEl.append(tdElTel)
            trEl.append(tdElEnd)
            trEl.append(tdElDtNasc)
            trEl.append(tdElSexo)
            trEl.append(tdElCpf)
            trEl.append(tdElAtivo)

            tbodyEl.append(trEl)
        });
    
    //PESSOA JURIDICA SELECIONADA
    } else if (selected == 'juridica') {
        var divEl = document.querySelector('#pessoa-fisica')
        divEl.style.display = 'none'

        var dados = JSON.parse(localStorage.getItem('pessoa-juririca')) || []

        var tbodyEl = document.querySelector('#tbody-pjuridica')

        dados.forEach(e => {
            var trEl = document.createElement('tr')  

            var tdElId = document.createElement('td')
            var tdElNome = document.createElement('td')
            var tdElTel = document.createElement('td')
            var tdElEnd = document.createElement('td')
            var tdElDtAbertura = document.createElement('td')
            var tdElCnpj = document.createElement('td')
            var tdElAtivo = document.createElement('td')

            tdElId.innerHTML = e.id
            tdElNome.innerHTML = e.nome
            tdElNome.classname = 'td-left'
            tdElTel.innerHTML = e.telefone
            tdElEnd.innerHTML = e.endereco
            tdElEnd.classname = 'td-left'
            tdElDtAbertura.innerHTML = e.dataAbertura
            tdElCnpj.innerHTML = e.cnpj
            tdElAtivo.innerHTML = e.ativo

            trEl.append(tdElId)
            trEl.append(tdElNome)
            trEl.append(tdElTel)
            trEl.append(tdElEnd)
            trEl.append(tdElDtAbertura)
            trEl.append(tdElCnpj)
            trEl.append(tdElAtivo)

            tbodyEl.append(trEl)
        });

    }
  
    
}



getData()