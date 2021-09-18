const button = document.querySelector('button');

button.addEventListener('click' , ()=>{


    var obj = {};

    obj.name = document.getElementById('name').value;
    obj.phone = document.getElementById('phone').value;
    obj.email = document.getElementById('email').value;

    let set = JSON.stringify(obj);

    let cnt = localStorage.length;

    localStorage.setItem('user' + cnt , set);
    
});

var items = {...localStorage};

let html = ``;

for(let key in items)
{
    let obj = JSON.parse(items[key]);
    html += `<li> User name is  ${obj.name} , User email is ${obj.email} ,  User phone is ${obj.phone} </li>`

}

var root = document.getElementById('root');
console.log(root);
root.innerHTML = html;


