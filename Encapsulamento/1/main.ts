abstract class ContaBancaria {
    protected _id: string;
    protected _saldo: number;

    constructor(saldo: number, id: string) {
        this._saldo = saldo;
        this._id = id;
    }

    sacar(valor: number): void {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        } else {
            console.log("Não foi possível realizar a operação.");
        }
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }
}

class ContaPJ extends ContaBancaria {
    private _cnpj: string;

    constructor(saldo: number, id: string, cnpj: string) {
        super(saldo, id);
        this._cnpj = cnpj;
    }
}

class ContaPF extends ContaBancaria {
    private _cpf: string;

    constructor(saldo: number, id: string, cpf: string) {
        super(saldo, id);
        this._cpf = cpf;
    }
}

const contaPj = new ContaPJ(1000, "123", "123456789");
const contaPf = new ContaPF(1000, "123", "123456789");

contaPj.sacar(500);
contaPf.sacar(500);

contaPj.depositar(250);
contaPf.depositar(250);