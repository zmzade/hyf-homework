
const weekday = ['Sunday', 'Monday', 'Tuseday', 'Wendsday', 'Thursday','Friday','Saturday']
function getEventWeekday (daysUntilEvent) {
    let today = new Date();
    let eventDate = (today.getDay() + daysUntilEventgit ) % 7;
    return weekday[eventDate] 
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(5));
console.log(getEventWeekday(27));
