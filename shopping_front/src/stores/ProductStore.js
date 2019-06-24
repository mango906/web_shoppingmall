import { observable, action } from 'mobx';

import axios from 'axios';

class ProductStore {
  static __instance = null;
  static getInstance() {
    if (ProductStore.__instance === null) ProductStore.__instance = new ProductStore();
    return ProductStore.__instance;
  }

  @observable items = [];

  @action async getAll() {
    try {
      let response = await axios({
        url: 'http://localhost:8080/api/product/select',
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        timeout: 3000
      });

      this.items = response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ProductStore.getInstance();
