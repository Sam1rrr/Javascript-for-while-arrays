// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.

// let number=prompt("enter number")

// if (number%4===0) {
//     console.log(`${number} is power of 2`);

// }else{
//     console.log("false");
// }


// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin

// (example: 3 ve 5 ededleri gonderilir , 5 ustu 3 olur oda bize =>125 qayatarir.)

// let power=prompt("enter power of number")
// let number=prompt('enter number')

// console.log(number**power);

// 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)

// let num = 1000;
// let sum = 0;
// for (let i = 0; i < num; i++) {
//   if (i < 100) {
//     if (i % 11 === 0) {
//       sum += i;
//     }
//   } else if (i > 100 && i < 1000) {
//     if (i % 111 === 0) {
//       sum += i;
//     }
//   }
// }
// console.log(sum);

// -----different way
// const arr = [];
// for (let i = 0; i < 1000; i++) {
//   arr.push(i);
//   if (i) {

//   }
// }
// console.log(arr);just tried

// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.

// const arr = [4, 34, 55, 436, 45];
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2===0) {
//     if (num < arr[i]) num = arr[i];
//   }
// }
// console.log(num);

// 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.

// const arr = [7, 34, 55, 64, 3,4,436, 45];
// let maxvalue=0
// for (let i = 0; i< arr.length; i++) {
   
//     if (maxvalue<arr[i]) {
//         maxvalue=arr[i]
//     }

//     }
//         let minvalue=maxvalue

//     for (let i = 0; i < arr.length; i++) {

//         if (minvalue>arr[i] && arr[i]%2===1) {
//             minvalue=arr[i]
//             console.log(i);

//         }
//         else{

//         }
//    }
    

// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.

// const arr = [4, 34, 55,13,17, 64, 1,436, 5,3,22,45];
// let complexNum=0
// let simpleNum=0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0 || arr[i]%3===0 || arr[i]%5===0) {
//         if (arr[i]===2||arr[i]===3||arr[i]===5) {
//             console.log(`${arr[i]} -sadə ədəddir`);
//             simpleNum+=1

//         }else{
//             console.log(`${arr[i]} -mürəkkəb ədəddir`);
//             complexNum+=1

//         }
//     }
//     else{
//         console.log(`${arr[i]} -Sadə ədəddir`);
//         simpleNum+=1
//     }

// }
// console.log(`${simpleNum}: sadə ədəd `);
// console.log(`${complexNum}: mürəkkəb ədəd `);

// 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.

//     const arr = [4, 34, 55,13,17, 64, 1,436, 5,3,22,45];

//     let minvalue=arr[0]
//     let maxvalue=0
//     let valueSum=0
//     let sum=0
//     let count=0
//     let numbersOrta=0

//     for (let i = 0; i < arr.length; i++) {
//         count++
//         sum+=arr[i]
//         if (minvalue>arr[i]) {
//             minvalue=arr[i]
//         }
//         else{
//         }
//         if (maxvalue<arr[i]) {
//             maxvalue=arr[i]

//         }else{
//         }

//     }
//     console.log(`${minvalue}: min ədəd `);
//     console.log(`${maxvalue}: max ədəd `);
// valueSum=minvalue+maxvalue
// numbersOrta=sum/count
// console.log(`${valueSum}: min və max ədədlərin cəmi`);
// console.log(`${numbersOrta}: Ədədi orta`);

// if (valueSum>numbersOrta) {
//     console.log("min və max ədədlərin cəmi Ədədi ortadan böyükdür!");
// }else if(valueSum === numbersOrta){
//     console.log("min və max ədədlərin cəmi Ədədi ortaya bərabərdir!");

// }else{
//     console.log("min və max ədədlərin cəmi Ədədi ortadan kiçikdir!");

// }

// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.

// let number=prompt('enter number!')
// const arr=Array.from(number);
// let maxvalue=0

// for (let i = 0; i < arr.length; i++) {
//     if (maxvalue<arr[i]) {
//         maxvalue=arr[i]

//     }

// }
// console.log(`${maxvalue}: is biggest number in ${number}`);
