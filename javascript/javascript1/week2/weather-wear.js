
function sayWhatToWear (temperature){
 if(temperature <= 0){
     return 'coats and jackets'
 } else if (temperature < 8){
     return 'sweaters and pullovers'
 } else {
    return 'shorts and t-shirts'
 }
}
const clothesToWear = sayWhatToWear(18);
console.log(clothesToWear); 
console.log(sayWhatToWear(2));
console.log(sayWhatToWear(0));
console.log(sayWhatToWear(100));
console.log(sayWhatToWear(8));
console.log(sayWhatToWear(-10));