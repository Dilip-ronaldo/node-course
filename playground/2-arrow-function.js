// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(15))


const event = {
    name: 'Birthday party',
    guestList: ['jenkins', 'ansible', 'cloud9'],
    printGuestList(){
        console.log('Guest List for '+ this.name+"\n")
        this.guestList.forEach((guest)=>{
            console.log(guest+" is attending "+ this.name)
        })
    }
    
}

event.printGuestList()