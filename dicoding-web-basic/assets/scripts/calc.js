console.log("Bismillah, calculator coy");

const calculator = {
  displayNum: "0",
  operator: null,
  firstNum: null,
  waitSecNum: false,
};

function updateDisplay() {
  document.querySelector("#displayNum").innerText = calculator.displayNum;
}

function clearCalculator() {
  calculator.displayNum = "0";
  calculator.operator = null;
  calculator.firstNum = null;
  calculator.waitSecNum = false;
}

function inputNum(digit) {
  if (calculator.waitSecNum && calculator.firstNum === calculator.displayNum) {
    calculator.displayNum = digit;
  } else {
    if (calculator.displayNum === "0") {
      calculator.displayNum = digit;
    } else {
      calculator.displayNum += digit;
    }
  }
}

function inverse() {
  if (calculator.displayNum === "0") {
    return;
  }
  calculator.displayNum = calculator.displayNum * -1;
}

function handleOperator(operator) {
  if (!calculator.waitSecNum) {
    calculator.operator = operator;
    calculator.waitSecNum = true;
    calculator.firstNum = calculator.displayNum;
  } else {
    alert("Sekali aja coy, clear dulu atuh !!");
  }
}

function performCalculation() {
  if (calculator.firstNum == null || calculator.operator == null) {
    alert("Belum dipakai operatornya cuy!!");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result = parseInt(calculator.firstNum) + parseInt(calculator.displayNum);
  } else if (calculator.operator === "-") {
    result = parseInt(calculator.firstNum) - parseInt(calculator.displayNum);
  } else if (calculator.operator === "*") {
    result = parseInt(calculator.firstNum) * parseInt(calculator.displayNum);
  } else if (calculator.operator === "/") {
    result = parseInt(calculator.firstNum) / parseInt(calculator.displayNum);
  }

  const history = {
    firstNum: calculator.firstNum,
    secondNum: calculator.displayNum,
    operator: calculator.operator,
    result: result,
  };

  putHistory(history);
  calculator.displayNum = result;
  renderHistory();
}

// assign event pada semua button
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    // get object
    const target = event.target;

    // clear
    // class list untuk mencari kata 'clear' dalam class yang ada
    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    // inverse or negative button
    if (target.classList.contains("inverse")) {
      inverse();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      updateDisplay();
      return;
    }

    inputNum(target.innerText);
    updateDisplay();
  });
}
