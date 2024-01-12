import inquirer from "inquirer";

function main() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "num1",
        message: "Enter the first number",
      },
      {
        type: "input",
        name: "num2",
        message: "Enter the second number",
      },
      {
        type: "list",
        name: "operation",
        message: "Enter your operation",
        choices: ["+", "-", "*", "/"],
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      //   if (operation == "+") {
      //     sum(num1, num2);
      //   } else if (operation == "-") {
      //     subtract(num1, num2);
      //   } else if (operation == "*") {
      //     multiply(num1, num2);
      //   } else if (operation == "/") {
      //     divide(num1, num2);
      //   } else {
      //     console.log("Invalid Operation");
      //   }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

  //   let num1 = 5;
  //   let num2 = 10;
  //   let operation = "*";
}

function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log("Sum", result);
}
function subtract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log("Subtraction", result);
}
function multiply(num1: number, num2: number) {
  const result = num1 * num2;
  console.log("Multiply", result);
}
function divide(num1: number, num2: number) {
  const result = num1 / num2;
  console.log("divide", result);
}

main();
