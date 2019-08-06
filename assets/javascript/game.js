
//function Game() {

    //constructor for all characters
    function Character(fullName, link, health, AP, CAP, constructIsPlayer) {
        //initial values to set upon game creation
        this.name = fullName;
        this.portraitLink = link;
        this.HP = health;
        this.attackPower = AP;
        this.counterAttackPower = CAP;
        this.isPlayer = constructIsPlayer;




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
            this.defend = function (incomingDamage) {

                //decrements appropriate amount of health
                this.HP -= incomingDamage;
                //check for NPC death
                this.deathCheck();
            }
        }
    }
//}