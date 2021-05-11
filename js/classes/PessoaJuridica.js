import Pessoa from "./Pessoa.js";

export default class PessoaJuridica extends Pessoa {
    constructor(nome, tel, end, dtAbertura, cnpj) {
        super(nome, tel, end)
        this.dataAbertura = dtAbertura
        this.cnpj = cnpj
    }
}