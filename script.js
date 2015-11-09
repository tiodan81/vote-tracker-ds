var allPhotos = [];

function Picture (name, title, tenure, path) {
  this.name = name;
  this.title = title;
  this.tenure = tenure;
  this.path = path;
  this.votes = 0;
  allPhotos.push(this);
}

function Tracker () {}

//Tracker.prototype.

function picSelect () {
  return Math.floor(Math.random() * allPhotos.length);
};

//Tracker.prototype.

function display (picSelect) {
  var choice1 = document.getElementById('choice1');
  var pic1 = document.getElementById('pic1');
  var name1 = document.getElementById('name1');
  var title1 = document.getElementById('title1');
  var tenure1 = document.getElementById('tenure1');
  var currentPic = allPhotos[picSelect()];

  pic1.src = 'images/' + currentPic.path;
  name1.textContent = currentPic.name;
  title1.textContent = currentPic.title + ' Justice';
  tenure1.textContent = currentPic.tenure;
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

display(picSelect);
