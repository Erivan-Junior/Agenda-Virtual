export default class Contato {
    constructor(private _nome: string, private _numero: string, private _descricao: string){}

    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }
    public get numero(): string {
        return this._numero;
    }
    public set numero(value: string) {
        this._numero = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    } 
}