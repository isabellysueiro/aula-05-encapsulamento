import readLine from "readline-sync";
import { EquipeLaboratorio } from "./src/models/EquipeLaboratorio.js";

// Criando um objeto da equipe
const objEquipe = new EquipeLaboratorio("Bancada A", 5);

// Mostrando os dados iniciais
console.log("\n--- DADOS INICIAIS DA EQUIPE ---");
console.log("Bancada:", objEquipe.getBancada());
console.log("Número de membros:", objEquipe.getNumeroMembros());

// Pedindo os novos dados ao usuário
const novaBancada = readLine.question(
    "\nDigite o novo nome da bancada: "
);

const novoNumero = readLine.questionInt(
    "Digite o novo número de membros: "
);

// Alterando os dados
objEquipe.setBancada(novaBancada);
objEquipe.setNumeroMembros(novoNumero);

// Mostrando os dados atualizados
console.log("\n--- DADOS ATUALIZADOS DA EQUIPE ---");
console.log("Bancada:", objEquipe.getBancada());
console.log("Número de membros:", objEquipe.getNumeroMembros());