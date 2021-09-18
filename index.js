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


//console.log(deleteb);


var items = {...localStorage};

let html = ``;

for(let key in items)
{
    let obj = JSON.parse(items[key]);
    html += `<li class = ${key} >  User name is  ${obj.name} , User email is ${obj.email} ,  User phone is ${obj.phone} </li>`
    html += `<button class = ${key}>Edit</button>`
    html += `<button class = ${key}>Delete</button>`


}

var root = document.getElementById('root');
console.log(root);
root.innerHTML = html;

var deleteb = document.querySelectorAll('button');

for(let i=1;i<deleteb.length;i++)
{
   // console.log(deleteb[i]);
    deleteb[i].addEventListener('click' ,(e)=>{

        let idd = e.target.className;
        console.log(idd);
        var list = document.querySelectorAll('.' + idd);
        for(let i=0;i<list.length;i++)
        {
           // list[0].remove();
            localStorage.removeItem(idd);
        }

    })
}



