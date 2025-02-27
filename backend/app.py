def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    else:
        return x / y

def calculator():
    print("Select operation:")
    print("+. Add")
    print("-. Subtract")
    print("*. Multiply")
    print("/. Divide")

    # Take user input
    choice = input("Enter choice (+/-/*//): ")

    # Check if the user input is valid
    if choice in ('+', '-', '*', '/'):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '+':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '-':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '*':
            print(f"{num1} * {num2} = {multiply(num1, num2)}")
        elif choice == '/':
            print(f"{num1} / {num2} = {divide(num1, num2)}")
    else:
        print("Invalid input, please choose a valid operation.")

if __name__ == "__main__":
    calculator()
