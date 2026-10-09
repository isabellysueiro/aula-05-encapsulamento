import readLine from "readline-sync";
import { DoacaoCampanha } from "./src/models/DoacaoCampanha.js";

const objDoacao = new DoacaoCampanha("3º A", 20);

console.log("\n--- DADOS DA DOAÇÃO ---");
console.log("Turma:", objDoacao.getTurma());
console.log(
    "Quantidade de casacos:",
    objDoacao.getQuantidadeCasacos()
);

const novaTurma = readLine.question(
    "\nDigite a nova turma: "
);

objDoacao.setTurma(novaTurma);

const novaQuantidade = readLine.questionInt(
    "Digite a nova quantidade de casacos: "
);

objDoacao.setQuantidadeCasacos(novaQuantidade);

console.log("\n--- DADOS ATUALIZADOS ---");
console.log("Turma:", objDoacao.getTurma());
console.log(
    "Quantidade de casacos:",
    objDoacao.getQuantidadeCasacos()
);