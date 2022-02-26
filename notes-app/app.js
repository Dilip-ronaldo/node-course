const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { listNotes } = require('./notes.js')

//create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.addNote(argv.title, argv.body) }

})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title) }

})

//create list command

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() { 
        console.log(chalk.blue('Listing all notes !'))
        notes.listNotes()
    }

})

//create read command

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'title of the note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        const targetNote = notes.readNotes(argv.title) 
        if(!targetNote){
            console.log(chalk.red("No note with the given title found :( "))
        }else{
            console.log(chalk.green('Note found! :)'))
            console.log(chalk.magenta(targetNote.title)+" "+ targetNote.body)
        }
    }

})

yargs.parse()

//console.log(yargs.argv)