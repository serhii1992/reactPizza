import React from 'react';
import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import SortPopup from '../SortPopup';
import {useDispatch, useSelector} from 'react-redux';
import {getPizzas} from '../../Redux/pizzasReducer';
import PizzaPreloader from './../common/PizzaPreloader';
import {setCategory, setSortBy} from '../../Redux/filtersReducer';
import {addPizzaToCart} from "../../Redux/cartReducer";

const namesCategories = ['Мясные', 'Вегетереанские', 'Гриль', 'Острые', 'Закрытые'];
const filterPizzas = [
  {name: 'популярности', type: 'rating'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'}
];

const MainContent = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);
  const {category, sortBy} = useSelector((state) => state.filters);

  const isPizzasLoaded = useSelector((state) => state.pizzas.isPizzasLoaded);

  const selectСategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortPizzas = React.useCallback((type, name) => {
    dispatch(setSortBy(type, name));
  }, []);

  const onAddToPizzaCard = (objPizza) =>{
    dispatch(addPizzaToCart(objPizza));
  }
  React.useEffect(() => {
    dispatch(getPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories itemCategrie={namesCategories} selectСategory={selectСategory} activeCategory={category}/>
        <SortPopup popup={filterPizzas} sortTypeBy={sortBy} onSelectSortPizzas={onSelectSortPizzas} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isPizzasLoaded
          ? (items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} onAddToPizzaCard={onAddToPizzaCard} /> ))
          : (Array(12).fill(0).map((el, i) => <PizzaPreloader key={i}/>))}
      </div>
    </div>
  );
};

export default MainContent;



