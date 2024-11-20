import IBook from "./book";

type ReadOnlyBook = Readonly<IBook>

const readOnlyBook: ReadOnlyBook = {
    author: "Adam Fergusson", 
    name: "The Nightmare of the Weimar Hyper-Inflation",
    publishingYear: "1923", 
    shortDescription: "The Prime Minister would do well to put copies of this fascinating history beside every bed in Chequers", 
    numberOfPages: 545
};

// readOnlyBook.name = "New Wave";
console.log(readOnlyBook);

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
    author: "Tim S. Grover",
    name: "Relentless", 
    publishingYear: "1986", 
    shortDescription: "From Good To Great To Unstoppable", 
    numberOfPages: 222
}; 

// readonlyBook2.shortDescription = "changed description";

// console.log(readOnlyBook2);



