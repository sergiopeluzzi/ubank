import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta {
    constructor(numero, titular) {
        super(numero, titular)
        this.tipo = 'Conta Poupança'
        this.depositar(50)
    }
}