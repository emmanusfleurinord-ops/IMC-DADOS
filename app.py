print("=== Projeto IMC ===")
peso = float(input("Digite o peso (kg): "))
altura = float(input("Digite a altura (m): "))

if peso <= 0 or altura <= 0:
    print("Digite valores válidos.")
else:
    imc = peso / (altura ** 2)

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

    print(f"IMC: {imc:.2f} - {classificacao}")
