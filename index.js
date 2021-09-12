console.log("Started");

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

console.log(document.all);


// Get elelemnt by id
console.log(document.getElementById('start'));

let header = document.getElementById('start');

header.style.border = 'solid 3px black';

// Get element by class name
let lists = document.getElementsByClassName('listitem');
console.log(lists[0])

lists[0].style.fontWeight = 'bold';
lists[1].style.fontWeight = 'bold';
lists[2].style.fontWeight = 'bold';

lists[2].style.backgroundColor = 'green';

var item = document.getElementsByTagName('li');
console.log(item[3]);