const getters = {
  productsCount: state => state.products.length,
  filteredFields: state => {
    const { initialFields, selectedFields } = state;

    return initialFields.filter(({ key }) => selectedFields.includes(key));
  },
  groupedFields: (state, getters) => {
    const { groupBy } = state;
    const { filteredFields } = getters;

    const index = filteredFields.findIndex(({ key }) => key === groupBy);

    if (index <= 0) {
      return filteredFields;
    } else if (index > 0) {
      const fields = [...filteredFields];
      const copyField = fields[index];

      fields.splice(index, 1);
      fields.unshift(copyField);

      return fields;
    }
  },
  fields: (state, getters) => {
    const { groupedFields } = getters;

    return [
      ...groupedFields,
      {
        key: 'action',
        label: ''
      }
    ];
  }
};

export { getters };
