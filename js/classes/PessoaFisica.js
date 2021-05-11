import Pessoa from "./Pessoa.js";

export default class PessoaFisica extends Pessoa {
    constructor(nome, tel, end, dtNasc, sexo, cpf) {
        super(nome, tel, end)
        this.dataNascimento = dtNasc
        this.sexo = sexo
        this.cpf = cpf
    }
}