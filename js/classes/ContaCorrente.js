import Conta from "./Conta.js";

export default class ContaCorrente extends Conta {
    constructor(numero, titular) {
        super(numero, titular)
        this.taxa = 0.01
    }
}