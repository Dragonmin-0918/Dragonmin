const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const firstOperend = document.querySelector(".calculator__operend--left");
const operator = document.querySelector(".calculator__operator");
const secondOperend = document.querySelector(".calculator__operend--right");
const calculatedResult = document.querySelector(".calculator__result");

let operatorForAdvanced = "";

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === "+") {
    result = Number(n1) + Number(n2);
  }
  if (operator === "-") {
    result = Number(n1) - Number(n2);
  }
  if (operator === "*") {
    result = Number(n1) * Number(n2);
  }
  if (operator === "/") {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      if (operatorForAdvanced === "") {
        if (firstOperend.textContent === "0") {
          firstOperend.textContent = buttonContent;
        } else {
          firstOperend.textContent += buttonContent;
        }
      } else {
        if (secondOperend.textContent === "0") {
          secondOperend.textContent = buttonContent;
        } else {
          secondOperend.textContent += buttonContent;
        }
      }
    } else if (action === "operator") {
      operator.textContent = buttonContent;
      operatorForAdvanced = buttonContent;
    } else if (action === "decimal") {
      if (operatorForAdvanced === "") {
        if (!firstOperend.textContent.includes(".")) {
          firstOperend.textContent += ".";
        }
      } else {
        if (!secondOperend.textContent.includes(".")) {
          secondOperend.textContent += ".";
        }
      }
    } else if (action === "clear") {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0";
      operatorForAdvanced = "";
    } else if (action === "calculate") {
      const result = calculate(
        firstOperend.textContent,
        operatorForAdvanced,
        secondOperend.textContent
      );
      calculatedResult.textContent = result;
      firstOperend.textContent;
      secondOperend.textContent;
      operator.textContent;
      operatorForAdvanced;
    }
  }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForBegin, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      if (
        display.textContent === "0" ||
        previousKey === "operator" ||
        previousKey === "calculate"
      ) {
        display.textContent = buttonContent;
      } else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = "number";
    }

    if (action === "operator") {
      target.classList.add("isPressed");
      if (
        firstNum &&
        operatorForBegin &&
        previousKey !== "operator" &&
        previousKey !== "calculate"
      ) {
        display.textContent = calculate(
          firstNum,
          operatorForBegin,
          display.textContent
        );
      }
      firstNum = display.textContent;
      operatorForBegin = buttonContent;
      previousKey = "operator";
    }
    if (action === "decimal") {
      if (!display.textContent.includes(".") && previousKey !== "operator") {
        display.textContent += ".";
      } else if (previousKey === "operator") {
        display.textContent = "0.";
      }
      previousKey = "decimal";
    }

    if (action === "clear") {
      display.textContent = "0";
      firstNum = undefined;
      previousNum = undefined;
      operatorForBegin = undefined;
      previousKey = "clear";
    }
    if (action === "calculate") {
      if (firstNum) {
        if (previousKey === "calculate") {
          display.textContent = calculate(
            display.textContent,
            operatorForBegin,
            previousNum
          );
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(
            firstNum,
            operatorForBegin,
            display.textContent
          );
        }
      }
      previousKey = "calculate";
    }
  }
});
