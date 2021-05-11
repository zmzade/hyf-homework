
const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName) {
        if (class07Students.length < 6) {
            if (class07Students.includes(studentName)) {
                console.log(`Student ${studentName} is already in the class`)
                }
            else {
                return class07Students.push(studentName)
                } 
        }else if (studentName === 'Queen'){
            return class07Students.push('Queen')
        }else {
            console.log('Cannot add more students to class 07') 
            }
        }
   
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
addStudentToClass('Queen')
console.log(class07Students)
console.log(getNumberOfStudents())