import React from 'react';

const Categories = React.memo(({itemCategrie, selectСategory, activeCategory}) => {

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            selectСategory(null);
          }}
          className={activeCategory === null ? 'active' : ''}
        >
          Все
        </li>
        {itemCategrie &&
        itemCategrie.map((name, index) => (
          <li
            onClick={() => {
              selectСategory(index);
            }}
            className={activeCategory === index ? 'active' : ''}
            key={`${index}_${name}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
