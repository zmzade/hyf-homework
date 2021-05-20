// first part
let activities = []
function addActivity (date, activity, duration){

    if (typeof date === 'string' && typeof activity === 'string' && typeof duration === 'number'){
        
        let object = {date, activity, duration}
        activities.push(object)
    }
    
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Youtube", 3);
addActivity(2, '', 'I');
addActivity("30/7-18", "facebook", 20);
addActivity("1/3-21", "instagram", 15);
addActivity("1/3-21", "instagram", 40);
addActivity("1/3-21", "instagram", 50);
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

function showStatus (activities, timeLimit){
    if (activities.length !== 0){
        
        let totalTime = 0;
            for (let i = 0; i < activities.length; i++){
                let time = activities[i].duration;
                    totalTime += time
            }
                console.log(`You have added ${activities.length} activities. They amount to ${totalTime} min. of usage`)
                    if (timeLimit <= totalTime){
                         console.log(`You have reached your limit, no more smartphoning for you!`)    
                    }   
        return
    }     
    console.log(`Add some activities before calling showStatus`)
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
showStatus('', 0);//in case activities is empty log out "Add some activities before calling showStatus"
showStatus(activities,60); //"You have reached your limit, no more smartphoning for you!"
showStatus(activities, 200); // will log out this "You have added 3 activities. They amount to 78 min. of usage"


//Create a function for calculating the activity a user has spent the most time on.
let totalTimeActivity= [] 

function calculateMostUsedActivity(activities){
    let check = [], uniqueActivity = [];

    for(let i = 0; i < activities.length; i++){
        
        if( check[activities[i].activity]){
            continue;}
                check[activities[i].activity] = true;
                    uniqueActivity.push(activities[i].activity);
    }
    for(let j =0; j<uniqueActivity.length; j++){
        let sumact = 0;
            for(let k=0; k<activities.length; k++){
                if(activities[k].activity === uniqueActivity[j]){
                    sumact+=activities[k].duration
                }
            }
        let object2 = {actName:uniqueActivity[j], totalDuration: sumact}
            totalTimeActivity.push(object2); 
    }
    console.log(totalTimeActivity)
    let maxDuration = 0, maxAcitivty=[];
    for (let i = 0; i < totalTimeActivity.length; i++){
            if (totalTimeActivity[i].totalDuration > maxDuration){
                maxDuration = totalTimeActivity[i].totalDuration;
                maxAcitivty = totalTimeActivity[i].actName
        }
    }
    console.log(`most activity is on: ${maxAcitivty} with ${maxDuration} min.`)
}
calculateMostUsedActivity(activities)
