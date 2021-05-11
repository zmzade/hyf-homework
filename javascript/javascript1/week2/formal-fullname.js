

function getFullname (firstname, surname, useFormalName, gender) {
 if (firstname && surname)  {
    if (useFormalName) {
        if (gender === 'male') {
            return (`"Lord ${firstname} ${surname}"`)
        }
        else if (gender === 'female') {
            return (`"Lady ${firstname} ${surname}"`)
        }
    } else {
        return (`"${firstname} ${surname}"`)
    }
 } else {
     return (`"Please fill up firstname and surname."`)
 }
    
 }
   
   console.log(getFullname("Benjamin", "Hughes", true, 'male'));
   console.log(getFullname("Adrian", "Hughes", "", 'male'));
   console.log(getFullname("Natalie", "Hughes", true, 'female'));
   console.log(getFullname('', '', '', ''));
   console.log(getFullname('', '',true, 'female'));
   console.log(getFullname("Tina", "Hughes", undefined, 'female'));



