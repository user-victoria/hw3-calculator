// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const question = prompt('What do you want to do? Write ("add" or "sub" or "mult" or "div")');

if (question === 'add') {
    const firstNumber = +prompt('Write a number');
    const secondNumber = +prompt('Write one more number');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please, write a number');
    }
    else {
        alert(`${firstNumber}+${secondNumber} = ${firstNumber + secondNumber}`);
    }
}
else if (question === 'sub') {
    const firstNumber = +prompt('Write a number');
    const secondNumber = +prompt('Write one more number');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please, write a number');
    }
    else {
        alert(`${firstNumber}-${secondNumber} = ${firstNumber - secondNumber}`);
    }
}
else if (question === 'mult') {
    const firstNumber = +prompt('Write a number');
    const secondNumber = +prompt('Write one more number');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please, write a number');
    }
    else {
        alert(`${firstNumber}*${secondNumber} = ${firstNumber * secondNumber}`);
    }
}
else if (question === 'div') {
    const firstNumber = +prompt('Write a number');
    const secondNumber = +prompt('Write one more number');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please, write a number');
    }
    else {
        alert(`${firstNumber}/${secondNumber} = ${firstNumber / secondNumber}`);
    }
}
else {
    alert('You must write ("add" or "sub" or "mult" or "div")');
}