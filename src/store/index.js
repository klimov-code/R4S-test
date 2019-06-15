import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import table from './modules/table';

const dev = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    table
  },
  plugins: dev ? [createLogger] : [],
  strict: dev
});

export { store };
