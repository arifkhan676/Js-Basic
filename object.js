var student1 = { id: 1049 , phone:0181, name:'arif' };
var student2 = { id: 1151, phone:99 , name: 'bro' };

console.log(student1.id);

var phone1 = student1["phone"]; //next another way
var phone2 = student2.phone;

console.log(phone1);
console.log(phone2);


student1.phone= 444; //changed num
console.log(student1.phone);
