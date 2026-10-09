import readLine from "readline-sync";
import { Ingresso } from "./src/models/Ingresso.js";

const objIngresso = new Ingresso("Vingadores", 10);

console.log("\n--- DADOS DO INGRESSO ---");
console.log("Filme: " + objIngresso.getFilme);
console.log("Assento: " + objIngresso.getAssento);

objIngresso.setFilme = readLine.question(
    "\nDigite o novo nome do filme: "
);

objIngresso.setAssento = readLine.questionInt(
    "Digite o novo numero do assento: "
);

console.log("\n--- DADOS ATUALIZADOS ---");
console.log("Filme: " + objIngresso.getFilme);
console.log("Assento: " + objIngresso.getAssento);