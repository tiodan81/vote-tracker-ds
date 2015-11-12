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
var holmes = new Picture('Oliver Wendell Holmes', 'Associate', '1902 - 1932', 'holmes.jpg');
var jmarshall = new Picture('John Marshall', 'Chief', '1801 - 1835', 'jmarshall.jpg');
var taney = new Picture('Roger Taney', 'Chief', '1836 - 1864', 'taney.jpg');
var oconnor = new Picture('Sandra Day O\'Connor', 'Associate', '1981 - 2006', 'oconnor.jpg');
var washington = new Picture('Bushrod Washington', 'Associate', '1798 - 1829', 'washington.jpg');
var chase = new Picture('Salmon P. Chase', 'Chief', '1864 - 1873', 'chase.jpg');
var black = new Picture('Hugo Black', 'Associate', '1937 - 1971', 'black.jpg');
var tmarshall = new Picture('Thurgood Marshall', 'Associate', '1967 - 1991', 'tmarshall.jpg');


var Tracker = {
  currentNums: [],
  choice0: document.getElementById('choice0'),
  choice1: document.getElementById('choice1'),
  pic0: document.getElementById('pic0'),
  pic1: document.getElementById('pic1'),
  text0: document.getElementById('text0'),
  text1: document.getElementById('text1'),
  response: document.getElementById('response'),
  loserImg: '',
  loserText: '',

  picSelect: function () {
    for (var j = 0; j < 2; j++) {
      var num = Math.floor(Math.random() * allPictures.length);
      this.currentNums.push(num);
    }

    if (this.currentNums[0] === this.currentNums[1]) {
      this.currentNums = [];
      this.picSelect();
    } else {
      return this.currentNums;
    }
  },

  displayChoices: function () {
    this.picSelect();

    for (var i = 0; i < 2; i++) {
      var pic = document.getElementById('pic' + i);
      var text = document.getElementById('text' + i);
      var currentPic = allPictures[this.currentNums[i]];
      pic.src = 'images/' + currentPic.path;
      text.innerHTML = currentPic.name + '<br />' + currentPic.title + ' Justice' + '<br />' + currentPic.tenure;
    }
  },

  displayChart: function () {
    var canvas = document.getElementById('canvas').getContext('2d');
    var labelsArray = [];
    var dataArray =[];

    for (var i = 0; i < allPictures.length; i++) {
      labelsArray[i] = allPictures[i].name;
      dataArray[i] = allPictures[i].votes;
    }

    var chartData = {
      labels: labelsArray,
      datasets: [{
        label: 'Justices',
        fillcolor: 'rgba(21,101,192,1.0)',
        strokeColor: 'rgba(21,101,192,1.0)',
        highlightFill: "rgba(21,101,192,1.0)",
        highlightStroke: "rgba(21,101,192,1.0)",
        data: dataArray
      }]
    };

    new Chart(canvas).Bar(chartData, {scaleShowVerticalLines: false});
  },

  vote: function (pic, index) {
    var target = event.target.id;

    if (target === 'pic0') {
      loserImg = pic1;
      loserText = text1;
    } else {
      loserImg = pic0;
      loserText = text0;
    }

    loserImg.style.transition = 'opacity 1.0s ease-in';
    loserImg.style.opacity = '0.0';
    loserText.textContent = '';
    this.pic0.removeEventListener('click', listener0);
    this.pic1.removeEventListener('click', listener1);
    if (index === 2 || index === 3) { //Scalia or Thomas bad. Else good
      response.innerHTML = 'Bad call! <br />You chose ' + allPictures[index].name + '<br /><br />Click here to vote again.';
    } else {
      response.innerHTML = 'Good call! <br />You chose ' + allPictures[index].name + '<br /><br />Click here to vote again.';
    }

    allPictures[index].votes += 1;
    this.displayChart();
  }
};

var listener0 = function() {
  Tracker.vote(pic0, Tracker.currentNums[0]);
}

var listener1 = function() {
  Tracker.vote(pic1, Tracker.currentNums[1]);
}

Tracker.pic0.addEventListener('click', listener0);
Tracker.pic1.addEventListener('click', listener1);

Tracker.response.addEventListener('click', function () {
  Tracker.currentNums = [];
  loserImg.style.transition = 'opacity 0s';
  loserImg.style.opacity = '1.0';
  Tracker.displayChoices();
  Tracker.pic0.addEventListener('click', listener0);
  Tracker.pic1.addEventListener('click', listener1);
});

Tracker.displayChoices();
Tracker.displayChart();
