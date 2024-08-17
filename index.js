// // №6
// const arr = [
//     {
//         name: 'мясо',
//         price: 2.99,
//         quantity: 2
//     },
//     {
//         name: 'голубці',
//         price: 4,
//         quantity: 4,
//     },
//     {
//         name: 'шашлик',
//         price: 7.99,
//         quantity: 6,
//     }
// ]
// const calculateTotalPrice = (allProdcuts, productName) => {
//     let result = 0;

//     for (let i of allProdcuts) {
//         const {name, price, quantity} = i
//         if (name === productName) {
//             result =+ price * quantity
//         }
//     }
//     return `ціна за кількість = ${result}`
// }
// console.log(calculateTotalPrice(arr, 'шашлик'));

// №1
// const bankAccount = {
//     ownerName: 'Denchik',
//     accountNumber: +380986493612,
//     balance: 600,
//     deposit(money) {
//         return this.balance += money
//     },
//     withdraw(money) {
//         return this.balance -= money
//     }
// }
// const qestionDep = confirm('Бажаєте поповнити рахунок?');
// let {ownerName, accountNumber, balance} = bankAccount;
// if (qestionDep === true) {
//     balance += Number(prompt('На скільки грошей бажаєте поповнити?'))
// } else {
//     const qestionWithdraw = confirm('Можливо бажаєте зняти гроші?')
//     if (qestionWithdraw === true) {
//         balance -= Number(prompt('Скільки грошей бажаєте зняти?'))
//     }
// }
// alert(`Ваш баланс становить - ${balance}`);
// console.log(ownerName, accountNumber, balance)






// №1
const user = {
    userName: 'Roby',
    nikName: 'Rob_3021',
    hobby: 'dancing',
    premium: true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const userKeys = Object.keys(user);
for (let key of userKeys) {
    console.log(`${key}: ${user[key]}`);
};

const {userName, nikName, hobby, premium, mood} = user;
console.log(userName, nikName, hobby, premium, mood)

// // №3
const employeeProductivity = {
    employee1: 24,
    employee2: 38,
    employee3: 52,
    employee4: 12
}
const findBestEmployee = (employees) => {
    const employeesValues = Object.values(employees);
    let mostProductiveNumber = employeesValues[0];
    for (let i of employeesValues) {
        if (i > mostProductiveNumber) {
            mostProductiveNumber = i
        }
    }
    const employeesArray = Object.entries(employees)
    let mostProductiveEmployee = employeesArray[0];
    for (let i of employeesArray) {
        if (i.includes(mostProductiveNumber) === true) {
            mostProductiveEmployee = i
        }
    }
    return `Найпродуктивніший співробітник - ${mostProductiveEmployee[0]}`
}
console.log(findBestEmployee(employeeProductivity));

const {employee1, employee2, employee3, employee4} = employeeProductivity;
console.log(employee1, employee2, employee3, employee4);

// // №4
const salariesOfEmployees = {
    empl1: 1,
    empl2: 2,
    empl3: 3,
    empl4: 4,
}
const countTotalSalary = (employees) => {
    const arraySalary = Object.values(employees);
    let total = 0;
    for (let i of arraySalary) {
        total += i
    }
    return total
}
console.log(countTotalSalary(salariesOfEmployees));

const {empl1,empl2,empl3,empl4} = salariesOfEmployees;
console.log(empl1,empl2,empl3,empl4);

// // №5
const array = [
    {
        arrayName: 'Vika',
        arrayNum: 86725487,
        arrayEmail: 'fweg@ieuyfg',
        arrayStatus: 'Public'
    },
    {
        arrayName: 'Sonia',
        arrayNum: 1334234465,
        arrayEmail: 'iweufygvha@ewrqdty',
        arrayStatus: 'Public'
    },
    {
        arrayName: 'illia',
        arrayNum: 32215263,
        arrayEmail: 'ofsdh@td',
        arrayStatus: 'Privat'
    }
]
const getAllPropValues = (arr, prop) => {
    let returnArray = [];
    for (let i of arr) {
        const smallArray = Object.entries(i);
        for (let a of smallArray) {
            if (a.includes(prop) === true) {
                returnArray.push(a[1])
            }
        }
    }
    return returnArray
}

console.log(getAllPropValues(array, 'arrayName'))

const {arrayName, arrayNum, arrayEmail, arrayStatus} = array[1];
console.log(arrayName, arrayNum, arrayEmail, arrayStatus)