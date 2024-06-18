function calcularIMC() {
  const altura = document.getElementById("altura").value / 100; // Convertir a metros
  const peso = document.getElementById("peso").value;
  const imc = peso / (altura * altura);
  const resultadoElement = document.getElementById("resultado");

  let clasificacion;
  if (imc < 18.5) {
    clasificacion = "Baja";
  } else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obeso";
  }

  resultadoElement.textContent = `Tu IMC es: ${imc.toFixed(2)} (${clasificacion})`;
}