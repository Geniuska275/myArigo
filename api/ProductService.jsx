

import { categories } from '../mockData/categories';
import { products } from '../mockData/productList';
import {Category} from './models/Category';
import {SubCategory} from './models/SubCategory';

/**
 * We can use Redux or MobX to have this product service in app's level observable state
 * we can use fetch or axios to fetch the json from server like
 * fetch('server_base_url/endpoints')
 * for now, as we don't have REST APIs, I've put local json files under mockData Folder
 */
export class ProductService {
  /**
   * Fetch the categories against the selected Main Category
   * category/cat-id
   *
   * @param catName (for example Personal Care)
   * @returns returns the specific record and sub categories for Personal Care Category
   */
  getCategories(catName) {
    return categories.find((i) => i.name == catName);
  }

  /**
   * fetch the product list against sub category id, filter out results from `productList.json`
   * /product/sub-category-id=hand-wash
   *
   * @param subCategoryIds
   * @returns Filtered list of products based on Sub Categories selector
   */
  getProductList(subCategoryIds) {
    return products.filter((i) =>
      subCategoryIds.includes(i.id),
    );
  }

  /**
   * Just to implement the All Product selection
   * @returns
   */
  getAllProducts() {
    return products;
  }
}
