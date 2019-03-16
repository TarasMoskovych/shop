const defaultPhoto = 'https://materializecss.com/images/sample-1.jpg';

export enum Category {
  Smartphone = 'Smartphone',
  Multisim = 'Multi SIM',
  Fablet = 'Fablet',
  Protected = 'Protected',
  Fashion = 'Fashion'
}

interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  category?: Category;
  isAvailable?: boolean;
  photo?: string;
}

export class Product implements IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  category?: Category;
  isAvailable?: boolean;
  photo?: string;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    price?: number,
    category?: Category,
    isAvailable?: boolean,
    photo?: string
  ) {
    this.id = id || null;
    this.name = name || '';
    this.description = description || '';
    this.price = price || null;
    this.category = category || Category.Smartphone;
    this.isAvailable = isAvailable || false;
    this.photo = photo || defaultPhoto;
  }
}
