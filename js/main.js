// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

let question = prompt('What do you want to do? Write ("add" or "sub" or "mult" or "div")');

if (question === 'add') {
    let num1 = +prompt('Write a number');
    let num2 = +prompt('Write one more number');
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please, write a number');
    }
    else {
        alert(`${num1}+${num2} = ${num1 + num2}`);
    }
}
else if (question === 'sub') {
    let num1 = +prompt('Write a number');
    let num2 = +prompt('Write one more number');
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please, write a number');
    }
    else {
        alert(`${num1}-${num2} = ${num1 - num2}`);
    }
}
else if (question === 'mult') {
    let num1 = +prompt('Write a number');
    let num2 = +prompt('Write one more number');
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please, write a number');
    }
    else {
        alert(`${num1}*${num2} = ${num1 * num2}`);
    }
}
else if (question === 'div') {
    let num1 = +prompt('Write a number');
    let num2 = +prompt('Write one more number');
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please, write a number');
    }
    else {
        alert(`${num1}/${num2} = ${num1 / num2}`);
    }
}
else {
    alert('You must write ("add" or "sub" or "mult" or "div")');
}