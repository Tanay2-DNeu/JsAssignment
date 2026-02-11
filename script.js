// Question-1  Simple Interest

// let amount = Number(prompt("Enter amount"));
// let interest= Number(prompt("Enter rate of interest"));
// let time = Number(prompt("Enter time"));
// if(!isNaN(amount) && !isNaN(interest) && !isNaN(time) )
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

// Question-4 

//Create list of employee objects
const employees = [
  { name: "Alice", age: 25, salary: 6000, dob: "1999-05-15" },
  { name: "Bob", age: 30, salary: 4500, dob: "1994-11-20" },
  { name: "Charlie", age: 22, salary: 800, dob: "2002-01-10" },
  { name: "David", age: 30, salary: 7000, dob: "1994-03-22" },
  { name: "Eve", age: 25, salary: 900, dob: "1999-08-30" }
];

//Filter employees with salary greater than 5000
const highSalary = employees.filter(emp => emp.salary > 5000);
console.log("High Salary:", highSalary);

//Group employees on the basis of their age
const group = employees.reduce((acc, emp) => {
  const age = emp.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(emp);
  return acc;
}, {});
console.log("Grouped by Age:", group);

// Fetch specific employees and give them a 5x increment
//With Salary < 1000 AND age > 20
const incrementedEmployees = employees
  .filter(emp => emp.salary < 1000 && emp.age > 20)
  .map(emp => ({
    ...emp,
    salary: emp.salary * 5
  }));
console.log("Employees with 5x Increment:", incrementedEmployees);