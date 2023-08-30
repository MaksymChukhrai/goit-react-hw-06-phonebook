import React from 'react';
import { useDispatch } from 'react-redux'; // Импортируем useDispatch
import { setFilter } from '../redux/filtersSlice'; // Импортируем экшен setFilter

const Filter = ({ value }) => {
  const dispatch = useDispatch(); // Получаем функцию dispatch
  return (
    <input
      type="text"
      placeholder="Filter contacts"
      value={value}
     onChange={e => dispatch(setFilter(e.target.value))} 
    />
  );
};



export default Filter;