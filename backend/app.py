def add(numbers):
    return sum(numbers)

def subtract(numbers):
    result = numbers[0]
    for num in numbers[1:]:
        result -= num
    return result

def multiply(numbers):
    result = 1
    for num in numbers:
        result *= num
    return result

def divide(numbers):
    result = numbers[0]
    for num in numbers[1:]:
        if num == 0:
            return "Error! Division by zero."
        result /= num
    return result

def calculator():

    print("Select operation, or press = to finish you calculation:")
    print("+. Add")
    print("-. Subtract")
    print("*. Multiply")
    print("/. Divide")

    # Take user input
    choice = input("Enter choice (+, -, *, /): ")

    # Check if the user input is valid
    if choice in ('+', '-', '*', '/'):
        
        numbers = list(map(float, input("Enter numbers separated by space: ").split()))

        # Perform the selected operation
        if choice == '+':
            print(f"Result: {add(numbers)}")
        elif choice == '-':
            print(f"Result: {subtract(numbers)}")
        elif choice == '*':
            print(f"Result: {multiply(numbers)}")
        elif choice == '/':
            print(f"Result: {divide(numbers)}")
    else:
        print("Invalid input, please choose a valid operation.")

if __name__ == "__main__":
    calculator()
