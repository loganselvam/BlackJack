let player ={
    pname:'jai',
    chip:123
}
let cards = []
let sum= 0
let hasBJ = false
let isAlive = false
let messsage =''
// let cp = document.getElementById("chip-el")
// cp.textContent += player.pname + ' $' + player.chip
document.getElementById("chip-el").textContent = player.pname + "$" + player.chip

function startgame(){
    isAlive = true
    let fcard = getRandomCard()
    let scard = getRandomCard()
    cards = [fcard,scard]
    sum = fcard+scard

    renderGame()
    
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *13) +1
    if (randomNumber === 1){
        return 11
    }else if(randomNumber >10){
        return 10
    }
    return randomNumber
}

function renderGame() {
    document.querySelector("#sum-el").textContent = "Sum: " + sum
    document.getElementById("card-el").textContent = 'Cards:' 
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("card-el").textContent += cards[i] +' '
        
    }

    if (sum<=20){
        messsage="do you want to darw another card?"
        console.log(messsage)
        
    }else if (sum === 21) {
        hasBJ = true
        messsage = 'You win.......'
        sum = 0
        cards =[]
        console.log(messsage)
        
        
    }else {
        messsage='You get it next time'
        console.log(messsage)
        isAlive = false
        // sum = 0
        // cards =[]
        // document.getElementById("cards-el").textContent = 0
        // document.getElementById("sum-el").textContent = ' '
        
    }
    document.getElementById("messageEl").textContent = messsage
}
function newcard() {
    // console.log("Drawing new card")
    if (sum<21&& isAlive === true ){
        let new_card = getRandomCard()
        sum +=new_card
        cards.push(new_card)
        console.log(cards) 
        renderGame()
    }
    // let new_card = getRandomCard()
    // sum +=new_card
    // cards.push(new_card)
    // console.log(cards) 
    // renderGame()
}
