console.log('Hello Javascript');
// let name ='Vaibhav';
// console.log(name);

 interestRate=0.3;
interestRate=1;
console.log(interestRate);

//obj
let person ={
   name :'Vaibhav',
   age : 20  
};
//dot notation
person.name='vaibhavi;'


console.log(person);

//Arrays
let selectedColors=['red','blue'];
selectedColors[2]='green';
console.log(selectedColors.length);

//function 

function greet(lastName,firstName){
    console.log('Hello ' + lastName + ' ' + firstName );
}

greet('Malhotra','Vaibhav');
greet('Sharma' , 'Rohit');

function square(number){
    return number * number;
}
console.log(square(2));