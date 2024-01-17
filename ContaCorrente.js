import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
        {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor) {
        if (valor > this._saldo) return;
        this._saldo -= valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}