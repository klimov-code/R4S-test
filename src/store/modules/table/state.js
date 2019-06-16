const state = {
  products: [],
  groupBy: 'product',
  initialFields: [
    {
      key: 'product',
      label: 'Dessert (100g serving)',
      sortable: true
    },
    {
      key: 'calories',
      label: 'Calories',
      sortable: true
    },
    {
      key: 'fat',
      label: 'Fat (g)',
      sortable: true
    },
    {
      key: 'carbs',
      label: 'Carbs (g)',
      sortable: true
    },
    {
      key: 'protein',
      label: 'Protein (g)',
      sortable: true
    },
    {
      key: 'iron',
      label: 'Iron (%)',
      sortable: true
    }
  ],
  selectedFields: ['product', 'calories', 'fat', 'carbs', 'protein', 'iron'],
  currentPage: 1,
  perPage: 10
};

export { state };
