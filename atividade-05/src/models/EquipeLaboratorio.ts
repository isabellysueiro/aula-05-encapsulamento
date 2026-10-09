export class EquipeLaboratorio {
    private bancada: string;
    private numeroMembros: number;

    constructor(bancada: string, numeroMembros: number) {
        this.bancada = bancada;
        this.numeroMembros = numeroMembros;
    }

    public getBancada(): string {
        return this.bancada;
    }

    public getNumeroMembros(): number {
        return this.numeroMembros;
    }

    public setBancada(novaBancada: string): void {
        // A bancada não pode ficar vazia
        if (novaBancada.trim().length === 0) {
            console.log("\nERRO: O nome da bancada não pode ser vazio!");
            return;
        }

        this.bancada = novaBancada;
        console.log("\nBancada alterada com sucesso!");
    }

    public setNumeroMembros(novoNumero: number): void {
        // O número de membros não pode ser negativo
        if (novoNumero < 0) {
            console.log("\nERRO: O número de membros não pode ser negativo!");
            return;
        }

        this.numeroMembros = novoNumero;
        console.log("\nNúmero de membros atualizado com sucesso!");
    }
}