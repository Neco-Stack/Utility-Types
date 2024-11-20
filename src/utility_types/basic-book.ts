import IBook from "./book";

type BasicBook = Omit<IBook, 'publishingYear' | 'shortDescription'>;

const basicBook: BasicBook = {
    author: "George Donati",
    name: "Life of a Wild",
    numberOfPages: 299
};


interface IBasicBook extends Omit<IBook, 'publishingYear' | 'shortDescription'> {}

const basicBook2: IBasicBook = {
    author: "Wayne Rooney",
    name: "Jose Mourinho",
    numberOfPages: 199
}