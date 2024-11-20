import IBook from "./book";

type BookDescription = Pick<IBook, 'name' | 'shortDescription'>; 

const bookDescription: BookDescription = {
    name: "The Great Jonny",
    shortDescription: "An exiting journey through Laos Chaos"
};

interface IBookDescription extends Pick<IBook, 'name' | 'shortDescription'> {}

const bookDescription2: IBookDescription = {
    name: "Theory of Crypro Economics",
    shortDescription: "Intensive study and research of financial crypto metrics in the 21th century"
};
console.log(bookDescription, bookDescription2);
