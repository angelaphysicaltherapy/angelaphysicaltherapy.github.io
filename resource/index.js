let anqi = document.getElementById('anqi');
let picture = document.getElementById('picture');

let color = function() {
    picture.src = 'resource/anqi2.jpeg';
  };
  
anqi.addEventListener('click', color);


let beijing = document.getElementById('beijing');
let color1 = function() {
    picture.src = 'resource/autumn.jpeg';
  };
  
beijing.addEventListener('click', color1);

let palace = document.getElementById('palace');
let button = document.getElementById('button');
let collapse = document.getElementById('collapse');
let color2 = function() {
    picture.src = 'resource/palace.jpeg';
    button.style.display = "block";
    collapse.style.display = "block";


  };
  
palace.addEventListener('click', color2);



let hiddenpic = document.getElementById('hiddenpic');
let seemore = function() {
    hiddenpic.style.display = "flex";

  };
button.addEventListener('click', seemore);

let collapsepic = function() {
    hiddenpic.style.display = "none";
};
collapse.addEventListener('click', collapsepic);