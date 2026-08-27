const form = document.getElementById("imc-form");
const erroEl = document.getElementById("erro");
const resultadoEl = document.getElementById("resultado");

const CATEGORIAS = [
  { id: "abaixo", max: 18.5, nome: "Abaixo do peso", texto: "Seu IMC ficou abaixo da faixa mais usada como referencia para adultos." },
  { id: "normal", max: 25, nome: "Peso adequado", texto: "Seu IMC esta na faixa considerada adequada para a maioria dos adultos." },
  { id: "sobrepeso", max: 30, nome: "Sobrepeso", texto: "Seu IMC ficou um pouco acima da faixa de referencia." },
  { id: "ob1", max: 35, nome: "Obesidade grau I", texto: "Seu IMC esta na faixa de obesidade grau I. Vale conversar com um profissional de saude." },
  { id: "ob2", max: 40, nome: "Obesidade grau II", texto: "Seu IMC esta na faixa de obesidade grau II. Um acompanhamento profissional ajuda bastante." },
  { id: "ob3", max: Infinity, nome: "Obesidade grau III", texto: "Seu IMC esta na faixa mais alta da tabela. Procure orientacao medica." }
];

function mostrarErro(msg) {
  erroEl.hidden = false;
  erroEl.textContent = msg;
  resultadoEl.hidden = true;
}

function normalizarAltura(valor) {
  if (valor > 3) return valor / 100;
  return valor;
}

function classificar(imc) {
  return CATEGORIAS.find((item) => imc < item.max);
}

function posicaoEscala(imc) {
  const min = 16;
  const max = 40;
  const limitado = Math.min(max, Math.max(min, imc));
  return ((limitado - min) / (max - min)) * 100;
}

function faixaPeso(altura) {
  const min = 18.5 * altura * altura;
  const max = 24.9 * altura * altura;
  return `${min.toFixed(1)} a ${max.toFixed(1)} kg`;
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
  const alturaBruta = parseFloat(document.getElementById("altura").value.replace(",", "."));

  if (!peso || !alturaBruta || peso <= 0 || alturaBruta <= 0) {
    mostrarErro("Informe um peso e uma altura validos.");
    return;
  }

  const altura = normalizarAltura(alturaBruta);

  if (altura < 0.5 || altura > 2.5) {
    mostrarErro("A altura parece incorreta. Use metros (1.70) ou centimetros (170).");
    return;
  }

  if (peso < 10 || peso > 400) {
    mostrarErro("Confira o peso informado.");
    return;
  }

  const imc = peso / (altura * altura);
  const categoria = classificar(imc);

  erroEl.hidden = true;
  resultadoEl.hidden = false;

  document.getElementById("imc-valor").textContent = imc.toFixed(1).replace(".", ",");
  const badge = document.getElementById("imc-badge");
  badge.textContent = categoria.nome;
  badge.className = `badge ${categoria.id}`;

  document.getElementById("imc-texto").textContent =
    `${categoria.texto} Lembre-se: o IMC e so uma referencia e nao substitui uma avaliacao profissional.`;
  document.getElementById("stat-peso").textContent = `${peso.toFixed(1).replace(".", ",")} kg`;
  document.getElementById("stat-altura").textContent = `${altura.toFixed(2).replace(".", ",")} m`;
  document.getElementById("stat-faixa").textContent = faixaPeso(altura);
  document.getElementById("scale-marker").style.left = `${posicaoEscala(imc)}%`;

  document.querySelectorAll("tbody tr").forEach((linha) => {
    linha.classList.toggle("active", linha.dataset.cat === categoria.id);
  });
});
