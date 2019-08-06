
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
        //method for player characters
        if (this.isPlayer) {
            //will take in a .defend method for its target
            this.attack = function (target) {
                this.HP -= target.defend(this.attackPower);
                //check for player death
                if(this.HP <= 0){
                    //gameover trigger
                }
                this.attackPower += 6;
                

            }
        }
        //method for NPC's
        else {
            // takes in a attack value from player character and applies it to HP
            // returns a counterattack value for .attack method
            this.defend = function (incomingDamage) {

            }
        }
    }
//}