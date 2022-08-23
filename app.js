let addElement = (pEle, el, text='') => {
  let element = document.createElement(el);
  if (text) {
    element.textContent = text;
  }
  pEle.appendChild(element);
}

let addItem = () => {
  let box = document.querySelector('input');
  let myEle = document.querySelector('ul');
  if (box.value) {
    let fruit = box.value;
    addElement(myEle, 'li', fruit);
  }
  box.value = '';
}
let div = document.querySelector('#goes');
addElement(div, "input");
addElement(div, "button", "click");
addElement(div, "ul");

let anupam = document.querySelector('main');
addElement(anupam, 'button', 'click me');

let buttons = document.querySelectorAll('button');
buttons[1].addEventListener('dblclick', () => {
  console.log("ahra krishna ! ");
})
buttons[1].addEventListener('click', () =>{
  console.log('you just clicked one time');
})
document.querySelector('button').addEventListener('click', addItem);
