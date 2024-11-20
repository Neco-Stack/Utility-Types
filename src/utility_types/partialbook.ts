import IBook from './book';

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
    author: "Necati Abay",
    name: "Die Supercode Bootcamp Abenteuerreise"
};

interface IPartialBook extends Partial<IBook> {}
const partialBook2: IPartialBook = {
    name: "Utility Types Level"
};


