# Palindrome returna un booleano
# y evalúa si frase es palindrome o no
def palindrome(frase):
    frase2 = frase
    frase= frase.replace(' ', '').lower()
    frase_invertida = frase[::-1]
    print(frase2)
    return frase == frase_invertida


# método principal del programa
def run():
    frase = input('Escribe una palabra o frase: ')
    isPalindrome = palindrome(frase)
    if isPalindrome: 
        print('Es Palindromo')
    else:
        print('NO Es Palindromo')


# Punto de entrada del programa
if __name__ == '__main__':
    run()