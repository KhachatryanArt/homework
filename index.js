//2.16
// let petrol = 0;
// let fullPetrol = 0;
// let fullMill = 0;
// let bool = true;
// while(bool){
//     petrol = +prompt("Enter petrol consumption (-1 if entry is complete):");

//     if(petrol != -1){
//         let mill = +prompt("Enter the distance traveled:");
//         let received = mill/petrol;
//         fullPetrol += petrol;
//         fullMill += mill;
//         var averageConsumption = fullMill/fullPetrol

//         document.write("Enter petrol consumption (-1 if entry is complete):" + petrol + "<br>");
//         document.write("Enter the distance traveled:" + mill + "<br>");
//         document.write("Miles/gallon received for this capacity:" + received + "<br><br><br>")
//     }else{
//         bool = false;
//         document.writeln("Average fuel consumption: " +  averageConsumption)

//     }
// }

//2.17

// let balance = 0;
// let bool = true;
// while(bool){
//     let accountNumber = +prompt("Enter the account number (~1 if entry is complete):")
//     if(accountNumber != -1){
//         var openingBalance = +prompt("Enter opening balance:")
//         var expenses = +prompt("Enter the amount of expenses")
//         var income = +prompt("Enter the income amount:")
//         var creditLimit = +prompt("Enter credit limit:")
//         document.write("Enter the account number (~1 if entry is complete):" + accountNumber + "<br>")
//         document.write("Enter opening balance:" + openingBalance + "<br>")
//         document.write("Enter the amount of expenses" + expenses + "<br>")
//         document.write("Enter the income amount:" + income + "<br>")
//         document.write("Enter credit limit:" + creditLimit + "<br><br>")
//     }else{
//         bool = false
//     }
//    balance = openingBalance + expenses - income;
//    if (balance > creditLimit){
//        document.write("Account number: " + accountNumber + "<br>")
//        document.write("Credit limit: " + creditLimit + "<br>")
//        document.write("Balance: " + balance + "<br>")
//        document.write("Credit limit exceeded " + "<br><br><")
//    }
// }

//2.18
// let bool = true;
// let percent = 9;
// let salary = 200;
// while(bool){
//     let sale = +prompt("Enter the sales volume in dollars {-1 if the plant is completed): ");
//     if(sale != -1){
//         salary += sale*percent/100;
//         document.write("Enter the sales volume in dollars {-1 if the plant is completed):" + sale + "<br>");
//         document.write("Earnings:" + salary + "<br><br>")
//     }else{
//         bool = false
//     }
// }

//2.19

// let bool = true;
// let percent = 1.5;
// let dayTime = 40;
// let pay = 0;
// while(bool){
//     let workTime = +prompt("Enter the number of working hours (-1 if the labor is finished): ");
//     if(workTime != -1){
//         let timePay = +prompt("Enter employee hourly rate {$00.00):")
//         if(workTime <= dayTime){
//             pay = workTime*timePay;
//         }else{
//             pay = (workTime - dayTime)*percent*timePay + dayTime*timePay
//         }

//         document.write("Enter the number of working hours (-1 if the labor is finished): " + workTime + "<br>");
//         document.write("Enter employee hourly rate {$00.00):  " + timePay + "<br>");
//         document.write("Earnings: $" + pay + "<br><br>")
//     }else{
//         bool = false
//     }
// }

//2.20

// let counter = 0;
// let largest = 0;

// while(counter < 10){
//     var userName = prompt("Enter the name: ");
//     var number = +prompt("Enter the sales count");

//     if(number > largest){
//         largest = number
//     }

//     counter++
// }
// document.write("The winner name: " + userName + "<br>");
// document.write("The winner sales: " + number + "<br><br>");

//2.21
// let p =  "& nbsp" + "&nbsp" + "&nbsp"
// for(let i = 0; i <= 5; i++){

