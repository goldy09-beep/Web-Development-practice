// let i=1
// while(i<5){
//     console.log(i);
//     i++;
// }

 //let arr1=[2, 3, 5, 5, 1]
// for(let x of arr1){
//     console.log(x);
// }

// let obj={
//     name:'Raj',
//  age: 55,
//  gender: 'Male',
//  college: 'GLA'
// }
// for(let x in obj){
//     console.log(obj[x])
// }
// let val=7;
// let flag=0;
// if(val<2){
//     console.log('not prime')
// }
// for(let i=2;i<val/2;i++){ //time complexity = O(n)
//     if(val%i==0){
//         flag=1
//         break
//     }
// }
// if(flag==0){
//     console.log('prime')
// }
// else{
//     console.log('not prime')
// }

//?. -> optional chaining operator
let obj={
    name:'Anmol',
    age:12,

}
console.log(obj.address?.pin)