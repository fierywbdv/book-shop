export enum BookCategories {
  detective = 'detective',
  science = 'science fiction',
  fantasy = 'fantasy',
  novel = 'novel',
  comix = 'comix',
}

export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
}
