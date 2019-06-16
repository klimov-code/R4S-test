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
  },
  [types.SELECTED_FIELDS](state, payload) {
    state.selectedFields = payload.selectedFields;
  },
  [types.GROUP_BY](state, payload) {
    state.groupBy = payload.groupBy;
  }
};

export { mutations };
