var noon = 12;
var evening = 18;
var wakeupTime = 9;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var time = new Date().getHours();
var oneSecond = 1000;
var isPartyTime = false;
var partyTimeButton = document.getElementById ("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var showCurrentTime = function()
{
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
	
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    if (minutes < 10)
    {
       minutes = "0" + minutes;
    }
 
    if (seconds < 10)
    {
       seconds = "0" + seconds;
    }
	
	if (hours < 1)
	{
		hours = hours + 12;
	}
 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var updateClock = function()
{
var messageText;
var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var lolcatImage;

if (time == partyTime){
	lolcatImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	lolcatImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	lolcatImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	lolcatImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	lolcatImage = "http://goodmorningpics.com/wp-content/uploads/2015/12/Funny_Good_Morning.png";
    messageText = "Good morning!";
} else if (time > evening) {
	lolcatImage = "https://img00.deviantart.net/517f/i/2012/260/9/b/evening_cat_by_rubeeamadare-d5f0zhz.jpg";
	messageText = "Good Evening!";
} else {
	lolcatImage = "https://www.petmd.com/sites/default/files/petmd-cat-happy-3.jpg";
    messageText = "Good afternoon!";
}

timeEventJS.innerText = messageText;
lolcat.src = lolcatImage;
	
	showCurrentTime();
	
};

var partyEvent = function()

{
	if (isPartyTime === false)
	{
		isPartyTime = true;
        time = partyTime;
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	
	else 
	{
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "Party Over";
		partyTimeButton.style.backgroundColor = "#222";
	}
};

var wakeUpEvent =  function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function()
{
    napTime = napTimeSelector.value;
};

updateClock();
setInterval( updateClock, oneSecond);
partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);