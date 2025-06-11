/*****### **1️⃣ Coletando informações do usuário**

Crie um programa que faça perguntas ao usuário **utilizando `prompt`** e armazene as respostas em variáveis. As perguntas devem incluir:

- **Nome completo** (`string`)
- **Data de nascimento** (`string` no formato `dd/mm/aaaa`)
- **Endereço** (`string`)
- **CPF** (`string`)
- **Escolaridade** (`string`)
- **Possui CNH?** (`true` ou `false`, capturado com `confirm`)
- **Quantos filhos possui?** (número)
- **Cargo atual** (`string`)
- **Salário** (número, pode conter casas decimais)
- **Recebe comissão?** (`true` ou `false`, capturado com `confirm`)
- **Ano de admissão** (número) */


const nomeCompleto = prompt("Qual é o seu nome completo?");
const dataNascimento = prompt("Qual é a sua data de nascimento? (dd/mm/aaaa)");
const endereco = prompt("Qual é o seu endereço?");  
const cpf = prompt("Qual é o seu CPF?");
const escolaridade = prompt("Qual é a sua escolaridade?");
const possuiCNH = confirm("Você possui CNH?");
const filhos = Number(prompt("Quantos filhos você possui?"), 10);
const cargoAtual = prompt("Qual é o seu cargo atual?");
const salario = Number(prompt("Qual é o seu salário?"));
const recebeComissao = confirm("Você recebe comissão?");
const anoAdmissao = Number(prompt("Em que ano você foi admitido?"), 10);


//Após armazenar todas as informações, utilize typeof para imprimir no console o tipo de cada variável.

console.log( typeof nomeCompleto);
console.log( typeof dataNascimento);
console.log( typeof endereco);
console.log( typeof cpf);
console.log( typeof escolaridade);
console.log( typeof possuiCNH);
console.log( typeof filhos);
console.log( typeof cargoAtual);
console.log( typeof salario);
console.log( typeof recebeComissao);
console.log( typeof anoAdmissao);


//Por fim, exiba um resumo das informações cadastradas no console. 
//O relatório deve ser estruturado de forma organizada.

console.log("=== Resumo das Informações Cadastradas ===");
console.log(`Nome Completo: ${nomeCompleto}`);
console.log(`Data de Nascimento: ${dataNascimento}`);
console.log(`Endereço: ${endereco}`);
console.log(`CPF: ${cpf}`);
console.log(`Escolaridade: ${escolaridade}`);
console.log(`Possui CNH: ${possuiCNH ? "Sim" : "Não"}`);
console.log(`Número de Filhos: ${filhos}`);
console.log(`Cargo Atual: ${cargoAtual}`);
console.log(`Salário: R$ ${salario.toFixed(2)}`);
console.log(`Recebe Comissão: ${recebeComissao ? "Sim" : "Não"}`);
console.log(`Ano de Admissão: ${anoAdmissao}`);
