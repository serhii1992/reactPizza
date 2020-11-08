const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';

const initialState = {
  pizzaInCart: {},
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      const currentPizza = state.pizzaInCart[action.objPizza.id] || []
      const newState = {
        ...state,
        pizzaInCart: {...state.pizzaInCart, [action.objPizza.id]: [...currentPizza, action.objPizza]},
      }
      const arr = Object.values(newState.pizzaInCart)

      //number of pizzas in the basket

      const arrPizzas = []
      for (const key of arr) {
        arrPizzas.push(...key)
      }

      // total price pizza

      const total = arrPizzas.reduce((sum, elem)=> sum + elem.price ,0)
      return {
        ...newState,
        totalCount: arrPizzas.length,
        totalPrice: total
      };

    default:
      return state;
  }
};


export const addPizzaToCart = (objPizza) => ({
  type: ADD_PIZZA_TO_CART,
  objPizza
});


export default cartReducer;
