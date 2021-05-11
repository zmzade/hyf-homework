
const weekday = ['Sunday', 'Monday', 'Tuseday', 'Wendsday', 'Thursday','Friday','Saturday']
function getEventWeekday (number) {
    let today = new Date();
    let eventDate = (today.getDay() + number ) % 7;
return weekday[eventDate] 
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(5));
console.log(getEventWeekday(27));
