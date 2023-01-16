let year = new Date().getFullYear();
let date = `&copy; ${year}.:|:. Freddy Chivhenge .:|:. Zimbabwe`;
document.getElementById(`date`).innerHTML = date;

let modify = new Date(document.lastModified);
document.getElementById('modified').innerHTML = modify;
