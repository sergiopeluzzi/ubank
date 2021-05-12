export default class Conta {
    constructor(numero, titular) {
        this.numero = numero
        this.titular = titular
        this.dataAbertura = Date()
        this.saldo = 0
    }

    depositar(quantia) {
        if (quantia > 0) {
            this.saldo += quantia
        }
    }

    sacar(quantia) {
        if (quantia <= this.saldo) {
            this.saldo -= quantia
        }
    }
}