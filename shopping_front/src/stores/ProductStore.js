import { observable, action } from 'mobx';

import axios from 'axios';

class ProductStore {
  static __instance = null;
  static getInstance() {
    if (ProductStore.__instance === null) ProductStore.__instance = new ProductStore();
    return ProductStore.__instance;
  }

  @observable item = null;
  @observable items = [];
  @observable typeItems = [];

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

  @action async getCategory(type) {
    console.log(type);
    try {
      let response = await axios({
        url: `http://localhost:8080/api/product/select/${type}`,
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        timeout: 3000
      });
      this.typeItems = response.data;
    } catch (e) {
      console.error(e);
    }
  }

  @action async getByIdx(idx) {
    try {
      let response = await axios({
        url: `http://localhost:8080/api/product/selectById/${idx}`,
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        timeout: 3000
      });
      console.log(response.data);
      this.item = response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ProductStore.getInstance();
