import IBook from "./book";

type RequiredBook = Required<IBook>;

const requiredBook: RequiredBook = {
    author: "Elliott Waves Theory",
    name: "Fundamental Research on Crypto Economics",
    publishingYear: "1997", 
    shortDescription: "A Young Traders impossible journey",
    numberOfPages: 89
};

interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
    author: "Range Trading and Levels",
    name: "How to trade Altcoins in Bullmarkets",
    publishingYear: "2020",
    shortDescription: "Difference trading", 
    numberOfPages: 111
};

