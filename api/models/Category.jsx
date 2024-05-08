import {SubCategory} from './SubCategory';

export class Category {
  name;
  subCategories;

  constructor(name, subCategories) {
    this.name = name;
    this.subCategories = subCategories;
  }
}
