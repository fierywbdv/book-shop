export enum BookItemCategories {
  detective = 'detective',
  science = 'science fiction',
  fantasy = 'fantasy',
  novel = 'novel',
  comix = 'comix',
}

export interface BookItemModel {
  name: string;
  description: string;
  price: number;
  category: BookItemCategories;
  createDate: number;
  isAvailable: boolean;
}
