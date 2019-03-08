const defaultPhoto = 'https://materializecss.com/images/sample-1.jpg';

export enum Category {
  Smartphone = 'Smartphone',
  Multisim = 'Multi SIM',
  Fablet = 'Fablet',
  Protected = 'Protected',
  Fashion = 'Fashion'
}

interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  photo?: string;
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  photo?: string;

  constructor(name: string, description: string, price: number, category: Category, isAvailable: boolean, photo?: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
    this.photo = photo || defaultPhoto;
  }
}
