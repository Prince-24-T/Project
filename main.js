var da= document.querySelector("h1");
var d= document.querySelector(".days");
var y= document.querySelector(".year");
var m= document.querySelector(".month");





var date= new Date();
var today= date.getDate();
var day= date.getDay();
var year= date.getFullYear()
var month= date.getMonth();
var monthlist= ['january','February','March','April','May','June','July','August','September','octobar','November','December'];
var months= monthlist[month];
var daylist= ['sunday','monday','tuesday','wensday','thursday','friday','saturday'];
var days = daylist[day];

da.innerHTML=today;
d.innerHTML=days
y.innerHTML= year;
m.innerHTML=months;


