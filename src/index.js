import './css/style.css';

var printdata=require('./printdata')
var Todo=require('./todo');

const form = document.getElementById('formsubmit');
form.addEventListener('submit', (en) => {
    en.preventDefault();
    const objec = new Todo(form[0].value, form[1].value, form[2].value, form[3].value);
    localStorage.setItem(Math.floor(Math.random() * 10000), JSON.stringify(objec));
    printdata();
})



