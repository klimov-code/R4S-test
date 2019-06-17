const findIndexes = (items, deleteIds) => {
  const result = [];

  for (const deleteId of deleteIds) {
    const index = items.findIndex(({ id }) => id === deleteId);
    if (index) {
      result.push(index);
    }
  }

  return result;
};

export { findIndexes };
