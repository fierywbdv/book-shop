import { BookItemModel, BookItemCategories } from '@books/models/book-item.model';

export const mockBooksList: BookItemModel[] = [
  {
    name: 'Fahrenheit 451',
    description: `A world-class master combining the incompatible in literature. Creator of such brilliant masterpieces as "The Martian Chronicles"`,
    price: 200,
    category: BookItemCategories.science,
    createDate: 1613916337459,
    isAvailable: true,
  },
  {
    name: 'Master and Margarita',
    description: `One of the most mysterious and amazing novels of the 20th century. The novel "The Master and Margarita" is a visiting card of Mikhail Afanasyevich Bulgakov.`,
    price: 35,
    category: BookItemCategories.novel,
    createDate: 1613910000000,
    isAvailable: true,
  },
  {
    name: 'Flowers for Algernon',
    description: `Forty years ago, it was considered a fantasy. Forty years ago, it read like fantasy.`,
    price: 256,
    category: BookItemCategories.fantasy,
    createDate: 1613500000000,
    isAvailable: true,
  },
  {
    name: 'Little Prince',
    description: `The Little Prince is an allegorical tale, the most famous work of Antoine de Saint-Exupery.`,
    price: 525,
    category: BookItemCategories.fantasy,
    createDate: Date.now(),
    isAvailable: true,
  },
  {
    name: 'The Catcher in the Rye',
    description: `A classic writer, a mystery writer who, at the height of his career, announced his retirement from literature and settled far from worldly temptations in a remote American province.`,
    price: 785.45,
    category: BookItemCategories.novel,
    createDate: 1610200000000,
    isAvailable: true,
  },
];
