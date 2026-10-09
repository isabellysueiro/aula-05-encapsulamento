export class Ingresso {
    private filme: string;
    private assento: number;

    constructor(filme: string, assento: number) {
        this.filme = filme;
        this.assento = assento;
    }

    public get getFilme(): string {
        return this.filme;
    }

    public get getAssento(): number {
        return this.assento;
    }

    public set setFilme(novoFilme: string) {
        if (novoFilme.trim().length === 0) {
            console.log("\nERRO: O nome do filme não pode ser vazio!");
            return;
        }

        this.filme = novoFilme;
        console.log("\nFilme alterado com sucesso!");
    }

    public set setAssento(novoAssento: number) {
        if (novoAssento <= 0 || !Number.isInteger(novoAssento)) {
            console.log("\nERRO: Digite um número de assento inteiro e positivo!");
            return;
        }

        this.assento = novoAssento;
        console.log("\nAssento atualizado com sucesso!");
    }
}