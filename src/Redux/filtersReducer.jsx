const SET_CATEGORY = 'SET_CATEGORY';
const SET_SSORT_BY = 'SET_SSORT_BY';

const initialState = {
  category: null,
  sortBy: {name: 'Популярности', type: 'rating'}
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    case SET_SSORT_BY:
      return {
        ...state,
        sortBy: {name: action.name, type: action.typeSort}
      };

    default:
      return state;
  }
};


export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category
});

export const setSortBy = (typeSort, name) => ({
  type: SET_SSORT_BY,
  typeSort, name
});

export default filtersReducer;
