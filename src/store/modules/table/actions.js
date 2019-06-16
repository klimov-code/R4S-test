import { emulateGetRequest } from '../../../api/request';

import { types } from './mutation-types';

const actions = {
  async fetchProducts({ commit }) {
    try {
      const products = await emulateGetRequest();

      commit({ type: types.FETCH_PRODUCTS, products });
    } catch (error) {
      console.warn(error);
    }
  },
  prevPage({ commit }) {
    commit({ type: types.PREV_PAGE });
  },
  nextPage({ commit }) {
    commit({ type: types.NEXT_PAGE });
  },
  perPage({ commit }, payload) {
    commit({ type: types.PER_PAGE, ...payload });
  }
};

export { actions };
