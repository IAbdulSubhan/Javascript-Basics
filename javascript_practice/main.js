// // alert("Hello world");

// console.log("See output in console");


// // variables and concept of concatination

// let age;
// age=30;

// console.log("this from let output\n");
// console.log("my age = "+ age);


// const name="Mian subhan";

// const name_array="Mian subhan,Mian ammar,Mian subhan";

// console.log("this output from const");
// console.log("my name = ",name);

// console.log("converting into uppercase to my name = " + name.toUpperCase());

// console.log("total length of name var= " + name.length);
// console.log("to get first word from name that concept is called substring --->" , name.substring(0,5));

// console.log("now first word into upper\n");
// console.log("to get first word from name that concept is called substring --->" , name.substring(0,5).toUpperCase());

// console.log("using split function\n");

// console.log(name.split(""));

// console.log(name_array.split(","));


// ============Now concept of key pair ============

// const todo=[
//     {
//         id:1,
//         text:"Subhan",
//         isComplete: true
//     },
//     {
//         id:2,
//         text:"Ammar",
//         isComplete: true
//     },
//     {
//         id:3,
//         text:"Faizan",
//         isComplete: false
//     }
// ]

// console.log(todo[0].text+"\n\n");
// console.log(todo[2].text);

// // to see in jason formate online converter available

// // or to convert it manually sayntax is

// const todoJason = JSON . stringify(todo);

// // conversion displaying

// console.log(todoJason);

// ================LOOPS====================

// // === FOR LOOP ====
// for (let i = 0; i < 10; i++) {
//     console.log("for loop value =",i);
    
// }



// for (let i = 0; i <= 10; i++) {
    // another way of representing variable
//     console.log(`for loop value = ${i}`);
    
// }

// -----------------------------------------

// ====While loop=====
// let i=0;
// while (i<10) {
//     console.log("while loop value =",i);
    
//     // console.log(`for loop value = ${i}`);   // another way of representing variable
//     i++;
// }


// ---------applying loops on todo
// console.log("for loop value on todo");
// for (let i = 0; i < todo.length; i++) {
    
//     console.log(todo[i]);
// }



// // --------another for loop syntax
// for (const i of todo) {
//     // console.log(i.text);
//     console.log(i)
// }




// ==================FUNCTIONAL PROGRAMMING================

// =======for each loop

// todo.forEach(function(i) {
//     // console.log(i.id);
//     console.log(i.text);
// })

// ----"  map  " loop which return required result in array form

// let toGetText = todo.map(function(i) {
//     return i.text;
// })

// console.log(toGetText);


// ----" Filter " to filter data on the basis of some condition

// let toGetBool=todo.filter(function(i)
// {
//     return i.isComplete===true;
// });

// console.log(toGetBool);

// ---------------
// using map and filter

// let toGetBool=todo.filter(function(i)
// {
//     return i.isComplete===true;
// }).map(function(j) {
//     return j.id
// });

// console.log(toGetBool);



// =================CONDITIONAL PROGRAMMING===========

// =====double equal case========
// let x=10;
   // or
// let x="10"

// // in double equal value matches either datatype match or not in condition

// if(x==10)
// {
//     console.log("X = 10");
// }

// ----------------------------------

// =====triple equal case========
// let x=12;
   // or
// let x="10"

// // // in triple equal value matches and datatype match in condition

// if(x===12)
// {
//     console.log("X = 12");
// }

// else
// {
//     console.log("Data type do not match!");
// }

// ======================================
// -------------ternary operators---------
