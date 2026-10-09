import readLine from "readline-sync";
import { RelatorioCenso } from "./src/models/RelatorioCenso.js";

// Criando o objeto com os valores iniciais
const objRelatorio = new RelatorioCenso(123, 500);

// Exibindo os valores iniciais
console.log("\n===== RELATÓRIO DO CENSO =====");

console.log("Código da instituição:", objRelatorio.getCodigoInstituicao);
console.log("Total de alunos:", objRelatorio.getTotalAlunos);

// Lendo os novos valores
const novoCodigo = readLine.questionInt(
    "\nDigite o novo código da instituição: "
);

const novoTotal = readLine.questionInt(
    "Digite o novo total de alunos: "
);

// Alterando os valores
objRelatorio.setCodigoInstituicao = novoCodigo;
objRelatorio.setTotalAlunos = novoTotal;

// Exibindo os valores atualizados
console.log("\n===== RELATÓRIO ATUALIZADO =====");

console.log("Código da instituição:", objRelatorio.getCodigoInstituicao);
console.log("Total de alunos:", objRelatorio.getTotalAlunos);