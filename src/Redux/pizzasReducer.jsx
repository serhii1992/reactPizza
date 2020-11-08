import axios from 'axios';

const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';

const initialState = {
  items: [],
  isPizzasLoaded: false
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.pizzas,
        isPizzasLoaded: true
      };
    case SET_LOADED:
      return {
        ...state,
        isPizzasLoaded: false
      };

    default:
      return state;
  }
};

export default pizzasReducer;

const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  pizzas
});
const setLoaded = () => ({
  type: SET_LOADED
});

export const getPizzas = (category, {type}) => (dispatch) => {
  dispatch(setLoaded())
  axios.get(`http://localhost:3004/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${type}&_order=desc`).then(({data}) => {
    dispatch(setPizzas(data))
  });
};
