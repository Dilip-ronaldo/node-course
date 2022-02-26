const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {

    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.bgGreen("New Note Added !"))
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse("Note title already taken!"))
    }

}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (exp) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToRemove = notes.filter((note) => note.title === title)

    if (noteToRemove.length != 0) {
        console.log("note to be removed is " + title)
        const index = notes.indexOf(title)
        notes.splice(index, 1) // remove 1 element from index 
        saveNotes(notes)
        console.log(chalk.bgGreen("Note removed"))
    } else {
        console.log(chalk.bgRed("No note matching the given title is present"))
    }



}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.magenta("Your notes !"))
    notes.forEach((note) => console.log(chalk.green(note.title)))
}

const readNotes = (title) => {
    const notes = loadNotes()
    return notes.find((note)=> note.title==title)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}