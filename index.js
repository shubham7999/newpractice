console.log("Working Fine");

// Prentnode
let node = document.querySelector('ul');
console.log(node.parentNode);

//Parentelelelmnt

let node1 = document.querySelector('.listitem');
console.log(node1.parentElement);

// Childnodes

let div = document.querySelector('div');
console.log(div.children);
console.log(div);

//first child lastchild 

let ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.firstChild);
console.log(ul.lastChild);

//firstelelement child
console.log(ul.firstElementChild);

//;lastelelementchild
console.log(ul.lastElementChild);

//nextsibling

console.log(ul.nextSibling);

//Next elelement siblingd
console.log(ul.nextElementSibling);

//previous sibling

console.log(ul.previousSibling);

//previous element sibling

console.log(ul.previousElementSibling);

//Creating new div


console.log("===============");
let new1 = document.createElement('div');

new1.className="hello";
new1.id = "unique";

// Setaatribute
new1.setAttribute('title' , "hey");


// Craeting text node
let text = document.createTextNode("Child");


// Ap[pending child]
new1.appendChild(text);

console.log(new1);

var container = document.querySelector('ul');
var set = document.querySelector('li');
let hello = document.createTextNode("HEllo");


//Insert Before
container.insertBefore(hello , set);
console.log(container);






