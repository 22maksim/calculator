function mathValue(num1, value, num2) {
  switch (value) {
    case '>':
      return parseInt(num1) > parseInt(num2);
    case '<':
      return parseInt(num1) < parseInt(num2);
    case '=':
      return parseInt(num1) === parseInt(num2);
    case '+':
      return parseInt(num1) + parseInt(num2);
    case '-':
      return parseInt(num1) - parseInt(num2);
    case '*':
      return parseInt(num1) * parseInt(num2);
    case '/':
      return parseInt(num1) / parseInt(num2);
    default:
      return false;
  }
}

function trueValue(value) {
  switch (value) {
    case '>':
    case '<':
    case '=':
    case '+':
    case '-':
    case '*':
    case '/':
      return true;
    default:
      return false;
  }
}

function getMathResult(expression) {
  const trueElements = expression.filter(item => parseInt(item) || trueValue(item))
  const [num1, value, num2] = trueElements;
  console.log(trueElements)
  if (trueElements.length === 3 && trueValue(value)) {
    console.log(mathValue(num1, value, num2))
    return mathValue(num1, value, num2);
  }
  console.error('Ошибка')
  return 'Ошибка';
}

getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['100ar', 'hello', 'javascript', 'help200', '+', 4]); // 'Ошибка'