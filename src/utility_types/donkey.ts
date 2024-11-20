interface IDonkey {
    name: string; 
    age: number; 
    fluffyness: number; 
    favoriteFood: string;
}

enum Donkey {
    Daisy = "Daisy",
    Gus = "Gus",
    Rosie = "Rosie",
    Coco = "Coco",
    Jasper = "Jasper"
}

const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: {
        name: "Daisy", 
        age: 2, 
        fluffyness: 8, 
        favoriteFood: "Cheese"
    },
    [Donkey.Gus]: {
        name: "Gus", 
        age: 8, 
        fluffyness: 4, 
        favoriteFood: "Carrots"
    },
    [Donkey.Rosie]: {
        name: "Rosie", 
        age: 4, 
        fluffyness: 9, 
        favoriteFood: "Cookies& Creams"
    },
    [Donkey.Coco]: {
        name: "Coco", 
        age: 6, 
        fluffyness: 3, 
        favoriteFood: "BeefJerkey"
    }, 
    [Donkey.Jasper]: {
        name: "Jasper", 
        age: 1, 
        fluffyness: 56, 
        favoriteFood: "Milk"
    }
}
console.log(donkeyRecord);

