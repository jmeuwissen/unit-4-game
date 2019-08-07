
//function Game() {


function Character(fullName, portraitLink, health, AP, CAP) {
    //initial values to set upon character creation
    this.name = fullName;
    this.HP = health;
    this.attackPower = AP;
    this.counterAttackPower = CAP;
    this.isPlayer = false;
    this.link = portraitLink;

    //takes portraitLink and makes an element from it

    //-------------------------ASIDE-----------------------
    //taking portraitLink in from the constructor might be a silly way of doing this
    //I want each object to have an element property for sake of clarity when referencing it later on in the code
    //assigning a new element in the document to the element property here makes sense, if nothing else for the sake of being robust
    //appending that node to an element in the document makes less sense, since many more of those operations will be taking place in the code
    //if i wanted to be perfectly consistent I would declare a function for initializing the "character-select" element
    //I think I've made that argument the clear winning here, so that's what I'll do!
    //-----------------------END ASIDE---------------------

    //initialization of character html elements
    this.charDivEl = document.createElement("div");
    this.imgEl = document.createElement("img");
    this.nameEl = document.createElement("h3");
    this.HPEl = document.createElement("h3");



    this.charDivEl.setAttribute("class", "character");
    //assigns file source to image element
    this.imgEl.setAttribute("src", this.link);

    //initializes text content of nameEl and HPEl with initial values
    this.nameEl.textContent = this.name;
    this.HPEl.textContent = this.HP;

    //append image, hp, and name to charDivEl
    this.charDivEl.appendChild(this.nameEl);
    this.charDivEl.appendChild(this.imgEl);
    this.charDivEl.appendChild(this.HPEl);

    //appends charDivEl to character-select div
    const node = document.getElementById("character-select")

    node.appendChild(this.charDivEl);

        //-------methods for fighting other characters-------
        //universal check function for death
        this.deathCheck = function (isPlayer) {
            if (this.HP <= 0) {
                if (isPlayer) {
                    //logic for ending the game
                }
                else {
                    //logic for killing the NPC (Should potentially put that code elsewhere)
                    //hides NPC's charDivEl when it is killed
                    this.charDivEl.style.display = "none";
                }
                return true;
            }
            return false;
        }

    //method for player characters
    if (this.isPlayer) {
        //will take in a .defend method for its target
        this.attack = function (target) {
            this.HP -= target.defend(this.attackPower);
            //check for player death
            this.deathCheck();
            //increments player attack power
            this.attackPower += 6;
            this.HPEl = this.HP;


        }
    }


    //method for NPC's
    else {
        // takes in a attack value from player character and applies it to HP
        // returns a counterattack value for .attack method
        // should never be called outside of the object here, so it will be defined as a variable
        this.defend = function (incomingDamage) {

            //decrements appropriate amount of health
            this.HP -= incomingDamage;
            //check for NPC death
            this.deathCheck();
            this.HPEl = this.HP;
        }
    }
}

let defenderCharacter = null;

//handler function so we can remove the even listener associated with each particular event
//this moves the divs to their appropriate places after a player character is selected

function playerPickHandler(character){
    //reassigns the clicked characterDiv to the player-character div
    const playerDiv = document.getElementById("player-character");
    playerDiv.appendChild(character.charDivEl);


    playerCharacter = character;
    playerCharacter.isPlayer = true;
    // character            
            const old_element = character.imgEl;
            const new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);
    
    //setting the NPCs to the enemies div and removing their listeners
    //also gives them a new listener for selecting a fighter
    for (let i = 0; i < characters.length; i++) {
        if (!characters[i].isPlayer) {
            //changes the div
            const enemyDiv = document.getElementById("enemies")
            enemyDiv.appendChild(characters[i].charDivEl);

            //removes the old listener
            //found on stackoveflow https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
            const old_element = characters[i].imgEl;
            const new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);

            //giving a new listener for fighter selection
            //reassigns their div to defender div
            //assigns their character object to the "defender" variable
            // characters[i].charDivEl.addEventListener("click")

        }
        
        
    }
    console.log(character)

}

function makeEnemy(character) {

}

//constructor for all characters

const characters = [];      //array containing all character objects
let playerCharacter = null;

let isPlaying = false;

//initializing each character and pushing it into the character array
const figrin = new Character("Figrin D'an", "./assets/images/FigrinDan_CT.png", 130, 10, 15);
characters.push(figrin);

const ickabel = new Character("Ickabel G'ont", "./assets/images/Ickabel_G'ont_canon.png", 130, 10, 15);
characters.push(ickabel);

const lirin = new Character("Lirin Car'n", "./assets/images/Lirin-carn.jpg", 130, 10, 15);
characters.push(lirin);

const nalan = new Character("Nalan Cheel", "./assets/images/Nalan_Cheel-SW_Card_Trader.png", 130, 10, 15);
characters.push(nalan);


//resets game to initial playable state
//used in gameover, win functions and restart button




//applying a listener to each character's image, with a listener handler defined above
characters.forEach(character => {
    character.imgEl.addEventListener("click", function(){
        playerPickHandler(character);
    });
});


