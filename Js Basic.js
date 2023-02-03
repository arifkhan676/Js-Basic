console.log(21);
console.log('hey brooo');

var etaVariable = 'arif';
console.log(etaVariable);

var price = 665;
console.log(price);

console.log(typeof etaVariable);

var isHot = true;
var isIce = false;
console.log(isHot);

var myName = 'Justin';
var lastName = 'Hasan';
var fullName = myName + ' ' +lastName;

console.log(fullName);

console.log(fullName.toUpperCase());

console.log(fullName.indexOf('Hasan'));

console.log(fullName.split('Ha'));

console.log(fullName.split(' '));

console.log(fullName.replace('Hasan','bieber'));

var num1 = 5;
var num2 = '7.5';
num2 = parseFloat(num2); //string to integer
console.log(num1 + num2);

var num3 = 0.1;
var num4 = 0.2;
var total=num3 + num4;
total=total.toFixed(4); //usually we get 0.30000004 so for cut & total=total. same var rakhtesi total e
console.log(total);

var num1 = 15;
var num2 = 25;
console.log(num2 % num1);

var price=25;
price++;
console.log(price);

var m= 7.69995;
m=Math.round(m);
console.log(m);

var m= 7.69995;
m=Math.floor(m);
console.log(m);

var m= 7.69995;
m=Math.ceil(m);

console.log(m);
console.log('random number');
randomValue=Math.random()*100;
console.log(randomValue);
randomValue=Math.floor(randomValue);
console.log(randomValue);

var hey= 25;

if(hey>26){
    console.log("ami boro bhai");
}else if(hey>=25){
    console.log("ami motamoti soman asi");
}
else{
    console.log("ami choto");

}