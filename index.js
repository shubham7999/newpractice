console.log("Working");
var item = document.querySelector('#search');

item.addEventListener("input", (e) => {

    console.log(this.value);

    let itemvalue = this.value;

    var list = document.querySelectorAll('li');


    for (let i = 0; i < list.length; i++) {

        let s = list[i].innerText;

        if (s.indexOf(itemvalue) === -1) {
            list[i].style.display = 'none'
        } else {
            list[i].style.display = 'block'
        }
    }


});