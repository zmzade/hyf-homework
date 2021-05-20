
const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) {
        console.log(`Please write down your name`)
        return
    }

    if (class07Students.length >= 6 && studentName !== 'Queen') {
        console.log('Cannot add more students to class 07') 
        return
    }    
    if (class07Students.includes(studentName)) {
            console.log(`Student ${studentName} is already in the class`)
            return
    }
    class07Students.push(studentName)
}

function getNumberOfStudents() {
    return class07Students.length
}


addStudentToClass('Benjamin')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Kiarash')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Jalal')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Zahra')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Benjamin')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Maxine')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Helle')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Rune')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Mary')
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Queen') // add queen to a full class
console.log(class07Students)
console.log(getNumberOfStudents())
addStudentToClass('Queen')
console.log(class07Students)
console.log(getNumberOfStudents())