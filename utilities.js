// Function 1: Accepts two parameters and prints a welcome message.
export function functionOne(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian@ILAC College`);
  }
  
  // Function 2: Converts Celsius to Fahrenheit.
  export function functionTwo(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function 3: Calculates the factorial of a number.
  export function functionThree(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  // Function 4: Any advanced function of your choice, for example, calculating the area of a rectangle.
  export function functionFour() {
    const length = 5;
    const width = 3;
    const area = length * width;
    console.log(`The area of the rectangle is: ${area} square units`);
  }
  