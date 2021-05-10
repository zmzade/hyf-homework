// first part
function getFullname (firstname, surname) {
 return (`"${firstname} ${surname}"`)
}
console.log(getFullname("Benjamin", "Hughes"));

//second part
const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Benjamin", "Hughes");
console.log(fullname1);
console.log(fullname2);