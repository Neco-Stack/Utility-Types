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
    }

}

