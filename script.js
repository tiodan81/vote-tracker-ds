var allPictures = [];

//****** Picture constructor and objects

function Picture (name, title, tenure, path) {
  this.name = name;
  this.title = title;
  this.tenure = tenure;
  this.path = path;
  this.votes = 0;
  allPictures.push(this);
}

var roberts = new Picture('John Roberts', 'Chief', '2005 - present', 'roberts.jpg');
var gisburg = new Picture('Ruth Bader Ginsburg', 'Associate', '1993 - present', 'ginsburg.jpg');
var thomas = new Picture('Clarence Thomas', 'Associate', '1991 - present', 'thomas.jpg');
var scalia = new Picture('Antonin Scalia', 'Associate', '1986 - present', 'scalia.jpg');
var warren = new Picture('Earl Warren', 'Chief', '1953 - 1969', 'warren.jpg');
var frankfurter = new Picture('Felix Frankfurter', 'Associate', '1939 - 1962', 'frankfurter.jpg');
var brandeis = new Picture('Louis Brandeis', 'Associate', '1916 - 1939', 'brandeis.jpg');
var holmes = new Picture('Oliver Wendell Holmes, Jr.', 'Associate', '1902 - 1932', 'holmes.jpg');
var jmarshall = new Picture('John Marshall', 'Chief', '1801 - 1835', 'jmarshall.jpg');
var taney = new Picture('Roger Taney', 'Chief', '1836 - 1864', 'taney.jpg');
var oconnor = new Picture('Sandra Day O\'Connor', 'Associate', '1981 - 2006', 'oconnor.jpg');
var washington = new Picture('Bushrod Washington', 'Associate', '1798 - 1829', 'washington.jpg');
var chase = new Picture('Salmon P. Chase', 'Chief', '1864 - 1873', 'chase.jpg');
var black = new Picture('Hugo Black', 'Associate', '1937 - 1971', 'black.jpg');
var tmarshall = new Picture('Thurgood Marshall', 'Associate', '1967 - 1991', 'tmarshall.jpg');


function Tracker () {}

var currentNums = [];

function picSelect () {
  for (var j = 0; j < 2; j++) {
    var num = Math.floor(Math.random() * allPictures.length);
    currentNums.push(num);
  }

  if (currentNums[0] === currentNums[1]) {
    currentNums = [];
    picSelect();
  } else {
    return currentNums;
  }
}

function displayChoices () {
  picSelect()

  for (var i = 0; i < 2; i++) {
    var pic = document.getElementById('pic' + i);
    var name = document.getElementById('name' + i);
    var title = document.getElementById('title' + i);
    var tenure = document.getElementById('tenure' + i);
    var currentPic = allPictures[currentNums[i]];

    pic.src = 'images/' + currentPic.path;
    name.textContent = currentPic.name;
    title.textContent = currentPic.title + ' Justice';
    tenure.textContent = currentPic.tenure;
  }

}

displayChoices();

var pic0 = document.getElementById('pic0');
var pic1 = document.getElementById('pic1');

pic0.addEventListener('click', vote);
pic1.addEventListener('click', vote);

function vote (event) {
  //need reference to currently displayed objects - currentNums
  var chosen = event; //allPictures[currentNums];
  console.log(chosen);
  //give info
  //increment vote

  //update chart
  //next vote
}
