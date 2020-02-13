import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/feedMeActions';

const Moods = () => {
  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (action) => {
    dispatch(action);
  };

  return (
    <>
      <Controls>
        <button onClick={() => handleClick(drinkCoffee())}>coffees + {coffees}</button>
        <button onClick={() => handleClick(eatSnack())}>snacks + {snacks}</button>
        <button onClick={() => handleClick(takeNap())}>naps + {naps}</button>
        <button onClick={() => handleClick(study())}>studies + {studies}</button>
      </Controls>
      <Face />
    </>
  );
};

export default Moods;
