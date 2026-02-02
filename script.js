// Question-1  Simple Interest

// let amount = Number(prompt("Enter amount"));
// let interest= Number(prompt("Enter rate of interest"));
// let time = Number(prompt("Enter time"));
// if(isNaN(amount) && isNaN(interest) && isNaN(time) )
// {

//     let simpleInterest = (amount* interest* time)/100;
// }
// else
// {
//     alert("Only numbers are allowed");
// }
// console.log("Simple Interest= " +simpleInterest);




//  Question-2 Check if it's a palindrome String

// let str= prompt("Enter a string");
// let i=0, j= str.length-1;
// while(i<j)
// {
//     if(str[i].toLowerCase() === str[j].toLowerCase())
//     {
//         i++;
//         j--;
//     }
//     else
//     {
//         alert("Not a Palindrome");
//         break;
//     }
// }
// if(i==j)
// alert("Is a Palindrome");


// Question-3 Input the radius and find Area of circle

// let radius= Number(prompt("Enter radius of circle"))
// let area= Math.round(Number(3.14* radius * radius))
// alert("Area of circle is: " +area)



// Question-4 Copy information of one object into another 

let original={
    name: "Tanay",
    age: 25,
    address: {
        city: "Kanpur",
        pincode: 208021,
    }
};

//Shallow copy
let shallowcopy1= {...original}
console.log(shallowcopy1); 
let shallowcopy2=Object.assign(original);
console.log(shallowcopy2);

/* output 
Object { name: "Tanay", age: 25, address: {…} }
​
address: Object { city: "Mumbai", pincode: 208021 }
​
age: 25
​
name: "Tanay"
​
*/

shallowcopy1.address.city="Mumbai"
console.log(original);
/*
Object { name: "Tanay", age: 25, address: {…} }
​
address: Object { city: "Mumbai", pincode: 208021 }   // value of city is changed in original 
​
age: 25
​
name: "Tanay"
*/

// Deep copy
let deepcopy= structuredClone(original);
let deepcopy2= JSON.parse(JSON.stringify(original))
deepcopy.address.city="Delhi";
console.log(original);

/* output
Object { name: "Tanay", age: 25, address: {…} }
​
address: Object { city: "Mumbai", pincode: 208021 } // value of city remains same in original
​
*/


console.log(deepcopy);
/* Output
Object { name: "Tanay", age: 25, address: {…} }
​
address: Object { city: "Delhi", pincode: 208021 }  //change only reflects in the new copy
*/

//




// Question-4 
