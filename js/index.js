const array = [];
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<h2>Array:</h2>';


/* Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням. Далі, видалити з масива елементи з 2-го по 4-й елемент. По мірі змін масива - виводити його вміст на сторінку.*/

let lengthOfArray;

do {
    lengthOfArray = parseInt(prompt('Please, specify length of any array', 8));
} while(isNaN(lengthOfArray) || lengthOfArray <0);

let numberOfArray;

for (let i = 0; i <lengthOfArray; i++) {
    numberOfArray = parseInt(prompt('Specify any number',-25));
    array.push(numberOfArray);
};
contentDiv.innerHTML += `<p>It's array, that you created: ${array.join(', ')}</p>`;
let sortedArray = array.sort((a, b) => a - b);
contentDiv.innerHTML += `<p>It's array, that you sorted: ${sortedArray.join(', ')}</p>`;

let deletedArray = sortedArray.slice(2,5).join(', ');
contentDiv.innerHTML += `<p> It's array, that you elobarated: ${deletedArray}</p>`;


/* Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] */
const contentDiv2 = document.getElementById('content2');
contentDiv2.innerHTML = '<h2>Array:</h2>';
const array2 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
contentDiv2.innerHTML += `<p> ${array2.join(', ')}</p>`;
let multiplyPositivElem = 1;
let summaOfPositiveElem = 0;
let quantityOfPositiveElem = 0;
for (let i = 0; i<=array2.length; i++) {
    if (array2[i]  > 0) {
        summaOfPositiveElem +=array2[i];
        quantityOfPositiveElem +=1;
        multiplyPositivElem *=array2[i];
    } 
}
contentDiv2.innerHTML += `<p>1.task: Cумa -${summaOfPositiveElem} і кількість -${quantityOfPositiveElem} додатних (положительных) елементів.</p>`;

let copyArray2 = array2.slice();
let firstMinElem = copyArray2.sort((a, b) => a-b)[0];
let maxElem = copyArray2.sort((a, b) => a-b)[array2.length-1];


contentDiv2.innerHTML += `<p>2.task:  мінімальний (найменший) ${firstMinElem} елемент масива і його індекс -  ${array2.indexOf(firstMinElem)} </p>`;

contentDiv2.innerHTML += `<p>3.task:  максимальний  ${maxElem} елемент масива і його індекс -  ${array2.indexOf(maxElem)} </p>`;


let negativeCount = array2.filter(num => num < 0).length;

contentDiv2.innerHTML += `<p>4.task:  кількість -${negativeCount} від’ємних  елементів.</p>`;

let oddPositiveElem = array2.filter(num => num > 0 && num % 2 !==0).length;

contentDiv2.innerHTML += `<p>5.task:  кількість непарних додатних  елементів - ${oddPositiveElem}.</p>`;

let evenPositiveElem = array2.filter(num => num > 0 && num % 2 ===0);
contentDiv2.innerHTML += `<p>6.task:  кількість парних додатних  елементів - ${evenPositiveElem.length}.</p>`;

let sumEvenPositiveElem = evenPositiveElem.reduce((accumulator, current) => accumulator+current,0);

contentDiv2.innerHTML += `<p>7.task:  сумма парних додатних  елементів - ${sumEvenPositiveElem}.</p>`;

let sumOddPositiveElem  = array2.filter(num => num > 0 && num % 2 !==0).reduce((accumulator, current)=> accumulator+current, 0);
contentDiv2.innerHTML += `<p>8.task:  сумма непарних додатних  елементів - ${sumOddPositiveElem}.</p>`;

contentDiv2.innerHTML += `<p>9.task:  добуток всіх додатних елементів - ${multiplyPositivElem}.</p>`;


    
const arrayEquel0 =  array2.map(el => el === maxElem ? el : 0);

contentDiv2.innerHTML += `<p>10.task:  добуток всіх додатних елементів : ${arrayEquel0}.</p>`;


/* 3) Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів */
const contentDiv3 = document.getElementById('content3');
contentDiv3.innerHTML = '<h2>Array of Objects:</h2>';

let users = [
    {index:0, isActive:true, balance:2226.60, name:"Eugenia Sawyer", gender:"female", phone:"+1 (840) 583-3207", address:"949 John Street, Rose, Puerto Rico, 1857"}, 
    {index:1, isActive:true, balance:2613.77, name:"Pauline Gallegos", gender:"female", phone:"+1 (985) 593-3328", address:"328 Greenpoint Avenue, Torboy, North Dakota, 6857"}, 
    {index:2, isActive:false, balance:3976.41, name:"Middleton Chaney", gender:"male", phone:"+1 (995) 591-2478", address:"807 Fleet Walk, Brutus, Arkansas, 9783"}, 
    {index:3, isActive:true, balance:1934.58, name:"Burns Poole", gender:"male", phone:"+1 (885) 559-3422", address:"730 Seba Avenue, Osage, Alabama, 6290"}, 
    {index:4, isActive:true, balance:3261.65, name:"Mcfadden Horne", gender:"male", phone:"+1 (942) 565-3988", address:"120 Scholes Street, Kirk, Michigan, 1018"},
    {index:5, isActive:false, balance:1790.56, name:"Suzette Lewis", gender:"female", phone:"+1 (837) 586-3283", address:"314 Dunne Place, Bawcomville, Guam, 9053"},
]

let arrayOftelefonNumerMore2000 = [];
let arrayObjectOftelefonNumerMore2000 = [];

  for (let i=0; i<users.length; i++) {    

    if (users[i].balance > 2000) {
         arrayObjectOftelefonNumerMore2000.push(`{phone: ${users[i].phone}}`);
         arrayOftelefonNumerMore2000.push(users[i].phone);
             
  }

}

console.log(arrayObjectOftelefonNumerMore2000);
console.log(arrayOftelefonNumerMore2000)