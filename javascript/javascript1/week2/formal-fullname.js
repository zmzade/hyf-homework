

function getFullname (firstname, surname, useFormalName, gender) {
    if (!firstname || !surname)  {
        return `"Please fill up firstname and surname."`
    }
    else {
    if (useFormalName && gender === 'male') {
        return `"Lord ${firstname} ${surname}"`
    }
    else if (useFormalName && gender === 'female') {
        return `"Lady ${firstname} ${surname}"`
    } 
    else {
        return `"${firstname} ${surname}"`
    }
    } 
}
   
   console.log(getFullname("Benjamin", "Hughes", true, 'male'));
   console.log(getFullname("Adrian", "Hughes", "", 'male'));
   console.log(getFullname("Natalie", "Hughes", true, 'female'));
   console.log(getFullname('', '', '', ''));
   console.log(getFullname('', '',true, 'female'));
   console.log(getFullname("Tina", "Hughes", undefined, 'female'));



