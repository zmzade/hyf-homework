const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function howlongTakes (travelInformation){ 
    let hours = travelInformation.destinationDistance / travelInformation.speed
    let minutes = travelInformation.destinationDistance % travelInformation.speed
    return `${Math.floor (hours)} hours and ${minutes} minutes`
}

const travelTime = howlongTakes(travelInformation);
console.log(travelTime); 