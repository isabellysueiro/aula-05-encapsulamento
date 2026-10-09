export class RelatorioCenso {
    private codigoInstituicao: number;
    private totalAlunos: number;

    constructor(codigoInstituicao: number, totalAlunos: number) {
        this.codigoInstituicao = codigoInstituicao;
        this.totalAlunos = totalAlunos;
    }

    public get getCodigoInstituicao(): number {
        return this.codigoInstituicao;
    }

    public get getTotalAlunos(): number {
        return this.totalAlunos;
    }

    public set setCodigoInstituicao(novoCodigo: number) {
        if (novoCodigo <= 0) {
            console.log("\nERRO: O código deve ser maior que zero!");
            return;
        }

        this.codigoInstituicao = novoCodigo;
        console.log("\nCódigo da instituição alterado com sucesso!");
    }

    public set setTotalAlunos(novoTotal: number) {
        if (novoTotal < 0) {
            console.log("\nERRO: O total de alunos não pode ser negativo!");
            return;
        }

        this.totalAlunos = novoTotal;
        console.log("\nTotal de alunos atualizado com sucesso!");
    }
}