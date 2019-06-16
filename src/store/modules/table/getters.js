const getters = {
  productsCount: state => state.products.length,
  fields: state => {
    const { initialFields, selectedFields } = state;

    return initialFields.filter(({ key }) => selectedFields.includes(key));
  }
};

export { getters };
