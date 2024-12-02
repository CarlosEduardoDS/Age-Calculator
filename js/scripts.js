const inputDias = document.getElementById('digiteDias');
const inputMeses = document.getElementById('digiteMeses');
const inputAnos = document.getElementById('digiteAnos');
const botaofuncionar = document.getElementById('receber');
const erro = document.getElementsByClassName('erro');
const erroDia = document.getElementById('erro-dias')
const erroMes = document.getElementById('erro-meses')
const erroAno = document.getElementById('erro-anos')
const spanDia = document.getElementById('quantos-dias')
const spanMes = document.getElementById('quantos-meses')
const spanAno = document.getElementById('quantos-anos')
var dia = 0
var mes = 0
var ano = 0


// Data atual
const hoje = new Date();
console.log(hoje)

/* Limitador de números dos inputs */

    // Limita o número de dígitos
    inputDias.addEventListener('input', () => {
        // Verifica se o valor excede 2 dígitos
        if (inputDias.value.length > 2) {
        inputDias.value = inputDias.value.slice(0, 2); // Remove o excesso
    }
    });

    inputMeses.addEventListener('input', () => {
        if (inputMeses.value.length > 2) {
            inputMeses.value = inputMeses.value.slice(0, 2); 
    }
    });

    inputAnos.addEventListener('input', () => {
        if (inputAnos.value.length > 2) {
            inputAnos.value = inputAnos.value.slice(0, 4); 
    }
    });

/* Configurar erro caso seja uma data errada */
botaofuncionar.addEventListener('click', () => {
    dia = inputDias.value
    mes = inputMeses.value
    ano = inputAnos.value

    if (dia > 31) {
        erroDia.style.display='block'
    } else if (dia < 1) {
        erroDia.style.display='block'
    } else {
        erroDia.style.display='none'
    }

    if (mes > 12) {
        erroMes.style.display='block'
    } else if (mes < 1) {
        erroMes.style.display='block'
    } else {
        erroMes.style.display='none'
    }

    if (ano > 2024) {
        erroAno.style.display='block'
    } else if (ano < 1000) {
        erroAno.style.display='block'
    } else {
        erroAno.style.display='none'
    }


    // Valores fornecidos
dia = inputDias.value
mes = inputMeses.value
ano = inputAnos.value

// Criar a data
const data = new Date(ano, mes - 1, dia); 



// Diferença em milissegundos
const diferencaMilissegundos = hoje - data;

// Calcular anos, meses e dias
const umDia = 1000 * 60 * 60 * 24; // Milissegundos em um dia
const diasTotais = Math.floor(diferencaMilissegundos / umDia);

const dataReferencia = new Date(data);
let anos = 0, meses = 0, dias = 0;

// Adicionar anos completos
while (new Date(dataReferencia).setFullYear(dataReferencia.getFullYear() + 1) <= hoje) {
    dataReferencia.setFullYear(dataReferencia.getFullYear() + 1);
    anos++;
}

// Adicionar meses completos
while (new Date(dataReferencia).setMonth(dataReferencia.getMonth() + 1) <= hoje) {
    dataReferencia.setMonth(dataReferencia.getMonth() + 1);
    meses++;
}

// Dias restantes
dias = Math.floor((hoje - dataReferencia) / umDia);

console.log(`Passaram-se ${anos} anos, ${meses} meses e ${dias} dias.`);

adicionarNumero(dias, meses, anos)

   
});

function adicionarNumero(dia, mes, ano) {
    spanDia.textContent = dia
    spanMes.textContent = mes
    spanAno.textContent = ano
};



