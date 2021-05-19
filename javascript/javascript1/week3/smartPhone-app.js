// first part
let activities = []
function addActivity (date, activity, duration){

    if (typeof date === 'string' && typeof activity === 'string' && typeof duration === 'number'){
        
        let object = {date, activity, duration}
        activities.push(object)
    }
    
}

addActivity("23/7-18", "Youtube", 30);
addActivity(2, '', 'I');
addActivity("30/7-18", "facebook", 20);
addActivity("yesterday", "instagram", 15);
console.log(activities)
/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

// second part

function showStatus (){
    
    let totalTime = 0;
    for (let i = 0; i < activities.length; i++){
        let time = activities[i].duration;
        totalTime += time
    }
    
    console.log(`You have added ${activities.length} activities. They amount to ${totalTime} min. of usage`)
    
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
//in case activity is empty log out "Add some activities before calling showStatus"