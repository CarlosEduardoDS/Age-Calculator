const inputDias = document.getElementById('digiteDias');
const inputMeses = document.getElementById('digiteMeses');
const inputAnos = document.getElementById('digiteAnos');
const botaofuncionar = document.getElementById('receber');
const erroDia = document.getElementById('erro-dias');
const erroMes = document.getElementById('erro-meses');
const erroAno = document.getElementById('erro-anos');
const spanDia = document.getElementById('quantos-dias');
const spanMes = document.getElementById('quantos-meses');
const spanAno = document.getElementById('quantos-anos');

// Data atual
const hoje = new Date();

/* Limitador de números dos inputs */
inputDias.addEventListener('input', () => {
    if (inputDias.value.length > 2) {
        inputDias.value = inputDias.value.slice(0, 2);
    }
});

inputMeses.addEventListener('input', () => {
    if (inputMeses.value.length > 2) {
        inputMeses.value = inputMeses.value.slice(0, 2);
    }
});

inputAnos.addEventListener('input', () => {
    if (inputAnos.value.length > 4) {
        inputAnos.value = inputAnos.value.slice(0, 4);
    }
});

/* Configurar erro caso seja uma data errada */
botaofuncionar.addEventListener('click', (event) => {
    event.preventDefault();

    const dia = parseInt(inputDias.value);
    const mes = parseInt(inputMeses.value);
    const ano = parseInt(inputAnos.value);

    let valido = true;

    // Validações básicas
    if (isNaN(dia) || dia < 1 || dia > 31) {
        erroDia.style.display = 'block';
        valido = false;
    } else {
        erroDia.style.display = 'none';
    }

    if (isNaN(mes) || mes < 1 || mes > 12) {
        erroMes.style.display = 'block';
        valido = false;
    } else {
        erroMes.style.display = 'none';
    }

    if (isNaN(ano) || ano < 1000 || ano > hoje.getFullYear()) {
        erroAno.style.display = 'block';
        valido = false;
    } else {
        erroAno.style.display = 'none';
    }

    // Se os valores forem válidos, realizar o cálculo
    if (valido) {
        const [dias, meses, anos] = calcularDiferenca(dia, mes, ano);
        adicionarNumero(dias, meses, anos);
    } else {
        adicionarNumero('--', '--', '--'); // Reseta os valores exibidos
    }
});

function adicionarNumero(dia, mes, ano) {
    spanDia.textContent = dia;
    spanMes.textContent = mes;
    spanAno.textContent = ano;
}

function calcularDiferenca(dia, mes, ano) {
    // Criar a data inicial
    const data = new Date(ano, mes - 1, dia);

    if (data > hoje) {
        return ['--', '--', '--']; // Caso a data seja no futuro
    }

    const umDia = 1000 * 60 * 60 * 24; // Milissegundos em um dia
    const diferencaMilissegundos = hoje - data;

    let anos = 0, meses = 0, dias = 0;
    const dataReferencia = new Date(data);

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

    return [dias, meses, anos];
}
