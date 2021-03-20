import { BookItemModel, BookItemCategories } from '../models/book-item.model';

export const mockBooksList: BookItemModel[] = [
  {
    name: 'Sherlock Holmes',
    description: `Sherlock Holmes is a fictional private detective
      created by British author Sir Arthur Conan Doyl`,
    price: 300,
    category: BookItemCategories.detective,
    createDate: 1613916337459,
    isAvailable: true,
  },
  {
    name: 'X-Men',
    description: `Jonathan Hickman/'s X-Men reboot should be the brightest
      day of the mutant race - but the original X-Men are breaking slowly apart`,
    price: 15,
    category: BookItemCategories.comix,
    createDate: 1613910000000,
    isAvailable: true,
  },
  {
    name: 'Gone With the Wind',
    description: `Gone with the Wind is a 1936 American epic historical novel by Margaret Mitchell`,
    price: 241,
    category: BookItemCategories.novel,
    createDate: 1613500000000,
    isAvailable: true,
  },
  {
    name: 'My New Book',
    description: `It is my new book, not ready yet...`,
    price: 1000,
    category: BookItemCategories.science,
    createDate: Date.now(),
    isAvailable: false,
  },
  {
    name: 'The Lord of the Rings',
    description: `The Lord of the Rings is an epic high fantasy novel 
      by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, 
      the world at some distant time in the past, the story began as a sequel 
      to Tolkien's 1937 children's book The Hobbit, but eventually developed 
      into a much larger work. Written in stages between 1937 and 1949, 
      The Lord of the Rings is one of the best-selling books ever written, 
      with over 150 million copies sold`,
    price: 745.45,
    category: BookItemCategories.fantasy,
    createDate: 1610200000000,
    isAvailable: true,
  },
];
