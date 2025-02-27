def calculator():
    print("Welcome to the advanced calculator!")
    print("You can perform multiple operations in one go.")
    print("For example: 1 + 2 - 3 * 4 / 2")
    print("Enter your calculation below:")

    # Take user input for the calculation
    user_input = input("Enter calculation: ")

    try:
        # Evaluate the mathematical expression entered by the user
        result = eval(user_input)
        print(f"Result: {result}")
    except Exception as e:
        print(f"Error: {e}. Please enter a valid arithmetic expression.")

if __name__ == "__main__":
    calculator()
