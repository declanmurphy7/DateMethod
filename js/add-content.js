var day = today.getDay();
var weekDay;

if (day == 1) 
{	weekDay = 'Monday';}
if (day == 2) 
{	weekDay = 'Tuesday';}
if (day == 3) 
{	weekDay = 'Wednesday';}
if (day == 4) 
{	weekDay = 'Thursday';}
if (day == 5) 
{	weekDay = 'Friday';}
if (day == 6) 
{	weekDay = 'Saturday';}
if (day == 7) 
{	weekDay = 'Sunday';}


if (hourNow >= 18)
{	greeting = 'Good evening, its' + weekDay;}

else if (hourNow > 12)
{	greeting = 'Good Afternoon Declan! Happy ' + weekDay;}


else if (hourNow > 0) 
{	greeting = 'Good Morning Declan! Happy ' + weekDay;}

else
{	greeting = 'Welcome!';}

document.write('<h3>' + greeting + '</h3>');
