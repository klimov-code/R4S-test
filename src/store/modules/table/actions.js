import { emulateGetRequest, emulateDeleteRequest } from '../../../api/request';

import { types } from './mutation-types';

const actions = {
  async fetchProducts({ commit }, { callback }) {
    try {
      const products = await emulateGetRequest();

      commit(types.FETCH_PRODUCTS, { products });
    } catch ({ error }) {
      callback(error);

      console.warn(error);
    }
  },
  async deleteProduct({ commit }, { id, callback }) {
    try {
      const deleteProduct = await emulateDeleteRequest();

      if (deleteProduct.message === 'deleted') {
        commit(types.DELETE_PRODUCT, { id });
      }
    } catch ({ error }) {
      callback(error);

      console.warn(error);
    }
  },
  prevPage({ commit }) {
    commit(types.PREV_PAGE);
  },
  nextPage({ commit }) {
    commit(types.NEXT_PAGE);
  },
  perPage({ commit }, payload) {
    commit(types.PER_PAGE, payload);
  },
  selectedFields({ commit }, payload) {
    commit(types.SELECTED_FIELDS, payload);
  },
  groupBy({ commit }, payload) {
    commit(types.GROUP_BY, payload);
  }
};

export { actions };
