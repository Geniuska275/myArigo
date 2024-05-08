export class Product {
  id;
  name;
  image;
  brand;
  price;

  constructor(
    id,
    name,
    image,
    brand,
    price,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.brand = brand;
    this.price = price;
  }
}

class Brand {
  name;

  constructor(name) {
    this.name = name;
  }
}
