
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



//Fundamental of array;

var array = [1,5,8,32,45];

console.log(array[3]);

array[3]=49;

console.log(array[3]);

var position = array.indexOf(45);
var pos = array.indexOf(49);


console.log('Postition ' + position );

console.log('new index position ' + pos );

array.push(55);
console.log(array);
console.log(array.length);
array.pop();
console.log('pop er pore len '+ array.length);

var teamLine = ['kalam' , 'balam' ,'salam','kudus','pudus','kedaa'];
teamLine.shift(); //array er samner ta sorabo
console.log(teamLine);
teamLine.unshift('chairman');
console.log(teamLine);

var part = teamLine.slice(2,5); // 5-2= 3 (majkhane 3ta value pabo)
console.log(part);

var sum=10;
while(sum<15){
    console.log(sum);
    sum++;
}

for(var i=0; i<teamLine.length;i++){
    var elements = teamLine[i];
    console.log(elements);
}

var num = 1000;

switch(num){

    case 100: 
    console.log('here is 100');
    break;

    case 50:
    console.log('here is 50');
    break;

    case 1000:
     console.log('here is 1000');
        break;

        default:
            console.log('i dont know this value');

}

function sendSomething(num1,num2){
    var total = num1 * num2 ;
    return total;
}
var total = sendSomething(2,10);
var totalPro = sendSomething(5,10);

console.log(total);
console.log(totalPro);


/*

Loop er kaj 
for(var i=0; i<10; i++){
    array.push(i);
    console.log('after push new index is ' + array.indexOf(i));

}
******

var paisi;

for(var i=0;i<50; i++){
    var cnt = i;
    var pos=array.indexOf(i);

    if(cnt==pos){
       paisi=cnt;
        console.log(pos + 'is locate in ' + paisi);
    }
    else{
        console.log('naai');
    }
     
}
*/

