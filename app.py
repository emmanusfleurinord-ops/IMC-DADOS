def classificar_imc(imc: float) -> str:
    if imc < 18.5:
        return "Abaixo do peso"
    if imc < 25:
        return "Peso normal"
    if imc < 30:
        return "Sobrepeso"
    if imc < 35:
        return "Obesidade grau I"
    if imc < 40:
        return "Obesidade grau II"
    return "Obesidade grau III"


def normalizar_altura(altura: float) -> float:
    return altura / 100 if altura > 3 else altura


def calcular_imc(peso: float, altura: float) -> None:
    altura = normalizar_altura(altura)
    imc = peso / (altura ** 2)
    classificacao = classificar_imc(imc)
    minimo = 18.5 * altura * altura
    maximo = 24.9 * altura * altura

    print(f"IMC: {imc:.2f} - {classificacao}")
    print(f"Faixa de peso de referencia: {minimo:.1f} a {maximo:.1f} kg")


if __name__ == "__main__":
    peso = float(input("Digite seu peso (kg): ").replace(",", "."))
    altura = float(input("Digite sua altura (m ou cm): ").replace(",", "."))
    calcular_imc(peso, altura)
