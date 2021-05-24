// first part: send notes to array
const notes = [];

function saveNote(content, id) {
    const note = {content, id};
    return notes.push(note)  
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]




// part two : get a note by id
function getNote(id) {
    for (let i = 0; i < notes.length; i++){
        if(typeof id !== 'number'){
            return 'error'
        }
        if (notes[i].id === id){
            return notes[i]
        }
    }
}  
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
console.log(getNote(2));
console.log(getNote());
console.log(getNote('I'));
console.log(getNote('1'));


// part 3: read all notes
function logOutNotesFormatted() {
    for(let i = 0; i < notes.length; i++){
        console.log(`The note with id:${notes[i].id}, has the following note text:${notes[i].content}`)
    }
    
} 
logOutNotesFormatted(); // should log out the text below
  
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry