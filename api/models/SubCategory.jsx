export class SubCategory {
  name
  id
  productIds
  selected

  constructor(
    name,
    id,
    productIds,
    selected,
  ) {
    this.id = id;
    this.name = name;
    this.productIds = productIds;
    this.selected = selected;
  }
}
