
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
        this.charDivEl =    document.createElement("div"); 
        this.charImg =      document.createElement("img");
        this.nameEl =       document.createElement("h3");
        this.HPEl =         document.createElement("h3");


        this.characterSelectInit = function(){
            //finds character-select div and 
            const node = document.getElementById("character-select")
            console.log(node);

            //associate 
            
            this.charDivEl.setAttribute("class", "character");

            //dont need a name id for each element because they will be properties of each object
            // this.charDivEl.setAttribute("id", this.name);


            console.log(this.charDivEl);


            this.charDivEl.image.setAttribute("src", this.link);

            node.appendChild(this.charDivEl);
        
        }

        this.


        //-------methods for fighting other characters-------
        //universal check function for death
        this.deathCheck = function(isPlayer){
            if(this.HP <= 0){
                if(isPlayer){
                    //logic for ending the game
                }
                else{
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
            }
        }
    }

    function makeEnemy(character){
        
    }

        //constructor for all characters

const characters = [];      //array containing all character objects

let isPlaying = false;


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


characters.forEach(characterSelectInit);


//foreach character in the characters array:
//  give that character's element an event click listener 
//      listener will be for initial player character selection

//}
