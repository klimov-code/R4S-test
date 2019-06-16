import { emulateGetRequest } from '../../../api/request';

import { types } from './mutation-types';

const actions = {
  async fetchProducts({ commit }) {
    try {
      const products = await emulateGetRequest();

      commit(types.FETCH_PRODUCTS, { products });
    } catch (error) {
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
  }
};

export { actions };
