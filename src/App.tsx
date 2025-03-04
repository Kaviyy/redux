import { compose, pipe } from 'lodash/fp';
import './App.css'
// function pressLike(){
//   return "thank"
// }
// function sayThanks(fn){
//   console.log(fn())
// }
// // let pL = pressLike();
// // pL();
// sayThanks(pressLike)
// function App() {
  
// }
// function pressLike(){
//   return function(){
//     console.log("thanks");
    
//   }
// }
// let fn=pressLike()
// let msg=fn()
// array=[1,2,3]
// Array.map(number=>number*2)
// setTimeout(()=>console.log("hi"),1000)
// const transform = compose(wrapindiv,toLowerCase,trim)//opposite order
// let input = " Subscribe "
// let output = "<div>" +input.trim() + "</div>"
// const trim = str =>str.trim()
// const wrapindiv = str => `<div>${str}</div>`
// const result=wrapindiv(trim(input))
// const toLowerCase = str => str.toLowerCase()
// const resultt=(toLowerCase(input))

// console.log(result);
// console.log(output)
// function add(a:number) {
//     return function (b:number) {
//         return a + b;
//     };
// }

// console.log(add(3)(6)); // Output: 9
// const add2 = (c: number) => (d: number): number => c + d;
// console.log(add2(2)(1)); // Output: 3

// function App() {
//     return <div>{5}</div>; // Corrected JSX return
// }
// let input=" subscribe "
// let output = "<div>" + input.trim() +"</div>"
// const trim = (str: string): string => str.trim();
// const toLowerCase = (str: string): string => str.toLowerCase();
// const wrap = (type: string) => (str: string): string => `<${type}>${str}</${type}>`;

// Function composition: pipe executes functions left to right
// const pipe =
//   (...functions: Function[]) =>
//   (input: string): string =>
//     functions.reduce((acc, fn) => fn(acc), input);

// Applying the transformations
// const transform = pipe(trim, toLowerCase, wrap("div"));

// console.log(transform(input)); // Output: <div>subscribe</div>

// React Component
const person = {
    name: "kavi",
    address: {
        city: "Tuty",
        country: "India"
    }
};

// Shallow copy (address is still referenced)
const updated = { 
    ...person, 
    name: "mubima" 
};
updated.address.country="sigapore"
console.log(updated); // { name: "mubima", address: { city: "Tuty", country: "India" } }

person.name = "mubi"; // Modifying the original object
console.log(person); // { name: "mubi", address: { city: "Tuty", country: "India" } }


function App(){
   return 1;
}



export default App;

