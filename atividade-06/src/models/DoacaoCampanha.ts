export class DoacaoCampanha {
    private turma: string;
    private quantidadeCasacos: number;

    constructor(turma: string, quantidadeCasacos: number) {
        this.turma = turma;
        this.quantidadeCasacos = quantidadeCasacos;
    }

    public getTurma(): string {
        return this.turma;
    }

    public getQuantidadeCasacos(): number {
        return this.quantidadeCasacos;
    }

    public setTurma(novaTurma: string): void {
        if (novaTurma.length === 0) {
            console.log("\nERRO: A turma não pode ser vazia!");
            return;
        }

        this.turma = novaTurma;
        console.log("\nTurma alterada com sucesso!");
    }

    public setQuantidadeCasacos(novaQuantidade: number): void {
        if (novaQuantidade < 0) {
            console.log("\nERRO: A quantidade não pode ser negativa!");
            return;
        }

        this.quantidadeCasacos = novaQuantidade;
        console.log("\nQuantidade de casacos atualizada com sucesso!");
    }
}