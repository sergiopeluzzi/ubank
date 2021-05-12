import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta {
    constructor(numero, titular) {
        super(numero, titular)
        this.depositar(50)
    }
}