//     if(i == 0 ){
//         document.write("N" + p + "10*N" + p + "100*N" + p + "1000*N" + "<br><br>")
//     }else{
//         document.write(i + "&nbsp" + p +  i*10 + p + p + i*100 + p + p + p + i*1000 + "<br>")
//     }
// }

// 2.22

// let counter = 0;
// let largest = 0;
// let second = 0;

// while(counter < 10){

//     var number = +prompt("Number");

//     if(number > largest){
//             largest = number
//             if(number > second){
//                 number = second
//                 second = largest
//                 largest = number
//             }
//         }

//     counter++
// }
// document.write("The 1: " + second  + "<br><br>");
// document.write("The 2: " + largest );

//2.28
// let x = "*";
// let y = " "
// let number = +prompt("Number:")
// for(let i = 1; i <= number; i++ ){
//     for(let j = 1; j <= number; j++){
//         if(i == 1 || i == number || j == 1 || j == number){
//             document.write("x")
//         }else{
//             document.write("_")
//         }

//     }
//     document.write("<br>")
// }

//2.29

// let number = +prompt("Number:")//25412

// num = number%10
// num1 = ((number - num)/10)%10
// num2 = Math.floor(((number - num1*10 + num)/100)%10)
// num3 = Math.floor(((number - num2*100 + num1*10 + num)/1000)%10)
// num4 = Math.floor(((number - num3*1000 + num2*100 +num1*10 +num )/10000)%10)
// if (num ==num4 && num1 == num3 ){
//     document.write(number + " number is a polindrom")
// }else{
//     document.write(number + " number is not a polindrom")

// }
// console.log(num)
// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)

//2.30

//////
// 2.31

// let x = "x";
// let y = "_";
// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
//       document.write(x);
//     } else {
//       document.write(y);
//     }
//   }
//   document.write("<br>");
// }

// 2.33

// let pi = 3.14159;
// let r = +prompt("Enter the circle r։ ");

// let diametr = 2 * r;
// let circumference = 2 * pi * r;
// let area = pi * r ** 2;

// document.write("r: " + r + "<br>");
// document.write("Diametr: " + diametr + "<br>");
// document.write("circumference: " + circumference + "<br>");
// document.write("Area: " + area);

//2.35

// let a = +prompt("Enter the a ։ ");
// let b = +prompt("Enter the b ։ ");
// let c = +prompt("Enter the c ։ ");

// if (a + b > c && a + c > b && c + b > a) {
//     document.write("yes");
// }else{
//     document.write("no");
// }

//2.36

// let a = +prompt("Enter the a ։ ");
// let b = +prompt("Enter the b ։ ");
// let c = +prompt("Enter the c ։ ");

// if (
//   a ** 2 + b ** 2 == c ** 2 ||
//   a ** 2 + c ** 2 == b ** 2 ||
//   c ** 2 + b ** 2 == a ** 2
// ) {
//   document.write("yes");
// } else {
//   document.write("no");
// }

// 2.38

//////

// 2.40

// let count = 0;
// let number = +prompt("Enter the count: ");
// for (let i = 0; i < number; i++) {
//   let num = +prompt("Enter the number: ");
//   count += num;
// }
// document.write(count);

// 2.43
// let number = +prompt("Enter the count: ");
// let num = +prompt("Enter the number: ");
// let min = num;

// for (let i = 1; i < number; i++) {
//   let num = +prompt("Enter the number: ");
//   if (num < min) {
//     min = num;
//   }
//   if (i == number - 1) {
//     document.write("min = " + min);
//   }
// }

