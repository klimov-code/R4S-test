import { types } from './types';

const mutations = {
  [types.FETCH_PRODUCTS](state, payload) {
    state.products = payload.products;
  },
  [types.DELETE_PRODUCT](state, payload) {
    const deleteProducts = payload.deleteProducts;
  }
};

export { mutations };
