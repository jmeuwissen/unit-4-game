window.onload{

}
//function Game() {
    //constructor for all characters
    function Character(fullName, portraitLink, health, AP, CAP) {
        //initial values to set upon character creation
        this.name = fullName;
        this.link = portraitLink;
        this.HP = health;
        this.attackPower = AP;
        this.counterAttackPower = CAP;
        this.isPlayer = false;




        //-------methods for fighting other characters-------
        //universal check function for death
        this.deathCheck = function(isPlayer){
            if(this.HP <= 0){
                if(isPlayer){
                    //logic for ending the game
                }
                else{
                    //logic for killing the NPC (Should potentially put that code elsewhere)
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
const characters = [];

const figrin = new Character("Figrin D'an", "../images/FigrinDan_CT.png", 130, 10, 15);
characters.push(figrin);

const ickabel = new Character("Ickabel G'ont", "../images/Ickabel_G'ont_canon.png", 130, 10, 15);
characters.push(ickabel);

const lirin = new Character("Lirin Car'n", "../images/Lirin-carn.jpg", 130, 10, 15);
characters.push(lirin);

const nalan = new Character("Nalan Cheel", "../images/Nalan_Cheel-SW_Card_Trader.png", 130, 10, 15);
characters.push(nalan);


//}
