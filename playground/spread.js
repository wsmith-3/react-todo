function add (a, b) {
  return a + b;
}
console.log(add(3,1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['jim', 'cory'];
var groupB = ['viki'];
var final = [3, ...groupA];
 console.log(final);

var person1 = ['Andrew', 25];
var person2 = ['Jen', 29];
//Hi Andrew you are 25
function greet (name, age){
  console.log('Hi ' + name + 'you are' + age);
}
greet(...person1);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Willie'];
// combine names then loop over print saying Hi Willie
var allNames = [...names, ...final];
allNames.forEach(function(n){
  console.log('Hi' + n);
})
