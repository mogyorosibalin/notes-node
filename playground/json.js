// let obj = {
//     name: 'Balint'
// };
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj, stringObj);

// const personString = '{"name": "Balint","age": 21}';
// const person = JSON.parse(personString);
// console.log(typeof person, person);

const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note, note);