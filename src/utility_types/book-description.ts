import IBook from "./book";

type BookDescription = Pick<IBook, 'name' | 'shortDescription'>; 

const bookDescription: BookDescription = {
    name: "The Great Jonny",
    shortDescription: "An exiting journey through Laos Chaos"
};

interface IBookDescription extends Pick<IBook, 'name' | 'shortDescription'> {}

const bookDescription2: IBookDescription = {
    name: "Theory of Crypro Economics",
    shortDescription: "Intensive study and research of financal crypto metrics in the 21th century"
};