// 2.44
// let sum = 1;
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 1) {
//     sum = sum * i;
//   }
// }
// document.write("Product of odd integers = " + sum)

// 2.46

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if (j <= i) {
//       document.write("x");
//     }
//   }
//   document.write("<br>");

// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 10; j >= 1; j--) {
//     if (j >= i) {
//       document.write("x");
//     }
//   }
//   document.write("<br>");

// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if (i <= j) {
//       document.write("x");
//     }else{
//       document.write("_");
//     }
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if (i < j) {
//       document.write("_");
//     }else{
//       document.write("x");
//     }
//   }
//   document.write("<br>");
// }

//2.48

// for (let i = 0; i < 5; i++) {
//   let num = +prompt("Enter the number: ");
//   for (let j = 0; j < num; j++) {
//     document.write("x");
//   }
//   document.write("<br>");
// }

// 2.55
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//   for (let j = 1; j <= 500; j++) {
//     for (let k = 1; k <= 500; k++) {
//       if (
//         i ** 2 + j ** 2 == k ** 2 ||
//         i ** 2 + k ** 2 == j ** 2 ||
//         k ** 2 + j ** 2 == i ** 2
//       ) {
//         if (i + j + k > sum) {
//           document.write(i + ",");
//           document.write(j + ",");
//           document.write(k + ",");
//           document.write("<br>");
//           sum = j + i + k;
//         }
//       }
//     }
//   }
// }

// 2.56
// const number = +prompt("Enter the number :");
// switch (number) {
//   case 1: {
//     const salary = 1000;
//     document.write("The worker's 1 salary is: " + salary);
//     break;
//   }
//   case 2: {
//     const time = +prompt("Enter the worktime:");
//     const timeSalary = 30;
//     if (time <= 40) {
//       const salary = time * timeSalary;
//       document.write("The worker's 2 salary is: " + salary);
//     } else {
//       const salary = (time - 40) * timeSalary * 1.5 + 40 * 30;
//       document.write("The worker's 2 salary is: " + salary);
//     }
//     break;
//   }
//   case 3: {
//     const sales = +prompt("Enter the sales:");
//     const salary = 250 + (sales * 5.7) / 100;
//     document.write("The worker's 3 salary is: " + salary);
//     break;
//   }
//   case 4:
//     {
//       const product = +prompt("Quantity of output produced by them:");
//       const unit = 200;
//       const salary = product * unit;
//       document.write("The workers's 4 salary is:" + salary);
//     }
//     break;
// }

// 2.57
// let y;
// let x;
// let a;
// let b;
// let g;
// if ((!(x < 5) && !(y >= 7)) == !(x < 5 || y >= 7)) {
//   document.write("yes");
// } else {
//   document.write("no");
// }

// if (!(a == b) || !(g != 5) == !(a == b && g != 5)) {
//   document.write("yes");
// } else {
//   document.write("no");
// }

// if (!(x <= 8 && y > 4) == !(x <= 8) || !(y > 4)) {
//   document.write("yes");
// } else {
//   document.write("no");
// }

// if (!(x > 4 || y <= 6) == !(x > 4) && !(y <= 6)) {
//   document.write("yes");
// } else {
//   document.write("no");
// }

// 2.58

// let n = 9;
// let num = n - 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= num; j++) {
//     document.write("_");
//   }
//   for (var j = 1; j <= i * 2 - 1; j++) {
//     document.write("x");
//   }
//   document.write("<br>");
//   num--;
// }

// num = 1;

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j <= num; j++) {
//     document.write("_");
//   }
//   for (var j = 1; j <= 2 * (n - i) - 1; j++) {
//     document.write("x");
//   }
//   document.write("<br>");
//   num++;
// }

// 3.20

// function multiple(number_1, number_2) {
//   if (number_1 % number_2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let number_1 = +prompt("Enter the first number");
// let number_2 = +prompt("Enter the second number");

// document.write(multiple(number_1, number_2));

// 3.21

// function multiple(number_1) {
//   if (number_1 % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let number_1 = +prompt("Enter the number");

// document.write(multiple(number_1));

// 3.22

// function box(number) {
//   for (let i = 0; i < number; i++) {
//     for (let j = 0; j < number; j++) {
//       document.write("x");
//     }
//     document.write("<br>");
//   }
// }

// let number_1 = +prompt("Enter the box side");

// document.write(box(number_1));

// 3.26

// function time(hour, minute, second) {
//   if (hour > 24 || minute > 60 || second > 60) {
//     document.write("Enter the current time");
//   } else {
//     if (hour > 12) {
//       hour = hour - 12;
//     }
//     var sum = hour * 60 * 60 + minute * 60 + second;
//   }
//   return sum;
// }
// let number_1 = +prompt("Enter the time");
// let number_2 = +prompt("Enter the minute");
// let number_3 = +prompt("Enter the second");

// document.write(time(number_1,number_2,number_3))

// 3.27

// function celsius(number) {
//   return (number * 9) / 5 + 32;
// }
// let number_1 = +prompt("Enter the number");

// document.write(celsius(number_1))

// function farenhait(number) {
//   return ((number - 32) * 5) / 9;
// }
// let number_1 = +prompt("Enter the number");

// document.write(farenhait(number_1));

// function table() {
//   for (let i = 0; i <= 100; i++) {
//     let far = (i * 9) / 5 + 32;
//     document.write(i + " -> " + far + "<br>");
//   }
//   document.write("<br><br><br>");

//   for (let i = 32; i <= 212; i++) {
//     let far = ((i - 32) * 5) / 9;
//     document.write(i + " -> " + far + "<br>");
//   }
// }
// table();

// 3.30

// function numbers(number) {
//   if (
//     (number % 2 == 0 ||
//       number % 3 == 0 ||
//       number % 5 == 0 ||
//       number % 11 == 0 ||
//       number % 7 == 0) &&
//     number != 2 &&
//     number != 3 &&
//     number != 5 &&
//     number != 7
//   ) {
//     // document.write(number + "- no");
//   } else {
//     document.write(number + "- yes" + "<br>");
//   }
// }

// // let number_1 = +prompt("Enter the number");

// // numbers(number_1);

// for (let i = 0; i <= 10000; i++) {
//   numbers(i);
// }

// 3.31

// let number = +prompt("Enter the number");

// function revers(num){
//   let reversNum = 0
//   while(num > 0 ){
//     reversNum = reversNum*10 + num%10;
//     num = Math.floor(num/10);
//   }
//   return reversNum
// }

// document.write(revers(number))

// // 3.35

// let num1 = Math.floor(Math.random() * 11);
// let num2 = Math.floor(Math.random() * 11);

// function calc(num1, num2) {
//   let number = +prompt("how to : " + num1 + " * " + num2);
//   if (number == num1 * num2 && number != 01) {
//     alert("Win");
//     calc(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));
//   } else {
//     if (number != 01) {
//       alert("lose");
//       calc(num1, num2);
//     }
//   }
// }

// calc(num1, num2);

//3.37

// let num1 = Math.floor(Math.random() * 11);
// let num2 = Math.floor(Math.random() * 11);
// var count = 0;
// var trueV = 0;
// let limit = 0;

// function calc(num1, num2) {
//   while (count < 10) {
//     let number = +prompt("how to : " + num1 + " * " + num2);
//     if (number == num1 * num2 && number != 01 && count < 10) {
//       alert("Win");
//       count += 1;
//       trueV += 1;
//       calc(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));
//     } else {
//       if (number != 01 && count < 10) {
//         alert("lose");
//         count += 1;
//         calc(num1, num2);
//       }
//     }
//   }
//   if (trueV < 8 && limit == 0) {
//     document.write("Please ask for urgent help from your teacher" + "<br>");
//     limit++;
//   }
// }

// calc(num1, num2);
// //3.42

// hanoi = function (s, d, e, n) {
//   if (n <= 0) {
//     return;
//   }
//   hanoi(s, e, d, n - 1);
//   document.write(`Move Disk-${n} FROM ${s} => ${d}` + "<br>");
//   hanoi(e, d, s, n - 1);
// };

// hanoi("A", "B", "C", 4);
