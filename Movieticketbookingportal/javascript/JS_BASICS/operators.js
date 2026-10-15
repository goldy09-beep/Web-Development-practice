// arithematic operators (+, -, *, /, %)
let a= 10
let b= 20
let c = b%a;
console.log(c)
console.log(b/a)

// assignment operators (+=, -=, *=, /=, %=)

let d = 10;
let e = 20;
d += e; // equivalent to d = d + e
console.log(d);

//relational operators (==, ===, !=, !==, >, <, >=, <=)
let f = 10;
let g = 20;
console.log(f == g); // false
console.log(f === g); // false (=== checks for value and type)
console.log(f != g); // true
console.log(f !== g); // true
console.log(f > g); // false
console.log(f < g); // true
console.log(f >= g); // false
console.log(f <= g); // true

//ternary operator 
let h = 10;
let i = 20;
let j = (h > i) ? "h is greater" : "i is greater"; // if h > i, then j = h, else j = i
console.log(j);

// null coalsing operator (??)
let k = null;
let l = 20;
let m = k ?? l; // if k is null or undefined, then m = l, else m = k
console.log(m);

let x = undefined
console.log( x ?? "right side value")

let y = 100
console.log( y ?? "right side value")

let z = null
console.log( z ?? "right side value") 


let arr= [3,5,6,1,8]
console.log(arr)

//spread operator (...)
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2] // spread operator is used to spread the elements of arr1 and arr2 into arr3
console.log(...arr1)
console.log(...arr2)
console.log(arr3) // [1, 2, 3, 4, 5, 6]

let arr4 = [...arr] //wrong
arr4[0] = 100;
console.log('arr4 =>' , arr4)
console.log('arr =>' , arr)

//rest opeerator 
function add (...num){
    let sum =0
    for (let i=0; i<num.length; i++){
        sum += num[i]
    }
    return sum;
}
 add(1,2,3,4,5) // 15

 let obj = {
    name: "John",
    age: 30,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    }
 }
 let obj2 = obj;
 obj.name = "Jane"
 console.log(obj2.name) // Jane
 console.log(obj.name) // Jane (here original object is modified, so obj2 is also modified)

 let obj3 = {...obj} // here we are creating a new object with the same properties as obj
 obj3.name = "Alice"
 console.log(obj3.name) // Alice
 console.log(obj.name) // Jane (original object is not modified)

 console.log(obj3.address.city) // New York

 let obj4 = {...obj} //(shalow copy because the data of original is still changed)
obj4.address.city = "Los Angeles" // here we are modifying the address property of obj2, which is a reference to obj
console.log(obj.address.city) // Los Angeles (original object is modified)

obj5 = structuredClone(obj) // ( deep copy)

obj5.address.city = "Mumbai"
console.log(obj.address.city) // Los Angeles (original object is not modified)

//shalow copy and deep copy is used when there is a nested loop and we want to access it but if we directly want to access the obj then we can use rest operator

//const PI=3.14
let pi=Math.PI
console.log(pi)

console.log(Math.round(4.3))
console.log(Math.round(4.7))
console.log(Math.round(4.5))

console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))

console.log(Math.sqrt(16))
console.log(Math.cbrt(27))

console.log(Math.random()*10) //print between 0-10
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*100)+1) //between 1-100