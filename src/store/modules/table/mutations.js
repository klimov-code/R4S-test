import { types } from './mutation-types';

const mutations = {
  [types.FETCH_PRODUCTS](state, payload) {
    state.products = payload.products;
  },
  [types.PREV_PAGE](state) {
    state.currentPage -= 1;
  },
  [types.NEXT_PAGE](state) {
    state.currentPage += 1;
  },
  [types.PER_PAGE](state, payload) {
    state.perPage = payload.perPage;
  }
};

export { mutations };
