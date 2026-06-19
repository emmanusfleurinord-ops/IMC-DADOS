# Função para calcular o IMC
def calcular_imc(peso: float, altura: float) -> None:
    # Fórmula do IMC: peso dividido pela altura ao quadrado
    imc = peso / (altura ** 2)

    # Classificação de acordo com o valor do IMC
    if imc < 18.5:
        classificacao = "Abaixo do peso"
    elif imc < 25:
        classificacao = "Peso normal"
    elif imc < 30:
        classificacao = "Sobrepeso"
    elif imc < 35:
        classificacao = "Obesidade grau I"
    elif imc < 40:
        classificacao = "Obesidade grau II"
    else:
        classificacao = "Obesidade grau III"

    # Mostra resultado direto no terminal
    print(f"IMC: {imc:.2f} - {classificacao}")

# Programa principal
if __name__ == "__main__":
    # Entrada de dados pelo usuário
    peso = float(input("Digite seu peso (kg): "))
    altura = float(input("Digite sua altura (m): "))

    # Chama a função
    calcular_imc(peso, altura)
