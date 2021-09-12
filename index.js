console.log("Working");

var buttons = document.querySelectorAll('button');

function clicked(event)
{
    let classh = this.className;
  
    document.querySelectorAll("." + classh).forEach(el => el.remove());


}
for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click' , clicked);
}





