class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.magic = magic;
        this.maxMagic = magic;
        this.numberOfAttacks = 0;
    }
    learnAttackSkill(attackType) {
        this.numberOfAttacks++;
        let attackName = this.numberOfAttacks;
        this[attackName] = {...attackType};
       
    }
    showStatus(){
        return `${this.name} has ${this.health} health and ${this.magic} magic left.`;
        
    }
    attack(attackType, attackedPokemon){
        if (this.health <= 0) {
            return `${this.name} is already defeated.`
        } else if (this.magic < this[attackType].neededMagic) {
            return `${this.name} has not enough magic, cannot launch attack!`
        } else {
            attackedPokemon.health -= this[attackType].attackHealth;
            this.magic -= this[attackType].neededMagic;
        
            if (attackedPokemon.health <= 0) {
                return `${this.name} launched skill ${this[attackType].type} successfully! ${attackedPokemon.name} is killed (not really).`;
            } else return `${this.name} launched skill ${this[attackType].type} successfully! ${attackedPokemon.name} got ${this[attackType].attackHealth} damage.`;
        }
    }
    giveHealthPotion(size) {
        switch (size) {
            case "small":
            this.health += 20;
            break;
            case "medium": 
            this.health += 50;
            break;
            case "large": 
            this.health += 100;
            break;
            default: 
            return `Buy the correct potion.`;
        }
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
        return;
    }
    giveMagicPotion(size) {
        switch (size) {
            case "small":
            this.magic += 20;
            break;
            case "medium": 
            this.magic += 50;
            break;
            case "large": 
            this.magic += 100;
            break;
            default: 
            return `Buy the correct potion.`;
        }
        if (this.magic > this.maxMagic) {
            this.magic = this.maxMagic;
        }
        return;
    }
};

let pikachu = new Pokemon("pikachu", 120, 100);
let bulbasaur = new Pokemon("bulbasaur", 95, 125);

class AttackSkill {
    constructor(type, attackHealth, neededMagic) {
        this.type = type;
        this.attackHealth = attackHealth;
        this.neededMagic = neededMagic;
    }
}

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let slam = new AttackSkill("slam", 15, 10);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(slam);
bulbasaur.learnAttackSkill(poisonSeed);
console.log(pikachu);
console.log(bulbasaur);
console.log(pikachu.attack(1, bulbasaur));
console.log(bulbasaur.attack(1, pikachu));
console.log(pikachu.attack(1, bulbasaur));
console.log(bulbasaur.attack(1, pikachu));
console.log(pikachu.attack(1, bulbasaur));
console.log(pikachu.showStatus());
console.log(bulbasaur.attack(1, pikachu));
// console.log(bulbasaur.attack(1, pikachu));
// console.log(bulbasaur.attack(1, pikachu));
// console.log(bulbasaur.attack(1, pikachu));



